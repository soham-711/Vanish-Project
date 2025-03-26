import { IoGitNetworkSharp } from "react-icons/io5";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CiLogout, CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const gradientStyle = {
  backgroundImage: "linear-gradient(to right, #e67a00, #ed9100, #f2a800, #f5bf00, #f6d600, #f7d900, #f9dc00, #fadf00, #fece00, #ffbc00, #ffab00, #ff9900)"
};

const sidebarGradient = {
  backgroundImage: "linear-gradient(to right top, #ff952a, #ff5531, #ff722a, #fbef5f)",
};

const User = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [email, setEmail] = useState("");
  
  const [name, setName] = useState("");

 const[article,setarticle]=useState([])
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
  console.log(response)
  
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
    const fetchNews = async () => {
      try {
        const res = await axios.get(
"          https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b608615cd1754a4e97077f4a79b13f5e"
        );
        console.log(res.data.articles)
        setarticle(res.data.articles);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
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

// }, [navigate]);
  return (
    <div className="relative flex flex-col md:flex-row gap-10 min-h-screen w-full text-white p-4  "     style={{ backgroundImage: 'url("fire1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
      <div className="w-full md:w-[30%]   h-auto mt-10 rounded-xl shadow-2xl overflow-hidden relative" style={{backdropFilter:'blur(10px'}}>
      <div className="w-full p-6 flex flex-col md:flex-row items-center gap-4">
  <img
    src={array[userId] || "/default-avatar.png"}
    className="w-20 md:w-24 h-20 md:h-24 rounded-full bg-amber-600"
    alt="User"
  />
  <p className="text-xl md:text-2xl capitalize font-bold text-white">
    Hi {name || "User"}
  </p>
</div>
        <div className="w-full h-[50px] rounded-l-full" style={gradientStyle} ></div>

        <div className="flex flex-col gap-6 mt-5 p-4">
          <div>
            <h1 className="font-semibold text-lg text-orange-600">Email:</h1>
            <p className="text-sm md:text-base text-700">{email}</p>
          </div>
          <div>
            <h1 className="font-semibold text-lg text-orange-600">Mobile No:</h1>
            <p className="text-sm md:text-base text-700">+91 62970234</p>
          </div>
          <div>
            <h1 className="font-semibold text-lg text-orange-600">Country:</h1>
            <p className="text-sm md:text-base text-700">India</p>
          </div>
          <div>
            <h1 className="font-semibold text-lg text-orange-600">Gender:</h1>
            <p className="text-sm md:text-base text-700">Male</p>
          </div>

          <button onClick={() => setIsEditing(!isEditing)} className="flex items-center gap-2 justify-center w-full md:w-auto p-3 bg-orange-600 text-white font-bold rounded-lg cursor-pointer hover:bg-orange-400 transition-all">
            <CiEdit className="text-lg " /> Edit Profile
          </button>

          <button onClick={logout} className="flex items-center gap-2 justify-center w-full md:w-auto p-3 bg-red-800 text-white font-bold rounded-lg cursor-pointer hover:bg-red-700 transition-all">
            <CiLogout className="text-lg" /> Logout
          </button>
        </div>
      </div>
  
      <div className="w-full md:w-2/5 p-5 bg-white text-black rounded-xl shadow-lg overflow-auto  mt-10 max-h-[650px]">
        <h2 className="text-3xl font-bold mb-4 text-center text-orange-600">Todays Hot Topic</h2>
        {article.length === 0 ? (
          <p>Loading...</p>
        ) : (
          article.map((news, index) => (
            <div key={index} className="mb-4 border-b pb-4">
              {news.urlToImage && <img src={news.urlToImage} alt="news" className="w-full h-40 object-cover rounded-md" />}
              <h3 className="font-semibold mt-2">{news.title}</h3>
              <a href={news.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center">
                <IoGitNetworkSharp className="mr-2" /> Visit The Website
              </a>
            </div>
          ))
        )}
      </div>

      {/* Edit Profile Form */}
      {isEditing && (
        <form onSubmit={submitHandler} className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="w-[90%] md:w-[30%] bg-white shadow-xl p-6 rounded-lg text-black" style={sidebarGradient}>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Edit Profile</h2>

            <label className="block mb-2 text-white">Name:</label>
            <input type="text" className="w-full p-2 border rounded-lg mb-4" value={name} onChange={(e) => setName(e.target.value)} />

            <label className="block mb-2 text-white">Email:</label>
            <input type="email" className="w-full p-2 border rounded-lg mb-4" value={email} onChange={(e) => setEmail(e.target.value)} />

            <div className="flex flex-col md:flex-row gap-3">
              <button type="button" className="w-full md:w-auto px-5 py-2 bg-red-900 text-white rounded-lg hover:bg-red-700 transition-all" onClick={() => setIsEditing(false)}>Cancel</button>
              <button type="submit" className="w-full md:w-auto px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-yellow-500 transition-all">Save</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default User;