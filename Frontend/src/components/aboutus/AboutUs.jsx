import Navbar from "../Navber";

function AboutUs() {
  return (
    <div
      className="relative w-full min-h-screen flex flex-col text-white"
      style={{
        backgroundImage: "url('/about-bg.jpg')", // Make sure this image exists in /public
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-[url('https://img.freepik.com/premium-photo/black-background-with-black-background-with-white-star-it_994023-346484.jpg')] bg-cover bg-center  bg-opacity-60"></div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <div className="text-center py-12 mt-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#ffcc00]">
            About Vanish
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
            Vanish is dedicated to fire safety education, providing expert training and innovative solutions 
            to protect lives and properties from fire hazards. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia illum porro magnam facere dolores? Animi nostrum, sit minima quidem vitae ullam quibusdam. Magni illum animi tempora recusandae beatae! Beatae exercitationem sit laboriosam, voluptatem error ut optio est eum commodi quisquam?
          </p>
        </div>

        {/* About & Mission Section */}
        <div className="flex flex-col md:flex-row w-full mt-8 gap-6 px-6 md:px-12">
          <div className="flex flex-col border border-gray-300 bg-[#9c2d2d] bg-opacity-90 rounded-xl p-6 shadow-xl flex-1">
            <h2 className="text-3xl font-semibold text-[#ffcc00]">Our Mission</h2>
            <p className="mt-2 text-gray-200">
              We strive to educate and empower individuals and businesses with fire prevention strategies, 
              emergency response training, and risk assessment services to create a fire-safe world. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nisi unde omnis quis veritatis? Dolorum, cum impedit deleniti adipisci debitis, reiciendis ab ratione nemo dolore odit facilis, corrupti est quam accusantium odio perferendis velit possimus assumenda magni soluta. Laborum, incidunt.
            </p>
          </div>

          <div className="flex flex-col border border-gray-300 bg-[#9c2d2d] bg-opacity-90 rounded-xl p-6 shadow-xl flex-1">
            <h2 className="text-3xl font-semibold text-[#ffcc00]">Why Choose Us?</h2>
            <p className="mt-2 text-gray-200">
              Our expert-led programs, real-world simulations, and latest fire safety technologies make us 
              a trusted partner in fire prevention and emergency preparedness. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nisi unde omnis quis veritatis? Dolorum, cum impedit deleniti adipisci debitis, reiciendis ab ratione nemo dolore odit facilis, corrupti est quam accusantium odio perferendis velit possimus assumenda magni soluta. Laborum, incidunt.
            </p>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="py-12 text-center">
          <h1 className="text-4xl font-bold text-[#ffcc00]">What We Offer</h1>

          <div className="flex flex-wrap justify-center gap-8 mt-8 px-6">
            {/* Card 1: Fire Safety Training */}
            <div className="card bg-[#222] bg-opacity-90 w-96 shadow-xl rounded-xl transition-transform transform hover:scale-105">
              <figure className="rounded-t-xl overflow-hidden">
                <img src="/Aboutus1.jpg" alt="Fire Safety Training" className="w-full"/>
              </figure>
              <div className="card-body py-3">
                <h2 className="card-title text-[#ffcc00]">Fire Safety Training</h2>
                <p>Hands-on fire safety training with certified professionals to prepare you for emergencies.</p>
                <div className="card-actions justify-end ">
                  <button className="btn btn-error border p-1 rounded-lg mt-1">Learn More</button>
                </div>
              </div>
            </div>

            {/* Card 2: Fire Extinguisher Services */}
            <div className="card bg-[#222] bg-opacity-90 w-96 shadow-xl rounded-xl transition-transform transform hover:scale-105">
              <figure className="rounded-t-xl overflow-hidden">
                <img src="/aboutus2.jpg" alt="Fire Extinguisher Services" className="w-full"/>
              </figure>
              <div className="card-body py-3">
                <h2 className="card-title text-[#ffcc00]">Fire Extinguisher Services</h2>
                <p>Installation, maintenance, and refilling of fire extinguishers for homes and businesses.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-error border p-1 rounded-lg mt-1">Get Service</button>
                </div>
              </div>
            </div>

            {/* Card 3: Fire Risk Assessment */}
            <div className="card bg-[#222] bg-opacity-90 w-96 shadow-xl rounded-xl transition-transform transform hover:scale-105">
              <figure className="rounded-t-xl overflow-hidden">
                <img src="/aboutus3.jpg" alt="Fire Risk Assessment" className="w-full"/>
              </figure>
              <div className="card-body py-3">
                <h2 className="card-title text-[#ffcc00]">Fire Risk Assessment</h2>
                <p>Professional fire risk analysis to ensure your premises meet fire safety standards.</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-error border p-1 rounded-lg mt-1">Get Assessment</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-full flex flex-col items-center bg-black bg-opacity-70 px-6 py-12">
          <h2 className="text-3xl font-bold text-[#ffcc00]">Stay Safe with Vanish</h2>
          <p className="mt-2 text-gray-300">Want to learn more about fire safety? Contact us today.</p>
          <a
            href="#contact"
            className="mt-4 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;




