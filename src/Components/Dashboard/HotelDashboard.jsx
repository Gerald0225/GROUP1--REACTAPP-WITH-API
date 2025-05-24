import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HotelDashboard.css';
import RoomStatusChart from './RoomStatusChart';
import { useAuth } from '../../Context/AuthContext'; // AuthContext for logout

const HotelDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { logout } = useAuth(); // Use context logout

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    logout(); // Update auth context
    navigate('/register'); // Redirect to register after logout
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p className="subtext">
        Monitor the current status of the hotel, including arrivals, departures, and room status.
      </p>

      {/* TOP GRID SECTION */}
      <div className="top-grid">
        <div className="status-card improved">
          <h3>Current in House</h3>
          <div className="card-content">
            <div className="card-number">0</div>
            <div className="card-label">Rooms</div>
            <div className="card-subtext">Total Pax: 0</div>
          </div>
        </div>

        <div className="status-card improved">
          <h3>Expected Arrivals</h3>
          <div className="card-content">
            <div className="card-number">0</div>
            <div className="card-label">Rooms</div>
            <div className="card-subtext">Total Pax: 0</div>
          </div>
        </div>

        <div className="status-card improved">
          <h3>Expected Departures</h3>
          <div className="card-content">
            <div className="card-number">0</div>
            <div className="card-label">Rooms</div>
            <div className="card-subtext">Total Pax: 0</div>
          </div>
        </div>

        <div className="status-card improved">
          <h3>End of Day</h3>
          <div className="card-content">
            <div className="card-number">0</div>
            <div className="card-label">Rooms</div>
            <div className="card-subtext">Total Pax: 0</div>
          </div>
        </div>
      </div>

      {/* BOTTOM GRID SECTION */}
      <div className="bottom-grid">
        <div className="current-status-card">
          <h3>Current Status</h3>
          <table className="modern-status-table">
            <thead>
              <tr>
                <th>Room</th>
                <th>Pax</th>
                <th>Percent</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Start of Day</td>
                <td>0</td>
                <td>0%</td>
              </tr>
              <tr>
                <td>Realized Arrivals</td>
                <td>0</td>
                <td>0%</td>
              </tr>
              <tr>
                <td>Remaining Departures</td>
                <td>0</td>
                <td>0%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="status-card">
          <h3>Room Status</h3>
          <RoomStatusChart />
        </div>
      </div>

      {/* SETTINGS SIDEBAR */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <div className="profile-section">
            <div className="profile-card">
              <div className="profile-image">
                <img src="https://i.pravatar.cc/80" alt="Default User" />
              </div>
              <div className="profile-info">
                <h3>Guest User</h3>
                <p>guest@example.com</p>
              </div>
            </div>
          </div>

          <div className="sidebar-content">
            <h2>Settings</h2>
            <ul className="sidebar-list">
              <li><button className="sidebar-btn">Profile</button></li>
              <li><button className="sidebar-btn">Notifications</button></li>
              <li><button className="sidebar-btn">Privacy</button></li>
              <li><button className="sidebar-btn" onClick={handleLogout}>Logout</button></li>
            </ul>
          </div>

          <div className="sidebar-footer">
            <button className="home-btn" onClick={handleBackToHome}>
              <i className="fas fa-home"></i>
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </div>

      {/* TOGGLE SIDEBAR GEAR */}
      <button className={`toggle-btn ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        &#9881;
      </button>
    </div>
  );
};

export default HotelDashboard;
