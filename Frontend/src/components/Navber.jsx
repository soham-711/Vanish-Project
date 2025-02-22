import { useState, useRef, useEffect } from "react";
import FireLogo from "../../public/FireLogo.jpg"; // Ensure correct path
import { Link } from "react-router-dom";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  // Close the user menu if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="py-3 max-w-screen absolute z-50 w-full">
      <div className=" max-w-screen px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">

          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="p-2 text-gray-400 hover:bg-gray-700 hover:text-white rounded-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>

          {/* Logo - Centered in Mobile, Left-Aligned in Larger Screens */}
          <div className="flex w-full justify-center sm:w-auto sm:justify-start ">
        <Link to="/"><img className="h-14 sm:h-12 md:h-14 w-14 border rounded-full border-white hover:cursor-pointer" src={FireLogo} alt="Fire Logo" /></Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex flex-1 items-center justify-start">
            <div className="ml-6">
              <div className="flex space-x-4">
                <Link to="/home" className="text-gray-300 hover:text-[#F5ECD5] px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/aboutus" className="text-gray-300 hover:text-[#F5ECD5] px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
                <Link to="/contactus" className="text-gray-300 hover:text-[#F5ECD5] px-3 py-2 rounded-md text-sm font-medium">Contact Us</Link>
              </div>
            </div>
          </div>

          {/* Notifications & User Menu */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Notification Bell */}
            <button className="p-1 text-gray-400 hover:text-white rounded-full">
              <span className="sr-only">View notifications</span>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
              </svg>
            </button>

            {/* User Profile Dropdown */}
            <div className="relative ml-3" ref={userMenuRef}>
              <button
                className="flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                <span className="sr-only">Open user menu</span>
                <img className="w-10 h-10 rounded-full" src="https://static-00.iconduck.com/assets.00/avatar-default-icon-2048x2048-h6w375ur.png" alt="User" />
              </button>

              {/* Dropdown Menu */}
              {userMenuOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
                  {["Your Profile", "Settings", "Sign out"].map((item) => (
                    <a key={item} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link to="/home" className="block rounded-md bg-gray px-3 py-2 text-base font-medium text-white">Home</Link>
            <Link to="/aboutus" className="block rounded-md bg-gray px-3 py-2 text-base font-medium text-white">About Us</Link>
            <Link to="/contactus" className="block rounded-md bg-gray px-3 py-2 text-base font-medium text-white">Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
