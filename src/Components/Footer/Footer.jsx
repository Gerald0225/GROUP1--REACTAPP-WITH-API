import React from "react";
import { Link } from "react-router-dom";
import footerCSS from './Footer.module.css';

function Footer() {
    return (
        <div className={`${footerCSS.footer_wrapper} section`}>
            <div className={footerCSS.footerLinks}>
                <h2>Contact</h2>
                <p><Link to="/reservation">Reservation</Link></p>
                <p><Link to="/blogs">News & Blogs</Link></p>
                <p><Link to="/mission-vision">Mission & Vision</Link></p>
                <p><Link to="/facilities">Hotel Facilities</Link></p>
                <p><Link to="/terms">Terms & Conditions</Link></p>
            </div>

            <div className={footerCSS.footerLinks}>
                <h2>Help</h2>
                <p><Link to="/faq">FAQ</Link></p>
                <p><Link to="/feedback">Website Feedback</Link></p>
                <p><Link to="/careers">Careers</Link></p>
                <p><Link to="/guarantee">Service Guarantee</Link></p>
            </div>

            <div className={footerCSS.footerLinks}>
                <h2>Our Service</h2>
                <p><Link to="/top-hotels">Top Hotels</Link></p>
                <p><Link to="/directory">Store Directory</Link></p>
                <p><Link to="/quick-links">Quick Links</Link></p>
                <p><Link to="/insights">Insights</Link></p>
            </div>

            <div className={footerCSS.footerLinks}>
                <h2>About Us</h2>
                <p><Link to="/our-story">Our Story</Link></p>
                <p><Link to="/partners">Partners</Link></p>
                <p><Link to="/customers">Customers</Link></p>
                <p><Link to="/pricing">Pricing</Link></p>
            </div>
        </div>    
    );
}

export default Footer;
