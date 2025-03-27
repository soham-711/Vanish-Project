// import { useState, useEffect } from "react";
// import axios from "axios";
// import { AlertTriangle, Volume2, Shield, Flame, Loader2 } from "lucide-react";

// function FireSafetyVoiceAlert() {
//   const [gasLevel, setGasLevel] = useState(0);
//   const [flameDetected, setFlameDetected] = useState(1); // Default: No Fire
//   const [alertMessage, setAlertMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const fetchSensorData = async () => {
//       setIsLoading(true);
//       try {
//         const response = await axios.get("http://localhost:2000/sensor-data/SensorData"); // Update API URL
//         console.log(response);

//         setGasLevel(response.data.gas);
//         setFlameDetected(response.data.flame);
//         setIsLoading(false);

//         // Check for danger conditions
//         if (response.data.gasLevel > 100 || response.data.flameDetected === 0) {
//           setAlertMessage("🚨 Fire Danger! Evacuate Immediately!");
//           playAudio();
//         } else {
//           setAlertMessage(""); // No danger
//         }
//       } catch (error) {
//         console.error("Error fetching sensor data:", error);
//         setIsLoading(false);
//       }
//     };

//     const interval = setInterval(fetchSensorData, 5000); // Fetch every 5 seconds
//     return () => clearInterval(interval);
//   }, []);

//   // Play alert sound from public folder
//   const playAudio = () => {
//     const audio = new Audio("/alert.mp3"); // No API, direct from public folder
//     audio.play();
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gradient-to-br from-black via-gray-900 to-red-900">
//       <div className="w-full md:w-3/4 lg:w-2/3 bg-gray-900 p-6 rounded-2xl shadow-2xl text-white">
//         {/* Header */}
//         <div className="flex justify-between items-center bg-gradient-to-r from-orange-600 to-red-500 p-4 rounded-lg shadow-lg">
//           <h2 className="text-2xl font-bold flex items-center gap-2">
//             <Flame size={28} /> Fire Safety Dashboard
//           </h2>
//           <Shield size={28} className="text-white" />
//         </div>

//         {/* Gas & Flame Level Display */}
//         <div className="mt-6 grid grid-cols-2 gap-6 text-center">
//           {/* Gas Level */}
//           <div className="p-4 bg-gray-800 rounded-lg shadow-md">
//             <h3 className="text-lg font-semibold">Gas Level</h3>
//             <div className="text-3xl font-bold mt-2 flex justify-center items-center gap-2">
//               {isLoading ? (
//                 <Loader2 size={32} className="animate-spin" />
//               ) : (
//                 <>
//                   {gasLevel} <span className="text-sm">PPM</span>
//                 </>
//               )}
//             </div>
//           </div>

//           {/* Flame Detection */}
//           <div
//             className={`p-4 rounded-lg shadow-md ${
//               flameDetected === 0 ? "bg-red-700" : "bg-gray-800"
//             }`}
//           >
//             <h3 className="text-lg font-semibold">Flame Detection</h3>
//             <div className="text-3xl font-bold mt-2">
//               {flameDetected === 1 ? "✅ No Fire" : "🔥 Fire Detected!"}
//             </div>
//           </div>
//         </div>

//         {/* Alert Section */}
//         {alertMessage && (
//           <div className="mt-6 p-4 text-center text-white bg-red-600 border border-red-400 rounded-lg shadow-lg animate-pulse">
//             <div className="flex items-center justify-center gap-2">
//               <AlertTriangle size={24} className="text-yellow-300" />
//               <p className="text-lg font-semibold">{alertMessage}</p>
//             </div>
//           </div>
//         )}

//         {/* Voice Alert Button */}
//         <div className="mt-6 flex justify-center">
//           <button
//             onClick={playAudio}
//             className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg transition transform hover:scale-105"
//           >
//             <Volume2 size={20} /> Play Voice Alert
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FireSafetyVoiceAlert;
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { AlertTriangle, Shield, Flame, Loader2, StopCircle } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";

function FireSafetyVoiceAlert() {
  const [gasLevel, setGasLevel] = useState(0);
  const [flameDetected, setFlameDetected] = useState(1);
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sensorHistory, setSensorHistory] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);

  const alertAudioRef = useRef(null);

  useEffect(() => {
    alertAudioRef.current = new Audio();
    alertAudioRef.current.loop = true;
  }, []);

  useEffect(() => {
    const fetchSensorData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("https://vanish-project.onrender.com/sensor-data/SensorData");
        const newSensorData = {
          time: new Date().toLocaleTimeString(),
          gas: response.data.gas,
          flame: response.data.flame,
        };

        setSensorHistory((prev) => [...prev.slice(-19), newSensorData]);
        setGasLevel(response.data.gas);
        setFlameDetected(response.data.flame);
        setIsLoading(false);

        if (response.data.gas > 300 && response.data.flame === 1) {
          setAlertMessage("⚠️ High Gas Level Detected! Stay Alert.");
          playAudio("../../../public/audio1.mp3"); // Play gas alert
        } else if (response.data.gas > 100 && response.data.flame === 0) {
          setAlertMessage("🚨 Fire & Gas Detected! Evacuate Immediately!");
          playAudio("../../../public/audio2.mp3"); // Play fire + gas alert
        } else {
          setAlertMessage("");
          stopAudio();
        }
      } catch (error) {
        console.error("Error fetching sensor data:", error);
        setIsLoading(false);
      }
    };

    const interval = setInterval(fetchSensorData, 5000);
    return () => clearInterval(interval);
  });

  const playAudio = (audioFile) => {
    if (currentAudio !== audioFile) {
      stopAudio(); // Stop current audio before switching
      alertAudioRef.current.src = audioFile;
      alertAudioRef.current.play().catch((err) => console.error("Audio play error:", err));
      setCurrentAudio(audioFile);
      setIsPlaying(true);
    }
  };

  const stopAudio = () => {
    if (alertAudioRef.current) {
      alertAudioRef.current.pause();
      alertAudioRef.current.currentTime = 0;
      setIsPlaying(false);
      setCurrentAudio(null);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 p-6">
      <div className="w-full md:w-3/4 lg:w-2/3 bg-gray-900 p-6 rounded-2xl shadow-2xl text-white">
        <div className="flex justify-between items-center bg-gradient-to-r from-orange-600 to-red-500 p-4 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Flame size={28} /> Fire Safety Dashboard
          </h2>
          <Shield size={28} className="text-white" />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-6 text-center">
          <div className="p-4 bg-gray-800 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Gas Level</h3>
            <div className="text-3xl font-bold mt-2 flex justify-center items-center gap-2">
              {isLoading ? <Loader2 size={32} className="animate-spin" /> : `${gasLevel} PPM`}
            </div>
          </div>

          <div className={`p-4 rounded-lg shadow-md ${flameDetected === 0 ? "bg-red-700" : "bg-gray-800"}`}>
            <h3 className="text-lg font-semibold">Flame Detection</h3>
            <div className="text-3xl font-bold mt-2">
              {flameDetected === 1 ? "✅ No Fire" : "🔥 Fire Detected!"}
            </div>
          </div>
        </div>

        <div className="mt-6 bg-gray-800 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-center">📊 Gas & Flame Levels Over Time</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={sensorHistory}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="gas" stroke="#FFA500" name="Gas Level" strokeWidth={2} />
              <Line type="monotone" dataKey="flame" stroke="#FF0000" name="Flame Level" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {alertMessage && (
          <div className="mt-6 p-4 text-center text-white bg-red-600 border border-red-400 rounded-lg shadow-lg animate-pulse">
            <div className="flex items-center justify-center gap-2">
              <AlertTriangle size={24} className="text-yellow-300" />
              <p className="text-lg font-semibold">{alertMessage}</p>
            </div>
          </div>
        )}

        {isPlaying && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={stopAudio}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg transition transform hover:scale-105"
            >
              <StopCircle size={20} /> Stop Alert
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default FireSafetyVoiceAlert;
