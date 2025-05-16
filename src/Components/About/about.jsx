import React from 'react';
import './about.css';
import welcomeImg from '../../Assets/about1.png';
import storyImg from '../../Assets/about2.png';
import image from '../../Assets/one.png';
import two from '../../Assets/2.png';
import three from '../../Assets/3.png';
import four from '../../Assets/4.png';
import five from '../../Assets/5.png';


const About = () => {
  return (
    <div className="about-container">
      <header className="hero">
        <h1>About Us</h1>
      </header>

      <section className="section-container">
        <div className="section-text">
          <h2> Welcome to Wandernest</h2>
          <h3>Your Key to a Seamless, Elevated Stay</h3>
          <p>
            Transform your travel experience with the Wanderest Hotel App. Designed to put convenience,
            personalization, and exclusive perks at your fingertips, our app is the ultimate companion for booking,
            exploring, and enjoying your stay.
          </p>
        </div>
        <div className="section-image">
          <img src={welcomeImg} alt="Seaside View" />
        </div>
      </section>

      <section className="section-container our-story">
        <div className="section-text">
          <h2>Our Story</h2>
          <p>
            Wanderest was born out of a simple idea to make travel less stressful and more enjoyable for everyone. In a world full of endless hotel options, conflicting reviews, and overwhelming planning tools, we realized that travelers needed a platform they could truly rely on. That’s when we set out to create a solution that goes beyond just booking a room.
            Wanderest is more than a hotel booking service it’s your all-in-one travel companion. We’re here to simplify your journey from the moment you start planning. Whether you're searching for the perfect hotel, exploring hidden tourist gems, finding top-rated local restaurants, or locating the nearest event venues, Wanderest helps you do it all in one place.
            Our goal is to empower travelers with intuitive tools, accurate information, and curated recommendations so they can focus on what really matters the experience. Every feature we’ve built is inspired by real travel frustrations, solved through thoughtful design and technology. From spontaneous weekend getaways to long-awaited vacations, we aim to make every trip smooth, memorable, and tailored to your interests. With Wanderest, travel isn’t just easier — it’s smarter, more personal, and full of possibility. Because when the planning is seamless, the journey becomes unforgettable.
          </p>
        </div>
        <div className="section-image">
          <img src={storyImg} alt="Scenic View" />
        </div>
      </section>

      <section className="mission-vision-section">
        <h2 className="section-title">Our Mission & Vision</h2>
        <div className="cards-container">
          <div className="info-card">
            <p>Our mission is to help travelers discover their perfect destinations effortlessly by removing the stress and uncertainty from trip planning. 
            We aim to provide clear, comprehensive, and reliable information so that every traveler feels confident and excited about their journey. 
            From inspiration to reservation, we support each step with intuitive tools and genuine insights to ensure a seamless experience.</p>
          </div>
          <div className="info-card">
            <p>Our vision is to empower journeys around the world through innovation and simplicity. 
                We strive to be a trusted travel companion by offering technology-driven solutions that prioritize transparency, comfort, and ease. 
                Whether it's for business or leisure, we envision a world where every stay feels personal, connected, and enriching.</p>
          </div>
        </div>
      </section>

      <section className="instagram-section">
        <div className="instagram-header">
          <h2 className="instagram-heading">Follow Us On Instagram</h2>
          <button className="instagram-button">Follow Us</button>
        </div>
        <div className="instagram-grid">
          <img src={image} alt="Insta 1" />
          <img src={three} alt="Insta 2" />
          <img src={four} alt="Insta 3" />
          <img src={two} alt="Insta 4" />
          <img src={five} alt="Insta 5" />
        </div>
      </section>
    </div>
  );
};

export default About;
