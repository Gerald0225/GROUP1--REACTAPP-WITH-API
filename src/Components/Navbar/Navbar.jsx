import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import navCSS from './Navbar.module.css';
import logo from '../../Assets/logo.png';
import { useAuth } from "../../Context/AuthContext";

function Navbar() {
  const menu = useRef();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const menuHandler = () => {
    menu.current.classList.toggle(navCSS.showMenu);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className={navCSS.nav_wrapper}>
      <div className={navCSS.bottomNav}>
        <div className={navCSS.logo}>
          <img src={logo} alt="Logo" />
          <a href="#home">wandernest</a>
        </div>

        <ul ref={menu}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/top-hotels">Hotels</Link></li>
          <li><a href="#offers">Offers</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>

          {isAuthenticated ? (
            <>
              <li><Link to="/dashboard">Dashboard</Link></li>
            </>
          ) : null}
        </ul>

        <div className={navCSS.navBtn}>
          {isAuthenticated ? (
            <Link to="/reservation">
              <button className={navCSS.reserveBtn}>Make a Reservation</button>
            </Link>
          ) : (
            <div className={navCSS.authBtns}>
            </div>
          )}

          <div className={navCSS.bars} onClick={menuHandler}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
