import React from "react";
import image from "../images/aboutimg.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
             Welcome to Homecare, where convenience meets healthcare excellence. 
             Our platform is designed to streamline the process of scheduling medical 
             appointments, ensuring that patients can easily connect with healthcare 
             professionals and receive the care they need, when they need it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
