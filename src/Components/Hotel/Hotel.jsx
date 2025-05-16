import React from "react";
import hotelCSS from './Hotel.module.css'
import hotelImg1 from './../../Assets/images (6).jpeg'
import hotelImg2 from './../../Assets/images (7).jpeg'
import hotelImg3 from './../../Assets/images (8).jpeg'
import hotelImg4 from './../../Assets/images (10).jpeg'
import hotelImg5 from './../../Assets/images (9).jpeg'
import hotelImg6 from './../../Assets/images (11).jpeg'


function Hotel() {
    return (
        <div className={`${hotelCSS.hotelWrapper} section`} id="hotel">
            <div className={hotelCSS.hotelTitle}>
                <small className="section-heading">Hotels</small>
                <h2>Featured Hotels</h2>
            </div>

            <div className={hotelCSS.hotelCards}>
                <div className={hotelCSS.hotelCard}>
                    <div className={hotelCSS.hotelImage}>
                        <img src={hotelImg1} alt="Hotel-images"/>
                    </div>
                    <div className={hotelCSS.hotelCardinfo}>
                        <p>4.5 - 3537 reviews</p>
                        <h2>New Coast Hotel Manila</h2>
                    </div>
                    <p className={hotelCSS.price}>
                            P 6098/Night
                    </p>
                </div>

                <div className={hotelCSS.hotelCard}>
                    <div className={hotelCSS.hotelImage}>
                        <img src={hotelImg2} alt="Hotel-images"/>
                    </div>
                    <div className={hotelCSS.hotelCardinfo}>
                        <p>4.4 - 3776 reviews</p>
                        <h2>Diamond Hotel Philippines</h2>
                    </div>
                    <p className={hotelCSS.price}>
                        P 7927/Night
                    </p>
                </div>

                <div className={hotelCSS.hotelCard}>
                    <div className={hotelCSS.hotelImage}>
                        <img src={hotelImg3} alt="Hotel-images"/>
                    </div>
                    <div className={hotelCSS.hotelCardinfo}>
                        <p>4.0 - 357 reviews</p>
                        <h2>Regency Grand Suites</h2>
                    </div>
                    <p className={hotelCSS.price}>
                        P 3284/Night
                    </p>
                </div>

                <div className={hotelCSS.hotelCard}>
                    <div className={hotelCSS.hotelImage}>
                        <img src={hotelImg4} alt="Hotel-images"/>
                    </div>
                    <div className={hotelCSS.hotelCardinfo}>
                        <p>4.0 - 313 reviews</p>
                        <h2>Stay Malate</h2>
                    </div>
                    <p className={hotelCSS.price}>
                        P 915/Night
                    </p>
                </div>

                <div className={hotelCSS.hotelCard}>
                    <div className={hotelCSS.hotelImage}>
                        <img src={hotelImg5} alt="Hotel-images"/>
                    </div>
                    <div className={hotelCSS.hotelCardinfo}>
                        <p>4.5 - 1904 reviews</p>
                        <h2>Sheraton Manila Bay</h2>
                    </div>
                    <p className={hotelCSS.price}>
                        P 11,063/Night
                    </p>
                </div>

                <div className={hotelCSS.hotelCard}>
                    <div className={hotelCSS.hotelImage}>
                        <img src={hotelImg6} alt="Hotel-images"/>
                    </div>
                    <div className={hotelCSS.hotelCardinfo}>
                        <p> 4.2 - 119 reviews</p>
                        <h2>1775 Adriatico Suites</h2>
                    </div>
                    <p className={hotelCSS.price}>
                        P 2,575/Night
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hotel;