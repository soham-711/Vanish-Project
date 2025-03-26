import Navber from "../Navber"
const Contact_us = () => (
  
  <div className="w-full flex flex-col md:flex-row">
    {/* Left Part - Contact Form with Background Image */}
    <Navber/>
    <div
      className="w-full md:w-1/2 min-h-screen flex justify-center items-center bg-cover bg-center bg-no-repeat p-5"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1492112007959-c35ae067c37b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZpcmUlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww')",
      }}
    >
      <form className="w-full md:w-[70%] p-6 md:p-10 gap-6 md:gap-10 flex flex-col rounded-lg bg-white/-1 backdrop-blur-lg border border-white/50 shadow-lg">
        <div className="flex flex-col gap-3">
          <label className="font-sans text-xl text-white">Name</label>
          <input
            type="text"
            placeholder="Enter Name"
            className="px-6 border bg-white/10 text-white italic text-md rounded-lg py-3 placeholder-gray-300 placeholder:italic"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="font-sans text-xl text-white">Email</label>
          <input
            type="email"
            placeholder="Enter Email Id"
            className="px-6 border bg-white/10 text-white italic text-md rounded-lg py-3 placeholder-gray-300 placeholder:italic"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label className="font-sans text-xl text-white">Enter message</label>
          <textarea
            rows="3"
            className="px-6 border bg-white/10 text-white italic text-md rounded-lg py-3 placeholder-gray-300 placeholder:italic"
          ></textarea>
        </div>
        <div className="text-center mt-3">
          <button
            type="submit"
            className="w-full md:w-auto px-10 bg-green-400/80 py-3 rounded-lg cursor-pointer hover:bg-green-500 text-white font-bold"
          >
            Send
          </button>
        </div>
      </form>
    </div>

    {/* Right Part - Contact Details */}
    <div className="w-full md:w-1/2 flex flex-col gap-10 p-5 md:p-10 mt-10 md:mt-0">
      <div className="flex flex-col items-center gap-10 md:gap-15">
        <img src="/FireLogo.jpg" alt="Fire logo" className="w-20 rounded-full" />

        <p className="text-2xl font-semibold text-center">
          Get in Touch by any of the following means:
        </p>

        <div className="flex flex-col gap-6 text-center md:text-left md:gap-15">
          <div>
            <h1 className="text-lg font-bold">Address</h1>
            <p className="font-extralight">Shop 5, Block A, Garki International Market, Abuja</p>
          </div>
          <div>
            <h1 className="text-lg font-bold">Email</h1>
            <p className="font-extralight">Vanishsupport@gmail.com</p>
          </div>
          <div>
            <h1 className="text-lg font-bold">Phone Number</h1>
            <p className="font-extralight">07012345678</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Contact_us;
