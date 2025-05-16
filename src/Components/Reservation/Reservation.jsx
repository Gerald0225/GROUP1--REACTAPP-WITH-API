import React, { useEffect, useState } from 'react';
import styles from './Reservation.module.css';

const Reservation = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData && userData.username) {
      setName(userData.username);
    }
  }, []);

  return (
    <div className={styles.reservationWrapper}>
      <h2 className={styles.heading}>Start your unforgettable journey with us</h2>

      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <div className={styles.inputField}>
            <label htmlFor="name">Name*</label>
            <input
              type="text"
              id="name"
              placeholder="First name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Other fields remain unchanged */}
          <div className={styles.inputField}>
            <label htmlFor="phone">Phone Number*</label>
            <input type="tel" id="phone" placeholder="Enter here" required />
          </div>

          <div className={styles.inputField}>
            <label htmlFor="checkin">Check In*</label>
            <input type="date" id="checkin" required />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="checkout">Check Out*</label>
            <input type="date" id="checkout" required />
          </div>

          <div className={styles.inputField}>
            <label htmlFor="adults">Adult*</label>
            <select id="adults" required>
              <option value="">Select</option>
              {[...Array(10)].map((_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
            </select>
          </div>
          <div className={styles.inputField}>
            <label htmlFor="children">Children*</label>
            <select id="children" required>
              <option value="">Select</option>
              {[...Array(10)].map((_, i) => <option key={i} value={i}>{i}</option>)}
            </select>
          </div>

          <div className={styles.inputField}>
            <label htmlFor="roomType">Room Type*</label>
            <select id="roomType" required>
              <option value="">Select</option>
              <option value="standard">Standard</option>
              <option value="deluxe">Deluxe</option>
              <option value="suite">Suite</option>
            </select>
          </div>
          <div className={styles.inputField}>
            <label htmlFor="rooms">Number of Rooms*</label>
            <select id="rooms" required>
              <option value="">Select</option>
              {[...Array(10)].map((_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
            </select>
          </div>
        </div>

        <div className={styles.buttonWrapper}>
          <button type="submit" className={styles.submitBtn}>Check Availability</button>
        </div>
      </form>
    </div>
  );
};

export default Reservation;
