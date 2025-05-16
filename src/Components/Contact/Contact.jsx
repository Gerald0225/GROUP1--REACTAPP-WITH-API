import React from "react";
import contactCSS from "./Contact.module.css"
import element from './../../Assets/logo.png'


function Contact() {
    return (
        <div className={`${contactCSS.contact_wrapper} section`} id="contact">
            <div className={contactCSS.Reservation}>
                <img src={element} alt="element-contact" />
                <h2>Discover the Hotel of Your Choice</h2>
                <button>Register Now</button>
            </div>
            <div className={contactCSS.form}>
                <small className="section-heading">Contact Us</small>
                <h2>Connect With Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur culpa assumenda veritatis amet velit aperiam quibusdam recusandae magnam placeat eligendi.</p>
                <div className={contactCSS.input_container}>
                    <div className={contactCSS.input_wrapper}>
                        <input type="text" placeholder="Enter First Name  :" />
                    </div>
                    <div className={contactCSS.input_wrapper}>
                        <input type="text" placeholder="Enter Last Name  :" />
                    </div>
                </div>

                <div className={contactCSS.input_container}>
                    <div className={contactCSS.input_wrapper}>
                        <input type="text" placeholder="Enter Email  :" />
                    </div>
                    <div className={contactCSS.input_wrapper}>
                        <input type="text" placeholder="Enter Phone  :" />
                    </div>
                </div>
                <textarea placeholder="Message :"></textarea>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default Contact