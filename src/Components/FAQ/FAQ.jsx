import React, { useState } from 'react';
import './FAQ.css';
import { FaPlus, FaMinus, FaPhoneAlt } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

const categories = [
  'General Information',
  'Booking & Reservation',
  'Check-in / Check-out',
  'Room Features & Services',
  'Restaurants',
];

const faqs = [
  { question: 'What time is Check-in and Check-out?', answer: 'Check-in is at 3 PM and check-out is at 11 AM.' },
  { question: 'What is the hotel’s cancellation policy?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.' },
  { question: 'Does the hotels have on-site restaurants?', answer: 'Yes, we offer on-site dining with various cuisines to choose from.' },
  { question: 'What types of rooms are available ?', answer: 'We offer standard, deluxe, and suite rooms.' },
  { question: 'Is parking available at the hotels?', answer: 'Yes, free parking is available for all guests.' },
  { question: 'Does the hotels have event or meeting spaces?', answer: 'Yes, we provide fully equipped event and meeting facilities.' },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Questions? <span>Look Here.</span></h2>

      <div className="faq-content">
        <div className="faq-sidebar">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`faq-category ${i === 0 ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
          <div className="faq-contact-box">
            <BsChatDotsFill className="chat-icon" />
            <p>You have different Questions?</p>
            <small>Our team will answer all your questions. Ensuring a quick response.</small>
            <button className="contact-btn">Contact Us</button>
          </div>

          <div className="faq-support">
            <FaPhoneAlt className="phone-icon" />
            <div>
              <p className="support-label">Your Concerns, Our Priority</p>
              <p className="support-bold">24/7 Service</p>
              <p className="support-number">(000) 000 000</p>
            </div>
          </div>
        </div>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{item.question}</span>
                {activeIndex === index ? <FaMinus /> : <FaPlus />}
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
