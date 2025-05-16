import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import homeCSS from "./Home.module.css";
import logo from "../../Assets/logo.png";
import { MapPin, CalendarDays, Users } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [guestInput, setGuestInput] = useState("1 Room, 1 Adult, 0 Children");

  return (
    <div className={`${homeCSS.homeWrapper} section`} id="home">
      <div className={homeCSS.homeContent}>
        <div className={homeCSS.homeDescrip}>
          <h2>Welcome to Wandernest</h2>
          <p>EXPLORE MORE, RIGHT NEXT DOOR</p>
        </div>
        <div className={homeCSS.homeBtn}>
          <Link to="/top-hotels">
            <button>EXPLORE NOW</button>
          </Link>
          
        </div>

        <div className={homeCSS.homeCard}>
          <div className={homeCSS.homeParagraph}>
            <img src={logo} alt="Logo" />
            <p>Book directly for the best rate, guaranteed. Only via Wandernest.com</p>
          </div>

          <div className={homeCSS.destinationRow}>
            <div className={homeCSS.iconInputWrapper}>
              <MapPin className={homeCSS.icon} />
              <input
                type="text"
                placeholder="Find a city, hotel or destination"
                className={homeCSS.inputField}
              />
            </div>

            <div className={homeCSS.datePickerWrapper}>
              <div className={homeCSS.iconInputWrapper}>
                <CalendarDays className={homeCSS.icon} />
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  placeholderText="Check-In"
                  className={homeCSS.dateInput}
                />
              </div>
              <div className={homeCSS.iconInputWrapper}>
                <CalendarDays className={homeCSS.icon} />
                <DatePicker
                  selected={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  placeholderText="Check-Out"
                  className={homeCSS.dateInput}
                />
              </div>
            </div>

            <div className={homeCSS.iconInputWrapper}>
              <Users className={homeCSS.icon} />
              <input
                type="text"
                value={guestInput}
                onChange={(e) => setGuestInput(e.target.value)}
                className={homeCSS.guestInput}
              />
            </div>

            <div className={homeCSS.searchBtn}>
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
