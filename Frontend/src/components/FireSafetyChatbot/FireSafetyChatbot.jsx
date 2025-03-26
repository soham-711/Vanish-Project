import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Send, User, X } from "lucide-react";
import logo from "../../../public/FireLogo.jpg"; // Adjust path to your logo

function FireSafetyChatbot() {
  const navigate = useNavigate();
  const chatRef = useRef(null);
  const [messages, setMessages] = useState(() => {
    const savedMessages = localStorage.getItem("fireChatMessages");
    return savedMessages ? JSON.parse(savedMessages) : [
      { sender: "Bot", text: "🔥 Welcome to Vanish! How can I assist you?" }
    ];
  });
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false); // Typing state

  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
    localStorage.setItem("fireChatMessages", JSON.stringify(messages));
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "User", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true); // Show typing indicator

    try {
      const response = await axios.post("http://localhost:2000/chat", { message: input });
      console.log(response);
      console.log( response.data.reply.parts[0].text);
      
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "Bot", text: response.data.reply.parts[0].text }
        ]);
        setIsTyping(false); // Remove typing indicator
      }, 2000); // Simulate delay
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "Bot", text: "⚠️ Sorry, an error occurred!" }
      ]);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  };

  const handleClose = () => {
    localStorage.removeItem("fireChatMessages");
    navigate("/home");
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-red-800 flex justify-center items-center z-50 backdrop-blur-md">
      <div className="w-full md:w-3/4 lg:w-2/3 h-[90vh] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 shadow-2xl rounded-2xl flex flex-col overflow-hidden relative animate-fade-in">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-red-500 text-white py-4 px-6 flex justify-between items-center shadow-lg">
          <h2 className="text-2xl font-bold tracking-wide">🔥 Vanish - Fire Safety Chatbot</h2>
          <button onClick={handleClose} className="text-white hover:text-gray-300 transition">
            <X size={28} />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.sender === "User" ? "justify-end" : "justify-start"}`}>
              <div className={`p-3 max-w-[75%] rounded-xl text-white text-md flex items-center gap-2 shadow-md 
                ${msg.sender === "User" ? "bg-gradient-to-r from-blue-500 to-indigo-600" : "bg-gradient-to-r from-gray-700 to-gray-800"}`}>
                {msg.sender === "Bot" ? (
                  <img src={logo} alt="Vanish Logo" className="w-6 h-6 rounded-full" />
                ) : (
                  <User size={20} />
                )}
                <span>{msg.text}</span>
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="p-3 rounded-xl bg-gray-700 text-white text-md shadow-md flex items-center gap-2">
                <img src={logo} alt="Vanish Logo" className="w-6 h-6 rounded-full" />
                <span className="animate-pulse">Vanish is typing...</span>
              </div>
            </div>
          )}
          
          <div ref={chatRef}></div>
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-700 p-4 flex items-center bg-[#2C2C2C]">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress} 
            className="flex-1 p-4 rounded-full text-white bg-gray-800 outline-none placeholder-gray-400 shadow-inner focus:ring-2 focus:ring-orange-500 transition"
            placeholder="Ask about fire safety..."
          />
          <button
            onClick={sendMessage}
            className="ml-3 bg-gradient-to-r from-orange-600 to-red-500 text-white px-6 py-4 rounded-full hover:scale-105 transition transform shadow-lg"
          >
            <Send size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FireSafetyChatbot;
