import React, { useState, useEffect } from "react";
import { FaUsers, FaBell, FaLink } from "react-icons/fa";

const Admin = () => {
  const [users, setUsers] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notificationTitle, setNotificationTitle] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationLink, setNotificationLink] = useState("");
  const [sentNotifications, setSentNotifications] = useState([]);

  // Simulate users entering every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setUsers((prev) => prev + Math.floor(Math.random() * 5)); // Random users entering
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Handle sending notifications
  const sendNotification = () => {
    if (!notificationTitle.trim() || !notificationMessage.trim()) return;

    const newNotification = {
      title: notificationTitle,
      message: notificationMessage,
      link: notificationLink,
      time: new Date(),
    };

    setSentNotifications([newNotification, ...sentNotifications]);

    // Clear form and close modal
    setNotificationTitle("");
    setNotificationMessage("");
    setNotificationLink("");
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-700">Admin Panel</h1>

        {/* User Counter */}
        <div className="flex items-center justify-between mt-6 p-4 bg-blue-100 rounded-lg">
          <FaUsers className="text-blue-600 text-3xl" />
          <div>
            <h2 className="text-xl font-semibold text-gray-700">Active Users</h2>
            <p className="text-2xl font-bold text-blue-700">{users}</p>
          </div>
        </div>

        {/* Open Notification Form Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Notification <FaBell className="inline ml-2" />
          </button>
        </div>

        {/* Sent Notifications */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700">Recent Notifications</h2>
          <ul className="mt-3 space-y-2">
            {sentNotifications.map((notif, index) => (
              <li key={index} className="p-3 bg-gray-200 rounded-lg">
                <h3 className="font-bold">{notif.title}</h3>
                <p className="text-gray-700">{notif.message}</p>
                {notif.link && (
                  <a href={notif.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 flex items-center gap-1 mt-1">
                    <FaLink /> {notif.link}
                  </a>
                )}
                <span className="block text-sm text-gray-500">{notif.time.toLocaleTimeString()}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Modal for Sending Notification */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Send Notification</h2>

            <label className="block text-gray-700 font-medium">Title</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg mb-3"
              placeholder="Enter notification title..."
              value={notificationTitle}
              onChange={(e) => setNotificationTitle(e.target.value)}
            />

            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              className="w-full p-2 border border-gray-300 rounded-lg mb-3"
              placeholder="Enter notification message..."
              value={notificationMessage}
              onChange={(e) => setNotificationMessage(e.target.value)}
            ></textarea>

            <label className="block text-gray-700 font-medium">Link (Optional)</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              placeholder="Enter link (if any)..."
              value={notificationLink}
              onChange={(e) => setNotificationLink(e.target.value)}
            />

            <div className="flex justify-between">
              <button
                onClick={sendNotification}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Send
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
