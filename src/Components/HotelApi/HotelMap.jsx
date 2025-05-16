import React, { useState, useRef } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";
import "./HotelMap.css"; // <-- Import the styles

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 14.5995,
  lng: 120.9842,
};

const HotelMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyB3zIa1Mhkb6UnfQYnV0ePZNgEjTaURSIM", // Replace with real key
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

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps...";

  return (
    <div className="map-container">
      <div className="map-search-bar">
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter hotel name"
          className="map-search-input"
        />
        <button onClick={handleSearch} className="map-search-button">
          Search Hotel
        </button>
      </div>
      <div className="google-map-wrapper">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={13}
          center={marker || center}
        >
          {marker && <Marker position={marker} />}
        </GoogleMap>
      </div>
    </div>
  );
};

export default HotelMap;
