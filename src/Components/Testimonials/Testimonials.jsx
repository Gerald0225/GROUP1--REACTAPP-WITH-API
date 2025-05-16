import React from "react";
import testimonialsCSS from './Testimonials.module.css'

import user1 from './../../Assets/customer1.jpg'

function Testimonials() {
    return (
        <div className={`${testimonialsCSS.Testimonial_wrapper} section`} id="testimonials">
            <div className={testimonialsCSS.Testimonial_title}>
                <small className="section-heading">Testimonials</small>
                <h2>Happy Customer Thoughts</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dolorum quasi excepturi
                distinctio animi expedita aperiam, consequuntur ea adipisci autem eveniet provident molestias 
                modi natus quia eaque blanditiis similique cupiditate.</p>

                <div className={testimonialsCSS.Testimonial_cards}>
                    <div className={testimonialsCSS.card}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloremque assumenda 
                        commodi possimus, temporibus laboriosam sint beatae minus aut nesciunt ut provident. 
                        Rerum non quod nobis! Maxime ipsum perferendis enim!</p>
                    
                        <div className={testimonialsCSS.profile}>
                            <img src={user1} alt="use-image"/>
                            <h2>Jenis Parkerman <span>Teacher</span></h2>

                            <i className="ri-double-quotes-l"/>
                        </div>
                    </div>

                    <div className={testimonialsCSS.card}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloremque assumenda 
                        commodi possimus, temporibus laboriosam sint beatae minus aut nesciunt ut provident. 
                        Rerum non quod nobis! Maxime ipsum perferendis enim!</p>
                    
                        <div className={testimonialsCSS.profile}>
                            <img src={user1} alt="use-image"/>
                            <h2>Jenis Parkerman <span>Teacher</span></h2>

                            <i className="ri-double-quotes-l"/>
                        </div>
                    </div>

                    <div className={testimonialsCSS.card}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloremque assumenda 
                        commodi possimus, temporibus laboriosam sint beatae minus aut nesciunt ut provident. 
                        Rerum non quod nobis! Maxime ipsum perferendis enim!</p>
                    
                        <div className={testimonialsCSS.profile}>
                            <img src={user1} alt="use-image"/>
                            <h2>Jenis Parkerman <span>Teacher</span></h2>

                            <i className="ri-double-quotes-l"/>
                        </div>
                    </div>

                    <div className={testimonialsCSS.card}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloremque assumenda 
                        commodi possimus, temporibus laboriosam sint beatae minus aut nesciunt ut provident. 
                        Rerum non quod nobis! Maxime ipsum perferendis enim!</p>
                    
                        <div className={testimonialsCSS.profile}>
                            <img src={user1} alt="use-image"/>
                            <h2>Jenis Parkerman <span>Teacher</span></h2>

                            <i className="ri-double-quotes-l"/>
                        </div>
                    </div>

                    <div className={testimonialsCSS.card}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloremque assumenda 
                        commodi possimus, temporibus laboriosam sint beatae minus aut nesciunt ut provident. 
                        Rerum non quod nobis! Maxime ipsum perferendis enim!</p>
                    
                        <div className={testimonialsCSS.profile}>
                            <img src={user1} alt="use-image"/>
                            <h2>Jenis Parkerman <span>Teacher</span></h2>

                            <i className="ri-double-quotes-l"/>
                        </div>
                    </div>

                    <div className={testimonialsCSS.card}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere doloremque assumenda 
                        commodi possimus, temporibus laboriosam sint beatae minus aut nesciunt ut provident. 
                        Rerum non quod nobis! Maxime ipsum perferendis enim!</p>
                    
                        <div className={testimonialsCSS.profile}>
                            <img src={user1} alt="use-image"/>
                            <h2>Jenis Parkerman <span>Teacher</span></h2>

                            <i className="ri-double-quotes-l"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;