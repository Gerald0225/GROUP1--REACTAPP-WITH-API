import React, { useState } from 'react';
import './HotelDashboard.css';
import RoomStatusChart from './RoomStatusChart';

const HotelDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    
    <div className="dashboard-container">

      <h1>Dashboard</h1>
      <p className="subtext">
        Monitor the current status of the hotel, including arrivals, departures, and room status.
      </p>

      <div className="top-grid">
        <div className="status-card improved">
          <h3>Current in House</h3>
          <div className="card-content">
            <div className="card-number">59</div>
            <div className="card-label">Rooms</div>
            <div className="card-subtext">Total Pax: 137</div>
          </div>
        </div>

        <div className="status-card improved">
          <h3>Expected Arrivals</h3>
          <div className="card-content">
            <div className="card-number">8</div>
            <div className="card-label">Rooms</div>
            <div className="card-subtext">Total Pax: 20</div>
          </div>
        </div>

        <div className="status-card improved">
          <h3>Expected Departures</h3>
          <div className="card-content">
            <div className="card-number">16</div>
            <div className="card-label">Rooms</div>
            <div className="card-subtext">Total Pax: 32</div>
          </div>
        </div>

        <div className="status-card improved">
          <h3>End of Day</h3>
          <div className="card-content">
            <div className="card-number">51</div>
            <div className="card-label">Rooms</div>
            <div className="card-subtext">Total Pax: 125</div>
          </div>
        </div>
      </div>

      <div className="bottom-grid">
        <div class="current-status-card">
          <h3>Current Status</h3>
          <table class="modern-status-table">
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
                <td>58</td>
                <td>96.67%</td>
              </tr>
              <tr>
                <td>Realized Arrivals</td>
                <td>1</td>
                <td>1.67%</td>
              </tr>
              <tr>
                <td>Remaining Departures</td>
                <td>5</td>
                <td>3.93%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="status-card">
          <h3>Room Status</h3>
          <RoomStatusChart />
        </div>
      </div>

      {/* Settings Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          {/* Profile Section */}
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
          {/* Settings Options */}
          <div className="sidebar-content">
            <h2>Settings</h2>
            <ul className="sidebar-list">
              <li><button className="sidebar-btn">Profile</button></li>
              <li><button className="sidebar-btn">Notifications</button></li>
              <li><button className="sidebar-btn">Privacy</button></li>
              <li><button className="sidebar-btn">Logout</button></li>
            </ul>
          </div>
          <div class="sidebar-footer">
            <button class="home-btn">
              <i class="fas fa-home"></i>
              <span>Back to Home</span>
            </button>
          </div>
        </div>
      </div>
      {/* Toggle Button */}
      <button className={`toggle-btn ${isSidebarOpen ? 'open' : ''}`} onClick={toggleSidebar}>
        &#9881;
      </button>
    </div>
  );
};

export default HotelDashboard;