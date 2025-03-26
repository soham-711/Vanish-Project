import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

// 🔥 Fire Station & User Location Icons
const userIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/kml/paddle/red-circle.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

const fireStationIcon = new L.Icon({
  iconUrl: "data:image/png;base64,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", // Ensure this image is in your public folder
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40],
});

// 📍 Update Map View Component
const ChangeMapView = ({ coords }) => {
  const map = useMap();
  if (coords) {
    map.setView(coords, 13);
  }
  return null;
};

ChangeMapView.propTypes = {
  coords: PropTypes.arrayOf(PropTypes.number),
};

const MapWithMarkers = () => {
  const [location, setLocation] = useState({ city: "", pincode: "" });
  const [coordinates, setCoordinates] = useState([22.5726, 88.3639]); // Default: Kolkata
  const [fireStations, setFireStations] = useState([]);
  const [error, setError] = useState(null);
  const navigate=useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("authToken");
   
    if (!token) {
      console.log("xxbh")
      navigate("/"); // Redirect if no token
      return;
    }
  
    const fetchUserLocation = async () => {
      try {
        const response = await axios.get("http://localhost:2000/user/location", {
          headers: { Authorization: `Bearer ${token}` },
        });
       
        setLocation((prev)=>{ return {city:response.data.user.location.city,pincode:response.data.user.location.pincode}})
      
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };
  
    fetchUserLocation();
  }, [navigate]);
  


  // Handle Input Change
  const handleChange = (e) => {
    setLocation({ ...location, [e.target.name]: e.target.value });
  };

  // Fetch Coordinates from City & Pincode
  const fetchCoordinates = async () => {
    setError(null);
    const query =` ${location.city}, ${location.pincode}, India`;
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${query}`;

    try {
      const response = await axios.get(url);
      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        setCoordinates([parseFloat(lat), parseFloat(lon)]);
        fetchFireStations(lat, lon);
      } else {
        setError("⚠ Location not found! Enter a valid city & pincode.");
      }
    } catch (error) {
      setError("⚠ Error fetching location. Try again.",error);
    }
  };

  // Fetch nearby Fire Stations (15 km radius)
  const fetchFireStations = async (lat, lon) => {
    const query = `
      [out:json];
      (
        node["amenity"="fire_station"](around:15000, ${lat}, ${lon});
        way["amenity"="fire_station"](around:15000, ${lat}, ${lon});
        relation["amenity"="fire_station"](around:15000, ${lat}, ${lon});
      );
      out center;
    `;
    const overpassUrl = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`;

    try {
      const response = await axios.get(overpassUrl);
      const stations = response.data.elements
        .filter((station) => station.lat || station.center?.lat) // Ensure valid coordinates
        .map((station) => ({
          id: station.id,
          lat: station.lat || station.center?.lat,
          lng: station.lon || station.center?.lon,
          name: station.tags?.name || "Unnamed Fire Station",
        }));

      if (stations.length === 0) {
        setError("⚠ No fire stations found within 15 km.");
      }
      setFireStations(stations);
    } catch (error) {
      setError("⚠ Error fetching fire stations. Try again.",error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto p-6">
        {/* 🔥 Header */}
        <h1 className="text-3xl font-bold text-center text-red-500">🚒 Find Nearby Fire Stations</h1>
        <p className="text-center text-gray-400 mb-6">Enter your city & pincode to locate fire stations near you.</p>

        {/* 🔥 Search Box */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 bg-gray-800 p-4 rounded-lg shadow-lg">
          <input
            type="text"
            name="city"
            placeholder="Enter City"
            className="border p-3 w-full md:w-1/3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
            value={location.city}
            onChange={handleChange}
          />
          <input
            type="text"
            name="pincode"
            placeholder="Enter Pincode"
            className="border p-3 w-full md:w-1/3 rounded-lg bg-gray-700 text-white placeholder-gray-400"
            value={location.pincode}
            onChange={handleChange}
          />
          <button
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition duration-200"
            onClick={fetchCoordinates}
          >
            Search 🔍
          </button>
        </div>

        {/* 🔥 Error Message */}
        {error && <p className="text-center text-red-400 mt-4">{error}</p>}

        {/* 🔥 Map Section */}
        <div className="mt-6 overflow-hidden rounded-lg shadow-lg border-2 border-red-500">
          <MapContainer center={coordinates} zoom={13} style={{ height: "500px", width: "100%" }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <ChangeMapView coords={coordinates} />

            {/* 🔵 User Location Marker */}
            {fireStations.length > 0 && (
              <Marker position={coordinates} icon={userIcon}>
                <Popup>📍 Search Location</Popup>
              </Marker>
            )}

            {/* 🔥 Fire Stations Markers */}
            {fireStations.map((station) => (
              <Marker key={station.id} position={[station.lat, station.lng]} icon={fireStationIcon}>
                <Popup>
                  🚒 {station.name}
                  <br />
                  <a href={`https://www.google.com/maps/search/?api=1&query=${station.lat},${station.lng}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
                    Open in Google Maps
                  </a>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default MapWithMarkers;
