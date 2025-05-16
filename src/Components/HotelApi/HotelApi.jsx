import React, { useState, useRef } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";
import "./hotel.css";

const featuredHotels = [
  {
    name: "Hotel 1",
    rating: 4.93,
    price: "₱0.00",
    bedrooms: "5 bedrooms",
    area: "214m²",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    name: "Hotel 2",
    rating: 4.93,
    price: "₱0.00",
    bedrooms: "5 bedrooms",
    area: "214m²",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    name: "Hotel 3",
    rating: 4.93,
    price: "₱0.00",
    bedrooms: "5 bedrooms",
    area: "214m²",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    name: "Hotel 4",
    rating: 4.93,
    price: "₱0.00",
    bedrooms: "5 bedrooms",
    area: "214m²",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    name: "Hotel 5",
    rating: 4.93,
    price: "₱0.00",
    bedrooms: "5 bedrooms",
    area: "214m²",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    name: "Hotel 6",
    rating: 4.93,
    price: "₱0.00",
    bedrooms: "5 bedrooms",
    area: "214m²",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    name: "Hotel 7",
    rating: 4.93,
    price: "₱0.00",
    bedrooms: "5 bedrooms",
    area: "214m²",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    name: "Hotel 8",
    rating: 4.93,
    price: "₱0.00",
    bedrooms: "5 bedrooms",
    area: "214m²",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    name: "Hotel 9",
    rating: 4.93,
    price: "₱0.00",
    bedrooms: "5 bedrooms",
    area: "214m²",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    name: "Hotel 10",
    rating: 4.93,
    price: "₱0.00",
    bedrooms: "5 bedrooms",
    area: "214m²",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  // Add other hotel entries here...
];

const locations = {
  "Metro Manila": [
    "Ascott Makati", "Belmont Hotel Manila", "Citadines Bay City Manila",
    "City Garden GRAND Hotel", "Dusit Thani Manila", "Edsa Shangri-La, Manila",
    "Holiday Inn Express Manila", "Hotel101", "Manila Hotel", "New World Makati",
    "Okada Manila", "Seda BGC (Bonifacio Global City)",
  ],
  Boracay: [
    "Crimson Resort & Spa Boracay", "Henann Crystal Sands Resort", "Henann Lagoon Resort",
    "Henann Palm Beach", "Henann Prime Beach", "Movenpick Resort", "Shangri-La Boracay",
  ],
  "Cebu / Mactan": [
    "Bai Hotel Cebu", "Crimson Resort and Spa Mactan", "Dusit Thani Mactan Cebu",
    "Jpark Island Resort and Waterpark", "Marco Polo Plaza Cebu", "Radisson Blu Cebu",
    "Seda Ayala Center Cebu", "Shangri-La Mactan Cebu",
  ],
};

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const defaultCenter = {
  lat: 14.5995,
  lng: 120.9842,
};

const HotelListing = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyB3zIa1Mhkb6UnfQYnV0ePZNgEjTaURSIM", // 🔒 Replace with your actual API key
    libraries: ["places"],
  });

  const [marker, setMarker] = useState(null);
  const inputRef = useRef();

  const handleSearch = () => {
    const service = new window.google.maps.places.PlacesService(
      document.createElement("div")
    );

    const request = {
      query: inputRef.current.value,
      fields: ["name", "geometry"],
    };

    service.findPlaceFromQuery(request, (results, status) => {
      if (
        status === window.google.maps.places.PlacesServiceStatus.OK &&
        results.length > 0
      ) {
        const location = results[0].geometry.location;
        setMarker({ lat: location.lat(), lng: location.lng() });
      } else {
        alert("Hotel not found!");
      }
    });
  };

  if (loadError) return <p className="error-msg">❌ Error loading map</p>;
  if (!isLoaded) return <p className="loading-msg">Loading map...</p>;

  return (
    <div className="hotel-page">
      <header className="hero">
        <h1>Wandernest Hotels</h1>
      </header>

      <section className="featured-section">
        <h2>✨ Top Hotels Right Now</h2>
        <div className="hotel-grid">
          {featuredHotels.map((hotel, index) => (
            <div key={index} className="hotel-card">
              <div className="image-wrapper">
                <img src={hotel.img} alt={hotel.name} />
                <div className="rating">★ {hotel.rating}</div>
                <div className="favorite">♡</div>
              </div>
              <div className="hotel-info">
                <h3>{hotel.name}</h3>
                <div className="details">
                  <span>🛏 {hotel.bedrooms}</span>
                  <span>📐 {hotel.area}</span>
                </div>
                <div className="price">
                  <span>{hotel.price}</span>
                  <span className="per-stay">per stay</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integrated Map Section */}
      <section className="map-section">
        <h2>📍 Hotel Locator</h2>
        <p className="map-subtext">Search and view hotel locations directly on the map</p>

        <div className="search-bar">
          <input
            type="text"
            placeholder="Find a city, hotel or destination"
            ref={inputRef}
          />
          <button onClick={handleSearch}>Search</button>
        </div>

        <div className="google-map-wrapper">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={13}
            center={marker || defaultCenter}
          >
            {marker && <Marker position={marker} />}
          </GoogleMap>
        </div>
      </section>

      {/* Hotel Listings by Location */}
      <section className="available-section">
        <h2>🏨 Available Hotels by Area</h2>

        <div className="hotel-listing">
          {Object.entries(locations).map(([location, hotels], index) => (
            <div key={index} className="hotel-column">
              <h3>
                {location} ({hotels.length})
              </h3>
              <ul>
                {hotels.map((hotel, i) => (
                  <li key={i}>{hotel}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HotelListing;
