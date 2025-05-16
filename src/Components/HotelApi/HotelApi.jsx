import React from "react";
import "./hotel.css";
import HotelMap from "./HotelMap"; // 🔁 Import the map component

const featuredHotels = [
  {
    name: "Hotel 1",
    rating: 4.93,
    price: "₱0.00",
    bedrooms: "5 bedrooms",
    area: "214m²",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  // Add others...
];

const locations = {
  "Metro Manila": [
    "Ascott Makati",
    "Belmont Hotel Manila",
    "Citadines Bay City Manila",
    "City Garden GRAND Hotel",
    "Dusit Thani Manila",
    "Edsa Shangri-La, Manila",
    "Holiday Inn Express Manila",
    "Hotel101",
    "Manila Hotel",
    "New World Makati",
    "Okada Manila",
    "Seda BGC (Bonifacio Global City)",
  ],
  Boracay: [
    "Crimson Resort & Spa Boracay",
    "Henann Crystal Sands Resort",
    "Henann Lagoon Resort",
    "Henann Palm Beach",
    "Henann Prime Beach",
    "Movenpick Resort",
    "Shangri-La Boracay",
  ],
  "Cebu / Mactan": [
    "Bai Hotel Cebu",
    "Crimson Resort and Spa Mactan",
    "Dusit Thani Mactan Cebu",
    "Jpark Island Resort and Waterpark",
    "Marco Polo Plaza Cebu",
    "Radisson Blu Cebu",
    "Seda Ayala Center Cebu",
    "Shangri-La Mactan Cebu",
  ],
};

const HotelListing = () => {
  return (
    <div className="hotel-page">
      <header className="hero">
        <h1>Wandernest Hotels</h1>
        <p className="hero-subtext">Explore premium hotels and find your next perfect stay</p>
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

      {/* Map Section */}
      <section className="map-section">
        <h2>📍 Hotel Locator</h2>
        <p className="map-subtext">Search and view hotel locations directly on the map</p>
        <HotelMap />
      </section>

      {/* Available Hotels */}
      <section className="available-section">
        <h2>🏨 Available Hotels by Area</h2>

        <div className="search-bar">
          <input type="text" placeholder="Find a city, hotel or destination" />
          <button>Search</button>
        </div>

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
