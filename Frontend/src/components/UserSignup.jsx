import { useRef, useState } from "react";
import { EyeIcon, EyeOffIcon, MailIcon, UserIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserSignup() {
  const navigate = useNavigate();
  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const password = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const city = useRef();
  const pin = useRef();
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const fs = firstname.current.value;
    const las = lastname.current.value;
    const ema = email.current.value;
    const pa = password.current.value;
    const pi = pin.current.value;
    const ci = city.current.value;
    const newuser = {
      fullname: {
        firstname: fs,
        lastname: las,
      },
      email: ema,
      password: pa,
      location: {
        city: ci,
        pincode: pi,
      },
    };
  console.log(newuser)
    try {
      const response = await axios.post(
        `http://localhost:2000/user/register`,
        newuser
      );
  console.log(response)
      if (response.status === 200) {
        toast.success(response.data.message || "Signup Successful!", {
          position: "top-right",
        });

        setTimeout(() => {
          navigate("/user-login");
        }, 1000);
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Signup Failed. Try again!",
        {
          position: "top-right",
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://orig14.deviantart.net/e267/f/2014/311/a/d/background_fire_theme_by_lockeliefather-d85ka9h.png')",
      }}
    >
      <ToastContainer />
      <div className="bg-black/50 backdrop-blur-lg p-8 rounded-xl shadow-xl w-full max-w-md text-white border border-red-500/50">
        <h2 className="text-3xl font-bold text-center mb-6 text-red-400 drop-shadow-lg">
          🔥 Create an Account 🔥
        </h2>

        <form onSubmit={submit}>
          <label className=" text-red-500 text-lg">Enter Full Name</label>
          <div className="flex gap-4">
            {/* FIRST NAME DIV */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-red-300">
                First Name
              </label>
              <div className="relative">
                <UserIcon
                  className="absolute left-3 top-3 text-red-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="John"
                  ref={firstname}
                  className="w-full pl-10 pr-4 py-2 bg-black/30 border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 shadow-md text-white"
                />
              </div>
            </div>
            {/*  END*/}
            {/* SECOND NAME DIV */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-red-300">
                Last Name
              </label>
              <div className="relative">
                <UserIcon
                  className="absolute left-3 top-3 text-red-400"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Doe"
                  ref={lastname}
                  className="w-full pl-10 pr-4 py-2 bg-black/30 border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 shadow-md text-white"
                />
              </div>
            </div>
            {/* END */}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-red-300">
              Email
            </label>
            <div className="relative">
              <MailIcon
                className="absolute left-3 top-3 text-red-400"
                size={18}
              />
              <input
                type="email"
                placeholder="johndoe@example.com"
                ref={email}
                className="w-full pl-10 pr-4 py-2 bg-black/30 border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 shadow-md text-white"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-red-300">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                ref={password}
                placeholder="••••••••"
                className="w-full pl-4 pr-10 py-2 bg-black/30 border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 shadow-md text-white"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-red-400"
              >
                {showPassword ? (
                  <EyeOffIcon size={18} />
                ) : (
                  <EyeIcon size={18} />
                )}
              </button>
            </div>
          </div>
          <div>
            <label className="text-lg text-red-500">Location</label>
            <div className="flex flex-row gap-5 mb-5">
              <div className=" flex flex-col gap-2">
                <label className="text-red-300">Your City</label>
                <input
                  type="text"
                  placeholder="Kolkata"
                  className="w-full pl-10 pr-4 py-2 bg-black/30 border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 shadow-md text-white"
                  ref={city}
                ></input>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-red-300">Pincode</label>
                <input
                  type="text"
                  placeholder="xxxxx"
                  className="w-full pl-10 pr-4 py-2 bg-black/30 border border-red-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 shadow-md text-white "
                  ref={pin}
                ></input>
              </div>
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 bg-red-600 hover:bg-red-700 rounded-md font-bold shadow-lg transition-all duration-300 ${
              loading
                ? "opacity-50 cursor-not-allowed"
                : "hover:scale-105 hover:shadow-red-500/50"
            }`}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-300">
          Already have an account?{" "}
          <Link to="/user-login" className="text-red-400 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default UserSignup;
