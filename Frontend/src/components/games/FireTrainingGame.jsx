import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaFireExtinguisher, FaFire, FaClock, FaRunning} from "react-icons/fa";

const FireTrainingGame = () => {
  const [fireLevel, setFireLevel] = useState(5);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);
  const [escaped, setEscaped] = useState(false);
  const [message, setMessage] = useState("Escape the building and put out fires along the way!");

  useEffect(() => {
    if (timeLeft > 0 && fireLevel > 0 && !escaped) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && fireLevel > 0) {
      setMessage("Game Over! The fire spread too much.");
      setGameOver(true);
    }
  }, [timeLeft, fireLevel, escaped]);

  const extinguishFire = () => {
    if (fireLevel > 0) {
      setFireLevel(fireLevel - 1);
      setScore(score + 20);
      setMessage("You put out a fire! Keep moving!");
    }
    if (fireLevel === 1) {
      setMessage("All fires are out! Find the exit quickly!");
    }
  };

  const escapeBuilding = () => {
    if (fireLevel === 0) {
      setEscaped(true);
      setGameOver(true);
      setMessage("You escaped safely! Great job!");
    } else {
      setMessage("You can't escape yet! Extinguish all fires first!");
    }
  };

  const restartGame = () => {
    setFireLevel(5);
    setScore(0);
    setTimeLeft(60);
    setGameOver(false);
    setEscaped(false);
    setMessage("Escape the building and put out fires along the way!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">🔥 Fire Safety Training Game 🔥</h1>
      <p className="text-lg mb-4">{message}</p>
      <p className="text-lg mb-2">Score: {score}</p>
      <p className="text-lg mb-6 flex items-center gap-2"><FaClock /> Time Left: {timeLeft}s</p>
      
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: fireLevel > 0 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center w-32 h-32 bg-red-600 rounded-full mb-6"
      >
        {fireLevel > 0 && <FaFire size={50} />}
      </motion.div>
      
      <div className="flex gap-4">
        <button
          onClick={extinguishFire}
          disabled={gameOver}
          className="bg-blue-600 hover:bg-blue-800 px-6 py-3 text-lg flex items-center gap-2 rounded-md"
        >
          <FaFireExtinguisher /> Extinguish Fire
        </button>
        
        <button
          onClick={escapeBuilding}
          disabled={gameOver || escaped}
          className="bg-green-600 hover:bg-green-800 px-6 py-3 text-lg flex items-center gap-2 rounded-md"
        >
          <FaRunning /> Escape
        </button>
      </div>
      
      {gameOver && (
        <button
          onClick={restartGame}
          className="mt-4 bg-yellow-600 hover:bg-yellow-800 px-6 py-3 text-lg rounded-md"
        >
          Restart Game
        </button>
      )}
    </div>
  );
};

export default FireTrainingGame;
