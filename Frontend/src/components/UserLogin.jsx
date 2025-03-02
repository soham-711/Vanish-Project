
import { useState,useRef } from "react";
import { EyeIcon, EyeOffIcon, LockIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";
 import axios from "axios";

function UserLogin() {
   const navigate = useNavigate();
 const email = useRef();
 const password = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const Submit = async (e) => {
    e.preventDefault();
    const em = email.current.value;
    const pa = password.current.value;
    const newuser = { email: em, password: pa };

    try {
      const response = await axios.post("http://localhost:2000/user/login", newuser);

      if (response.status === 200) {
        const { token, message } = response.data;
        toast.success(message || "Login successful!", { position: "top-right" });

        // Store token
        localStorage.setItem("authToken", token);

        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (error) {
      console.error("Login Error:", error);

      // Handle different error scenarios
      const errorMessage =
        error.response?.data?.message || "Invalid credentials, please try again!";
      toast.error(errorMessage, { position: "top-right" });
    }
  };

  return (
    <div 
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('https://orig14.deviantart.net/e267/f/2014/311/a/d/background_fire_theme_by_lockeliefather-d85ka9h.png')" }}
    >
      <ToastContainer />
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg w-full max-w-md text-white">
        <h2 className="text-3xl font-bold text-center mb-6">Welcome Back</h2>

        <form onSubmit={Submit}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <div className="relative">
              <input 
                type="email" 
                ref={email}
                placeholder="you@example.com" 
                className="w-full pl-4 pr-4 py-2 bg-black/30 border border-gray-500 rounded-md focus:outline-none focus:border-red-500"
              />
            </div>
          </div>

          {/* Password */}
          <div className="mb-6">
            <label className="block text-sm font-medium">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••"
                ref={password}
                className="w-full pl-4 pr-10 py-2 bg-black/30 border border-gray-500 rounded-md focus:outline-none focus:border-red-500"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)} 
                className="absolute right-3 top-3 text-gray-400"
              >
                {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full py-2 bg-red-600 hover:bg-red-700 rounded-md font-bold"
          >
            Log In
          </button>
        </form>

        {/* Forgot Password & Signup */}
        <div className="mt-4 text-center text-sm text-gray-300">
          <button 
            onClick={() => setShowForgotPassword(true)} 
            className="text-red-400 hover:underline"
          >
            Forgot Password?
          </button>
          <p className="mt-2">
            Don&apos;t have an account? <Link to="/user-signup" className="text-red-400 hover:underline">Sign Up</Link>
          </p>
        </div>
      </div>

      {/* Forgot Password Popup */}
      {showForgotPassword && (
        <div className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl shadow-lg w-full max-w-sm text-white relative">
            <button 
              className="absolute top-3 right-3 text-red-500 text-xl" 
              onClick={() => setShowForgotPassword(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-center mb-4 text-red-400">Reset Password</h2>
            <p className="text-sm text-gray-300 text-center mb-4">
              Enter your new password and confirm it.
            </p>
            <form>
              {/* New Password */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-red-300">New Password</label>
                <div className="relative">
                  <LockIcon className="absolute left-3 top-3 text-red-400" size={18} />
                  <input 
                    type={showNewPassword ? "text" : "password"} 
                    placeholder="New Password" 
                    value={newPassword} 
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-black/30 border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 shadow-md text-white"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowNewPassword(!showNewPassword)} 
                    className="absolute right-3 top-3 text-red-400"
                  >
                    {showNewPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-red-300">Confirm Password</label>
                <div className="relative">
                  <LockIcon className="absolute left-3 top-3 text-red-400" size={18} />
                  <input 
                    type={showConfirmPassword ? "text" : "password"} 
                    placeholder="Confirm Password" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-black/30 border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 shadow-md text-white"
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                    className="absolute right-3 top-3 text-red-400"
                  >
                    {showConfirmPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                  </button>
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full py-2 bg-red-600 hover:bg-red-700 rounded-md font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-red-500/50"
              >
                Update Password
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserLogin;
