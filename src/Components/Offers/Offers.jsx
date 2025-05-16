import React from "react";
import offerCSS from './Offers.module.css'
import offerImg1 from './../../Assets/offers1.jpg'
import offerImg2 from './../../Assets/offers2.jpg'
import offerImg3 from './../../Assets/offers3.jpg'

function Offers() {
    return (
        <div className={`${offerCSS.offerWrapper} section`} id="offers">
            <div className={offerCSS.offer_title}>
                <small className="section-heading">Offers</small>
                <h2>Know What Wandernest Offer</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, saepe architecto! Eveniet, aut ab. Tempore aspernatur, fuga impedit suscipit iure repudiandae facere aliquam mollitia, et repellat magnam vero sequi laboriosam.</p>
            </div>

            <div className={offerCSS.offer_cards}>
                <div className={offerCSS.offer_card}>
                    <img src={offerImg1} alt="offer-image"/>

                    <div className={offerCSS.offer_details}>
                        <span>.01</span>
                        <h2>Places to Visit</h2>
                    </div>
                </div>

                <div className={offerCSS.offer_card}>
                    <img src={offerImg2} alt="offer-image"/>

                    <div className={offerCSS.offer_details}>
                        <span>.02</span>
                        <h2>Foodiehotspots</h2>
                    </div>
                </div>

                <div className={offerCSS.offer_card}>
                    <img src={offerImg3} alt="offer-image"/>

                    <div className={offerCSS.offer_details}>
                        <span>.03</span>
                        <h2>Meetings & Events</h2>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Offers;