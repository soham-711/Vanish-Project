import { useState } from "react";
import { EyeIcon, EyeOffIcon, MailIcon, UserIcon } from "lucide-react";
import {Link} from "react-router-dom"

function UserSignup() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div 
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://orig14.deviantart.net/e267/f/2014/311/a/d/background_fire_theme_by_lockeliefather-d85ka9h.png')" }}
    >
      <div className="bg-black/50 backdrop-blur-lg p-8 rounded-xl shadow-xl w-full max-w-md text-white border border-red-500/50">
        <h2 className="text-3xl font-bold text-center mb-6 text-red-400 drop-shadow-lg">🔥 Create an Account 🔥</h2>

        <form>
          {/* First Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-red-300">First Name</label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-3 text-red-400" size={18} />
              <input 
                type="text" placeholder="John" 
                className="w-full pl-10 pr-4 py-2 bg-black/30 border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 shadow-md text-white"
              />
            </div>
          </div>

          {/* Last Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-red-300">Last Name</label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-3 text-red-400" size={18} />
              <input 
                type="text" placeholder="Doe" 
                className="w-full pl-10 pr-4 py-2 bg-black/30 border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 shadow-md text-white"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-red-300">Email</label>
            <div className="relative">
              <MailIcon className="absolute left-3 top-3 text-red-400" size={18} />
              <input 
                type="email" placeholder="johndoe@example.com" 
                className="w-full pl-10 pr-4 py-2 bg-black/30 border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 shadow-md text-white"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-red-300">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} placeholder="••••••••" 
                className="w-full pl-4 pr-10 py-2 bg-black/30 border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 shadow-md text-white"
              />
              <button 
                type="button" onClick={() => setShowPassword(!showPassword)} 
                className="absolute right-3 top-3 text-red-400"
              >
                {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full py-2 bg-red-600 hover:bg-red-700 rounded-md font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-red-500/50"
          >
            Sign Up
          </button>
        </form>

        {/* Already have an account */}
        <p className="mt-4 text-center text-sm text-gray-300">
          Already have an account? <Link to="/user-login" className="text-red-400 hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default UserSignup;
