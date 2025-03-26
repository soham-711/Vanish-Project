import { useState, useEffect, useRef } from "react";

function Notification() {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "🔥 Fire alert detected near your location!", time: "2 mins ago" },
    { id: 2, message: "⚠️ High gas levels detected, stay cautious!", time: "5 mins ago" },
    { id: 3, message: "🚒 Emergency services alerted automatically.", time: "10 mins ago" },
  ]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const removeNotification = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Notification Bell Icon */}
      <button onClick={() => setIsOpen(!isOpen)} className="relative p-2 text-gray-400 hover:text-white">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
        </svg>
        {notifications.length > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-600 rounded-full animate-pulse">
            {notifications.length}
          </span>
        )}
      </button>

      {/* Notification Dropdown */}
      {isOpen && (
        <div className="absolute right-0 z-20 mt-2 w-80 bg-gray-800 text-white shadow-xl rounded-lg">
          <div className="p-4 border-b border-gray-700">
            <h3 className="text-lg font-semibold">Notifications</h3>
          </div>
          <div className="max-h-60 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-gray-400">No new notifications</div>
            ) : (
              notifications.map((notif) => (
                <div key={notif.id} className="flex justify-between items-start p-4 border-b border-gray-700">
                  <div>
                    <p className="text-sm">{notif.message}</p>
                    <span className="text-xs text-gray-400">{notif.time}</span>
                  </div>
                  <button onClick={() => removeNotification(notif.id)} className="text-red-400 hover:text-red-600">
                    ✖
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="p-3 text-center text-sm text-gray-400 hover:bg-gray-700 cursor-pointer rounded-b-lg">
            View all
          </div>
        </div>
      )}
    </div>
  );
}

export default Notification;
