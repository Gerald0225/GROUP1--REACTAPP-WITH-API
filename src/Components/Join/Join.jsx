import React from "react";
import joinCSS from './Join.module.css';
import { FaCrown, FaMobileAlt, FaChild, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

function Join() {
    return (
        <section className={joinCSS.join}>
            <div className={joinCSS.joinContent}>
                <h2>Join Wandernest Now</h2>
                <p className={joinCSS.joinText}>
                    Whether you're planning a relaxing escape or an extended getaway, join Wandernest for exclusive perks, seamless bookings, and unforgettable experiences.
                </p>
                <div className={joinCSS.features}>
                    <div className={joinCSS.feature}>
                        <FaCrown className={joinCSS.icon} />
                        <span>Member-Only Deals</span>
                    </div>
                    <div className={joinCSS.feature}>
                        <FaMobileAlt className={joinCSS.icon} />
                        <span>Mobile Check-In & Out</span>
                    </div>
                    <div className={joinCSS.feature}>
                        <FaChild className={joinCSS.icon} />
                        <span>Children Stay Free</span>
                    </div>
                    <div className={joinCSS.feature}>
                        <FaMoon className={joinCSS.icon} />
                        <span>Earn Free Nights</span>
                    </div>
                </div>
                <div className={joinCSS.joinBtn}>
                    <Link to="/register">
                        <button>Join Now</button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Join;
