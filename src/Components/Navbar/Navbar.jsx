import React, { useRef } from "react";
import { Link } from "react-router-dom";
import navCSS from './Navbar.module.css';
import logo from '../../Assets/logo.png';

function Navbar () {
    const menu = useRef();

    const menuHandler = () => {
        menu.current.classList.toggle(navCSS.showMenu);
    };

    return (
        <div className={navCSS.nav_wrapper}>
            <div className={navCSS.bottomNav}>
                <div className={navCSS.logo}>
                    <img src={logo} alt="Logo" />
                    <a href="#home">andernest</a>
                </div>

                <ul ref={menu}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/top-hotels">Hotels</Link></li>
                    <li><a href="#offers">Offers</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><Link to="/dashboard">Dashboard</Link></li>
                </ul>

                <div className={navCSS.navBtn}>
                    <Link to="/reservation">
                        <button>Make a Reservation</button>
                    </Link>


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
