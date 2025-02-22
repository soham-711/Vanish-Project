
import Navbar from '../Navber';
import Footer from '../Footer';

const TrainingHub = () => {
  return (
    <>
  <Navbar/>
    <div
      className="relative w-full min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH7YFDcmm8wf1CNGxOsILlVbe5VbdRudebIQ&s')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
     

      {/* Text Section */}
      <div className="text-white text-center px-4">
        <p className="font-extrabold font-sans text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-yellow-300 via-orange-500 to-red-600 inline-block text-transparent bg-clip-text drop-shadow-lg">
          Master Fire Safety
        </p>

        <p className="font-extrabold font-sans text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-yellow-300 via-orange-500 to-gray-600 inline-block text-transparent bg-clip-text drop-shadow-lg mt-2">
          Watch, Learn and Escape!
        </p>
      </div>

      {/* Image Section (Fixed for Responsiveness) */}
      <div className="flex flex-wrap justify-center gap-6 w-full max-w-[900px] mt-6 p-4">
        {/* First Row */}
        <div className="flex flex-col items-center w-[45%] min-w-[150px]">
          <img src="/Escape.png" className="w-[80px] md:w-[100px] drop-shadow-lg" alt="Escape" />
          <p className="text-2xl md:text-3xl bg-gradient-to-r from-red-500 via-blue-300 to-gray-100 font-bold text-transparent bg-clip-text drop-shadow-lg text-center">
            Training Hub For Staffs
          </p>
        </div>

        <div className="flex flex-col items-center w-[45%] min-w-[150px]">
          <img src="/Training.png" className="w-[80px] md:w-[100px] drop-shadow-lg" alt="Training" />
          <p className="text-2xl md:text-3xl bg-gradient-to-r from-orange-500 via-blue-100 to-gray-200 font-bold text-transparent bg-clip-text drop-shadow-lg text-center">
            Fun Educational Escape Game
          </p>
        </div>

        {/* Second Row */}
        <div className="flex flex-col items-center w-[45%] min-w-[150px]">
          <img src="/Escape.png" className="w-[80px] md:w-[100px] drop-shadow-lg" alt="Escape" />
          <p className="text-2xl md:text-3xl bg-gradient-to-r from-red-500 via-blue-300 to-gray-100 font-bold text-transparent bg-clip-text drop-shadow-lg text-center">
            Fun Educational Escape Game
          </p>
        </div>

        <div className="flex flex-col items-center w-[45%] min-w-[150px]">
          <img src="/Training.png" className="w-[80px] md:w-[100px] drop-shadow-lg" alt="Training" />
          <p className="text-2xl md:text-3xl bg-gradient-to-r from-orange-500 via-blue-100 to-gray-200 font-bold text-transparent bg-clip-text drop-shadow-lg text-center">
            Fun Educational Escape Game
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default TrainingHub;


