import Footer from "./Footer";
import Navbar from "./Navber";
// function Home() {
//   return (
//     <div className="flex flex-col min-h-screen">
//      <Navbar/>
//     <div className="flex flex-col flex-grow bg-[#2C2C2C] text-white w-full">
     
  
//       <div className="flex flex-col md:flex-row mt-20 px-4 gap-6 w-full">
//         {/* Sidebar */}
//         <div className="w-full  md:w-1/4 p-6 rounded-lg shadow-md bg-[#3D3D3D] text-white space-y-8">
//           {/* Section 1 */}
//           <div className="flex flex-col items-center hover:cursor-pointer hover:bg-[#4D4D4D] p-2 rounded-lg transition">
//             <button
//               className="w-24 h-24 md:w-28 md:h-28 bg-cover bg-center rounded-full transition shadow-lg hover:scale-105"
//               style={{ backgroundImage: "url('/home-vanish.jpg')" }}
//             ></button>
//           </div>

//           {/* Section 2 */}
//           <div className="flex flex-col items-center hover:cursor-pointer hover:bg-[#4D4D4D] p-2 rounded-lg transition">
//             <button
//               className="w-24 h-24 md:w-28 md:h-28 bg-cover bg-center rounded-full transition shadow-lg hover:scale-105"
//               style={{ backgroundImage: "url('/training-hub.jpg')" }}
//             ></button>
//           </div>

//           {/* Section 3 */}
//           <div className="flex flex-col items-center hover:cursor-pointer hover:bg-[#4D4D4D] p-2 rounded-lg transition">
//             <button
//               className="w-24 h-24 md:w-28 md:h-28 bg-cover bg-center rounded-full transition shadow-lg hover:scale-105"
//               style={{ backgroundImage: "url('/ai-moc.jpg')" }}
//             ></button>
//           </div>

//           {/* Section 4 */}
//           <div className="flex flex-col items-center hover:cursor-pointer hover:bg-[#4D4D4D] p-2 rounded-lg transition">
//             <button
//               className="w-24 h-24 md:w-28 md:h-28 bg-cover bg-center rounded-full transition shadow-lg hover:scale-105"
//               style={{ backgroundImage: "url('/Fire-bot.jpg')" }}
//             ></button>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div
//           className="w-full  lg:w-3/4 bg-[#222222] p-6 rounded-lg shadow-md text-lg font-semibold text-white min-h-[300px]"
//           style={{
//             backgroundImage: "url('/gasjar.jpg')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <p className="leading-[1.2]">
//             <h1 className="text-[65px] font-extrabold uppercase text-white stroke-black drop-shadow-lg">
//               VAN<span className="text-red-500">I</span>SH
//             </h1>
//             <h4 className="text-[35px] font-extrabold uppercase text-white stroke-black drop-shadow-lg">
//               NO MORE <span className="text-red-500">F</span>LAME,
//             </h4>
//             <h4 className="text-[35px] font-extrabold uppercase text-white stroke-black drop-shadow-lg">
//               NO MORE <span className="text-yellow-500">F</span>A
//               <span className="text-red-500">I</span>L,
//             </h4>
//             <h4 className="text-[35px] font-extrabold uppercase text-white stroke-black drop-shadow-lg">
//               ONLY <span className="text-yellow-500">S</span>A
//               <span className="text-gray-300">F</span>E
//               <span className="text-yellow-500">T</span>Y,
//             </h4>
//             <h4 className="text-[35px] font-extrabold uppercase text-white stroke-black drop-shadow-lg">
//               WITH <span className="text-red-500">F</span>A
//               <span className="text-gray-300">I</span>T
//               <span className="text-red-500">H</span>.
//             </h4>
//           </p>
//         </div>
//       </div>
      
//     </div>
      

//     </div>
//   );
// }

// export default Home;


function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#2C2C2C]">
      {/* Navbar */}
      <Navbar />

      {/* Main Container */}
      <div className="flex flex-col md:flex-row mt-28 md:mt-25 px-4 gap-6 w-full flex-grow">
        {/* Sidebar - Responsive */}
        <div className="w-full md:w-1/4 p-4 md:p-6 rounded-lg shadow-md bg-[#3D3D3D] text-white space-y-6 md:space-y-8 overflow-x-auto md:overflow-visible flex md:flex-col gap-4 md:gap-0">
          {["home-vanish.jpg", "training-hub.jpg", "ai-moc.jpg", "Fire-bot.jpg"].map((img, index) => (
            <div key={index} className="flex flex-col items-center hover:cursor-pointer hover:bg-[#4D4D4D] p-2 rounded-lg transition">
              <button
                className="w-20 h-20 md:w-28 md:h-28 bg-cover bg-center rounded-full transition shadow-lg hover:scale-105"
                style={{ backgroundImage: `url('/${img}')` }}
              ></button>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div
          className="w-full lg:w-3/4 bg-[#222222] p-6 md:p-8 rounded-lg shadow-md text-lg font-semibold text-white min-h-[300px] flex flex-col   "
          style={{
            backgroundImage: "url('/gasjar.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
        
          <h1 className="text-4xl md:text-[65px] font-extrabold uppercase text-white drop-shadow-lg">
            VAN<span className="text-red-500">I</span>SH
          </h1>
          <h4 className="text-xl md:text-[35px] font-extrabold uppercase text-white drop-shadow-lg">
            NO MORE <span className="text-red-500">F</span>LAME,
          </h4>
          <h4 className="text-xl md:text-[35px] font-extrabold uppercase text-white drop-shadow-lg">
            NO MORE <span className="text-yellow-500">F</span>A
            <span className="text-red-500">I</span>L,
          </h4>
          <h4 className="text-xl md:text-[35px] font-extrabold uppercase text-white drop-shadow-lg">
            ONLY <span className="text-yellow-500">S</span>A
            <span className="text-gray-300">F</span>E
            <span className="text-yellow-500">T</span>Y,
          </h4>
          <h4 className="text-xl md:text-[35px] font-extrabold uppercase text-white drop-shadow-lg">
            WITH <span className="text-red-500">F</span>A
            <span className="text-gray-300">I</span>T
            <span className="text-red-500">H</span>.
          </h4>
      
        </div>
      </div>

      {/* Footer */}
 
    </div>
  );
}

export default Home;

