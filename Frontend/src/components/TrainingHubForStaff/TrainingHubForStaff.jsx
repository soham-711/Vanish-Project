import { Link, useNavigate } from "react-router-dom";

function TrainingHubForStaff() {
  const videos = {
    basic: [
      "/Electrical.mp4",
      "/V1.mp4",
      "/V2.mp4",
      "/Electrical.mp4",
    ],
    advanced: [
      "/V3.mp4",
      "/V4.mp4",
      "/V5.mp4",
      "/Electrical.mp4",
    ],
    organizations: [
      "/V6.mp4",
      "/V7.mp4",
      "/V8.mp4",
      "/Electrical.mp4",
    ],
    vehicles: [
      "/V9.mp4",
      "/Electrical.mp4",
      "/Electrical.mp4",
      "/Electrical.mp4",
    ],
  };
  const navigate = useNavigate()

  return (
    <div className="bg-gradient-to-b from-[#660000] via-[#CC5500] to-[#FFD700] min-h-screen">
      <nav className="flex justify-between items-center h-20 bg-[#8B0000] text-white shadow-lg font-mono px-6 md:px-12">
        <div className="flex items-center gap-2">
          <img
            className="w-16 h-16 rounded-lg shadow-lg"
            src="/Training.png"
            alt="Training Hub Logo"
          />
          <span className="text-2xl font-bold hidden md:block">
            Fire Safety Hub
          </span>
        </div>
        <div className="flex gap-8">
          <Link to="/home" className="hover:text-yellow-300 transition duration-300">
            Home
          </Link>
          <Link to="/aboutus" className="hover:text-yellow-300 transition duration-300">
            About Us
          </Link>
        </div>
      </nav>

      {[
        "Fire Safety Training Videos",
        "Advanced Fire Safety Techniques",
        "Fire Safety for Large Organizations",
        "Fire Safety in Vehicles",
      ].map((title, index) => (
        <div key={index}>
          <div className="px-6 py-10">
            <h2 className="text-4xl font-bold text-white text-center">
              {title}
            </h2>
            <p className="text-gray-200 text-center mt-2 mb-8">
              Learn essential fire safety techniques.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {videos[Object.keys(videos)[index]].map((videoSrc, idx) => (
                <article
                  key={idx}
                  className="bg-white shadow-xl rounded-lg overflow-hidden transform transition hover:scale-105"
                >
                  <video
                    controls
                    className="w-full h-48 object-cover rounded-t-lg shadow-md"
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => e.target.pause()}
                    muted
                  >
                    <source src={videoSrc} type="video/mp4" />
                  </video>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-[#8B0000]">
                      {index === 0 && idx === 0
                        ? "How to Use a Fire Extinguisher"
                        : index === 0 && idx === 1
                        ? "Emergency Evacuation Procedures"
                        : index === 0 && idx === 2
                        ? "Fire Prevention Tips"
                        : index === 0 && idx === 3
                        ? "Workplace Fire Safety"
                        : index === 1 && idx === 0
                        ? "Handling Electrical Fires"
                        : index === 1 && idx === 1
                        ? "Preventing Gas Leaks"
                        : index === 1 && idx === 2
                        ? "Managing High-Risk Areas"
                        : index === 1 && idx === 3
                        ? "Residential Fire Safety"
                        : index === 2 && idx === 0
                        ? "Office Fire Drills"
                        : index === 2 && idx === 1
                        ? "Factory Safety Protocols"
                        : index === 2 && idx === 2
                        ? "Public Space Fire Safety"
                        : index === 2 && idx === 3
                        ? "School Fire Safety"
                        : index === 3 && idx === 0
                        ? "Car Fire Prevention"
                        : index === 3 && idx === 1
                        ? "Bus & Truck Fire Safety"
                        : index === 3 && idx === 2
                        ? "Fire Safety in Public Transport"
                        : index === 3 && idx === 3
                        ? "Emergency Vehicle Response"
                        : "Fire Safety Topic"}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      {index === 0 && idx === 0
                        ? "Learn the correct way to operate a fire extinguisher in an emergency."
                        : index === 0 && idx === 1
                        ? "Understand the importance of quick and safe evacuation."
                        : index === 0 && idx === 2
                        ? "Discover key strategies to prevent fires before they start."
                        : index === 0 && idx === 3
                        ? "Enhance safety measures in workplace environments."
                        : index === 1 && idx === 0
                        ? "Identify risks and best practices for handling electrical fires."
                        : index === 1 && idx === 1
                        ? "Steps to prevent and handle gas leaks effectively."
                        : index === 1 && idx === 2
                        ? "Ensure safety in high-risk fire-prone zones."
                        : index === 1 && idx === 3
                        ? "Tips to keep your home safe from fire hazards."
                        : index === 2 && idx === 0
                        ? "Learn proper office fire drill procedures for preparedness."
                        : index === 2 && idx === 1
                        ? "Follow essential factory fire safety guidelines."
                        : index === 2 && idx === 2
                        ? "Understand fire safety rules in public areas."
                        : index === 2 && idx === 3
                        ? "Keep students and staff safe with school fire protocols."
                        : index === 3 && idx === 0
                        ? "Fire prevention methods for personal vehicles."
                        : index === 3 && idx === 1
                        ? "Safety measures for buses and trucks in fire situations."
                        : index === 3 && idx === 2
                        ? "Protect passengers with effective public transport safety."
                        : index === 3 && idx === 3
                        ? "Emergency response techniques for fire incidents in vehicles."
                        : "Fire safety insights."}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          {index < Object.keys(videos).length - 1 && (
            <div className="relative my-10 flex justify-center items-center">
              <div className="w-full h-3 bg-gradient-to-r from-[#8B0000] via-[#FF4500] to-[#FFD700]"></div>
              <span className="absolute bg-[#8B0000] text-white px-4 py-1 text-sm font-semibold rounded-lg shadow-md">
                {index === 0
                  ? "Stay Aware, Stay Safe!"
                  : index === 1
                  ? "Fire Safety is Everyone’s Responsibility!"
                  : "Protect Lives, Prevent Fires!"}
              </span>
            </div>
          )}
        </div>
      ))}

      <div className="text-center py-8 bg-[#660000] text-white">
        <h3 className="text-xl font-bold">Join Our Fire Safety Training</h3>
        <p className="mt-2 text-sm">
          Learn essential fire safety skills for your workplace and home.
        </p>
        <button onClick={()=>navigate("/contactus")} className="mt-4 px-6 py-2 bg-yellow-400 text-[#8B0000] font-semibold rounded-lg shadow-md hover:bg-yellow-300 transition">
           Get Started
        </button>
      </div>
    </div>
  );
}

export default TrainingHubForStaff;
