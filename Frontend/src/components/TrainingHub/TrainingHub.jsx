import Navbar from "../Navber";
import Footer from "../Footer";

const TrainingHub = () => {
  return (
    <>
      <Navbar />

      <div
        className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 py-12"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/fire-flame-black-background_53876-111363.jpg?t=st=1740280368~exp=1740283968~hmac=f5965b7c7ce6948465236199b47f102f3d2887b2c33c7bc1cec02dea7145b2a0&w=1380')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Text Section */}
        <div className="text-center text-white mb-10 mt-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-transparent bg-clip-text drop-shadow-md">
            Master Fire Safety
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-300 via-orange-500 to-gray-500 text-transparent bg-clip-text drop-shadow-md mt-3">
            Watch, Learn, and Escape!
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Equip yourself with essential fire safety skills through interactive
            training sessions and engaging escape games.
          </p>
        </div>

        {/* Image & Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
          {/* Escape Game Section */}
          <div className="flex flex-col items-center text-center p-6 bg-black bg-opacity-80 backdrop-blur-lg rounded-xl shadow-lg hover:scale-105 transition-transform">
            <img
              src="/Escape.png"
              alt="Escape Game"
              className="w-40 md:w-52 mb-4"
            />
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-500 via-blue-300 to-gray-100 text-transparent bg-clip-text drop-shadow-lg">
              Fun Educational Escape Game
            </h3>
            <p className="text-gray-300 mt-2">
              Engage in an immersive fire safety simulation where quick thinking
              and teamwork can save lives!
            </p>
          </div>

          {/* Training Hub Section */}
          <div className="flex flex-col items-center text-center p-6 bg-black bg-opacity-80 backdrop-blur-lg rounded-xl shadow-lg hover:scale-105 transition-transform">
            <img
              src="/Training.png"
              alt="Training Hub"
              className="w-40 md:w-52 mb-4"
            />
            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 via-blue-100 to-gray-200 text-transparent bg-clip-text drop-shadow-lg">
              Training Hub for Staff
            </h3>
            <p className="text-gray-300 mt-2">
              Professional fire safety training designed for staff to prevent
              and handle emergencies efficiently.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TrainingHub;
