import { useNavigate } from "react-router-dom";

export default function Unauthorized404() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-600">401</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">Unauthorized Access</h2>
      <p className="text-gray-600 mt-2">You do not have permission to view this page.</p>
      {/* <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow hover:bg-blue-700 transition"
      >
        Go to Home
      </button> */}
    </div>
  );
}