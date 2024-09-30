import React from 'react';
import './About.css'; 

function AboutUs() {
    return (
        <div className="about-section">
            <div className="about-content">
                <div className="content-column">
                    <div className="content-box">
                        <div className="sec-title">
                            <h2>About Us</h2>
                        </div>
                        <div className="text">
                            <p>
                                Founded on the values of family, Lalit Roongta Group prioritizes trust, transparency, and customer satisfaction. Embedded in this belief system, every structure is built to cater to the needs of the ever-progressive fabric of society; be it the landscaped green pockets, luxurious meeting rooms, serene worship places, or the highly equipped gyms; every space is highly functional, in sync with the Vaastu, and exceptionally aesthetic. Implementing the practice of amalgamating its principles with cutting-edge technological advents in the construction industry, today the Lalit Roongta Group has scaled unsurmountable heights of success and has established itself as one of the most unrivalled names of Nashik’s Real Estate scenario.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="image-column">
                    <div className="image-box">
                        <figure className="image">
                            <img src="https://www.roongtagroup.co.in/uploads/About_us.webp" className="img-fluid" alt="About Us" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
