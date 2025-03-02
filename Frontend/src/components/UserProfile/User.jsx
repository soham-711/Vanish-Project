// import { FaInstagram } from "react-icons/fa";
// import { useEffect, useRef, useState } from "react";
// import { FaFacebookSquare } from "react-icons/fa";
// import { IoLogoTwitter } from "react-icons/io";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { CiLogout } from "react-icons/ci";
// import { CiEdit } from "react-icons/ci";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios'

// const gradientStyle = {
//   backgroundImage:
//     "linear-gradient(to left, #b2ef3c, #c8e976, #dbd974, #fbef5f)",
// };

// const sidebarGradient = {
//   backgroundImage:
//     "linear-gradient(to right top, #ff952a, #ff5531, #ff722a, #fbef5f)",
// };

// const User = () => {
//   const em=useRef()
//   const fi=useRef()
//   const la=useRef()
//   const pa=useRef()
//   const navigate=useNavigate()
//   const logout=()=>{
//     const token=localStorage.getItem("authToken");

//       localStorage.removeItem("authToken");
// navigate("/user")
//   }
//   const [user, setuserId] = useState(0);
//   const [isEditing, setIsEditing] = useState(false);
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("72829");
//   const [country, setCountry] = useState("India");
//   const [name, setName] = useState("");
//   const [gender, setGender] = useState(" Male");
//   const array = [
//     "th.jpg",
//     "th (1).jpg",
//     "th (2).jpg",
//     "th (3).jpg",
//     "th (4).jpg",
//     "th (5).jpg",
//     "th (6).jpg",
//     "th (7).jpg",
//   ];
//   useEffect(async()=>{
//     const token=localStorage.getItem('authToken')
//     if(!token)
//       navigate("/user-login")
   
//   const response=await axios.get("http://localhost:2000/user/getuser",{
// headers:{
//   authorization: `Bearer ${token}`,
// },
// withCredentials: true

//   })
//   if(response.status==200||response.status==201){
//      const {fullname,email}=response.data.user;
//      const df=fullname.firstname+" "+fullname.lastname;
//      setEmail(email)
//      setName(df)
   
//   }
//   },[navigate])
//   const generate = () => {
//     let store = array.length;
//     return Math.floor(Math.random() * store);
//   };
//   const submitHandeler = (e) => {
//     e.preventDefault();
//     setuserId(generate());
//     setIsEditing(false);
//     toast.success("Profile updated successfully!");
//     setuserId(generate());
//   };

//   return (
//     <div className="relative flex flex-col md:flex-row gap-10  min-h-screen w-full text-white p-4">
//       <ToastContainer position="top-right" autoClose={3000} />
//       {/* Left Sidebar */}
//       <div
//         className="w-full md:w-[6%] p-5 rounded-xl mt-10 flex flex-col gap-6 items-center shadow-xl bg-opacity-80"
//         style={sidebarGradient}>
//         <img
//           src="/FireLogo.jpg"
//           className="w-16 md:w-20 rounded-full shadow-lg"
//           alt="Logo"
//         />

//         <div className="flex flex-row md:flex-col gap-6 items-center">
//           <p className="text-center text-sm md:text-lg font-semibold">Social</p>
//           <a href="#" className="text-2xl md:text-4xl">
//             <FaInstagram className="hover:text-orange-600 cursor-pointer transition-all duration-300" />
//           </a>
//           <a href="#" className="text-2xl md:text-4xl">
//             <IoLogoTwitter className="hover:text-blue-400 cursor-pointer transition-all duration-300" />
//           </a>
//           <a href="#" className="text-2xl md:text-4xl">
//             <FaFacebookSquare className="hover:text-blue-600 cursor-pointer transition-all duration-300" />
//           </a>
//         </div>
//       </div>

//       {/* User Info Card */}
//       <div className="w-full md:w-[30%] bg-amber-100 h-auto mt-10 rounded-xl shadow-2xl overflow-hidden relative">
//         {/* Header with Gradient */}
//         <div className="w-full p-6 flex flex-col md:flex-row items-center gap-4">
//           <img
//             src={`/${array[user]}`}
//             className="w-20 md:w-24 h-20 md:h-24 rounded-full bg-amber-600"
//             alt="User"
//           />
//           <p className="text-xl md:text-2xl capitalize font-bold text-gray-800">
//             Hi {name || "User"}
//           </p>
//         </div>
//         <div className="w-full h-[50px]" style={gradientStyle}></div>

//         <div className="flex flex-col gap-6 mt-5 p-4">
//           <div>
//             <h1 className="font-semibold text-lg text-gray-900">Email:</h1>
//             <p className="text-sm md:text-base text-gray-700">{email}</p>
//           </div>
//           <div>
//             <h1 className="font-semibold text-lg text-gray-900">Mobile No:</h1>
//             <p className="text-sm md:text-base text-gray-700">{mobile}</p>
//           </div>
//           <div>
//             <h1 className="font-semibold text-lg text-gray-900">Country:</h1>
//             <p className="text-sm md:text-base text-gray-700">{country}</p>
//           </div>
//           <div>
//             <h1 className="font-semibold text-lg text-gray-900">Gender:</h1>
//             <p className="text-sm md:text-base text-gray-700">{gender}</p>
//           </div>

//           {/* Edit Profile Button */}
//           <button
//   type="button"
//   className="flex items-center gap-2 justify-center w-full md:w-auto p-3 bg-blue-500 text-white font-bold rounded-lg cursor-pointer hover:bg-blue-700 transition-all"
//   onClick={() => setIsEditing(!isEditing)}
// >
//   <CiEdit className="text-lg" /> Edit Profile
// </button>

// <button
//   type="button" onClick={(e)=>logout(e)}
//   className="flex items-center gap-2 justify-center w-full md:w-auto p-3 bg-red-500 text-white font-bold rounded-lg cursor-pointer hover:bg-red-700 transition-all " 
// >
//   <CiLogout className="text-lg" /> Logout
// </button>

//         </div>
//       </div>

//       {/* Edit Profile Form (Slide-in effect) */}
//       {isEditing && (
//         <form
//           onSubmit={submitHandeler}
//           className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50"
//         >
//           <div className="w-[90%] md:w-[30%] bg-white shadow-xl p-6 rounded-lg text-black">
//             <h2 className="text-xl font-bold text-gray-800 mb-4">
//               Edit Profile
//             </h2>
//             <label className="block mb-2 text-gray-700">Name:</label>
//             <input
//               type="text"
//               className="w-full p-2 border rounded-lg mb-4"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />

//             <label className="block mb-2 text-gray-700">Email:</label>
//             <input
//               type="email"
//               className="w-full p-2 border rounded-lg mb-4"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <label className="block mb-2 text-gray-700">Mobile No:</label>
//             <input
//               type="text"
//               className="w-full p-2 border rounded-lg mb-4"
//               value={mobile}
//               onChange={(e) => setMobile(e.target.value)}
//             />

//             <label className="block mb-2 text-gray-700">Country:</label>
//             <input
//               type="text"
//               className="w-full p-2 border rounded-lg mb-4"
//               value={country}
//               onChange={(e) => setCountry(e.target.value)}
//             />

//             <label className="block mb-2 text-gray-700">Gender:</label>
//             <input
//               type="text"
//               className="w-full p-2 border rounded-lg mb-4"
//               value={gender}
//               onChange={(e) => setGender(e.target.value)}
//             />

//             <div className="flex flex-col md:flex-row gap-3">
//               <button
//                 type="button"
//                 className="w-full md:w-auto px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-red-700 transition-all"
//                 onClick={() => setIsEditing(false)}
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="w-full md:w-auto px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition-all"
//               >
//                 Save
//               </button>
//             </div>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// };

// export default User;
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CiLogout, CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const gradientStyle = {
  backgroundImage: "linear-gradient(to left, #b2ef3c, #c8e976, #dbd974, #fbef5f)",
};

const sidebarGradient = {
  backgroundImage: "linear-gradient(to right top, #ff952a, #ff5531, #ff722a, #fbef5f)",
};

const User = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("72829");
  const [country, setCountry] = useState("India");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");

  const array = [
    "th.jpg", "th (1).jpg", "th (2).jpg", "th (3).jpg",
    "th (4).jpg", "th (5).jpg", "th (6).jpg", "th (7).jpg"
  ];

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        navigate("/user-login");
        return;
      }

      try {
        const response = await axios.get("http://localhost:2000/user/getuser", {
          headers: { authorization: `Bearer ${token}` },
          withCredentials: true,
        });

        if (response.status === 200 || response.status === 201) {
          const { fullname, email } = response.data.user;
          const fullNameString = `${fullname.firstname} ${fullname.lastname}`;
          setEmail(email);
          setName(fullNameString);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        navigate("/");
      }
    };

    fetchUserData();
  }, [navigate]);

  const generate = () => Math.floor(Math.random() * array.length);

  const submitHandler = (e) => {
    e.preventDefault();
    setUserId(generate());
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    navigate("/user-login");
  };

  return (
    <div className="relative flex flex-col md:flex-row gap-10 min-h-screen w-full text-white p-4">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Sidebar */}
      <div className="w-full md:w-[6%] p-5 rounded-xl mt-10 flex flex-col gap-6 items-center shadow-xl bg-opacity-80" style={sidebarGradient}>
        <img src="/FireLogo.jpg" className="w-16 md:w-20 rounded-full shadow-lg" alt="Logo" />
        <div className="flex flex-row md:flex-col gap-6 items-center">
          <p className="text-center text-sm md:text-lg font-semibold">Social</p>
          <a href="#" className="text-2xl md:text-4xl">
            <FaInstagram className="hover:text-orange-600 cursor-pointer transition-all duration-300" />
          </a>
          <a href="#" className="text-2xl md:text-4xl">
            <IoLogoTwitter className="hover:text-blue-400 cursor-pointer transition-all duration-300" />
          </a>
          <a href="#" className="text-2xl md:text-4xl">
            <FaFacebookSquare className="hover:text-blue-600 cursor-pointer transition-all duration-300" />
          </a>
        </div>
      </div>

      {/* User Info Card */}
      <div className="w-full md:w-[30%] bg-amber-100 h-auto mt-10 rounded-xl shadow-2xl overflow-hidden relative">
        <div className="w-full p-6 flex flex-col md:flex-row items-center gap-4">
          <img src={`/${array[userId]}`} className="w-20 md:w-24 h-20 md:h-24 rounded-full bg-amber-600" alt="User" />
          <p className="text-xl md:text-2xl capitalize font-bold text-gray-800">
            Hi {name || "User"}
          </p>
        </div>
        <div className="w-full h-[50px]" style={gradientStyle}></div>

        <div className="flex flex-col gap-6 mt-5 p-4">
          <div>
            <h1 className="font-semibold text-lg text-gray-900">Email:</h1>
            <p className="text-sm md:text-base text-gray-700">{email}</p>
          </div>
          <div>
            <h1 className="font-semibold text-lg text-gray-900">Mobile No:</h1>
            <p className="text-sm md:text-base text-gray-700">{mobile}</p>
          </div>
          <div>
            <h1 className="font-semibold text-lg text-gray-900">Country:</h1>
            <p className="text-sm md:text-base text-gray-700">{country}</p>
          </div>
          <div>
            <h1 className="font-semibold text-lg text-gray-900">Gender:</h1>
            <p className="text-sm md:text-base text-gray-700">{gender}</p>
          </div>

          <button onClick={() => setIsEditing(!isEditing)} className="flex items-center gap-2 justify-center w-full md:w-auto p-3 bg-blue-500 text-white font-bold rounded-lg cursor-pointer hover:bg-blue-700 transition-all">
            <CiEdit className="text-lg" /> Edit Profile
          </button>

          <button onClick={logout} className="flex items-center gap-2 justify-center w-full md:w-auto p-3 bg-red-500 text-white font-bold rounded-lg cursor-pointer hover:bg-red-700 transition-all">
            <CiLogout className="text-lg" /> Logout
          </button>
        </div>
      </div>

      {/* Edit Profile Form */}
      {isEditing && (
        <form onSubmit={submitHandler} className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="w-[90%] md:w-[30%] bg-white shadow-xl p-6 rounded-lg text-black">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Edit Profile</h2>

            <label className="block mb-2 text-gray-700">Name:</label>
            <input type="text" className="w-full p-2 border rounded-lg mb-4" value={name} onChange={(e) => setName(e.target.value)} />

            <label className="block mb-2 text-gray-700">Email:</label>
            <input type="email" className="w-full p-2 border rounded-lg mb-4" value={email} onChange={(e) => setEmail(e.target.value)} />

            <div className="flex flex-col md:flex-row gap-3">
              <button type="button" className="w-full md:w-auto px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-red-700 transition-all" onClick={() => setIsEditing(false)}>Cancel</button>
              <button type="submit" className="w-full md:w-auto px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition-all">Save</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default User;
