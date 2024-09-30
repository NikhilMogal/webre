import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PropertyCard.css";
import { BsArrowsMove } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";



const PropertyCard = ({ imageSrc, name, link, location, features }) => {
  return (
    <div className="property-listing">
      <div className="listing-img-wrapper">
        <div className="list-img-slide">
          <div className="click">
            <div>
              <a href={link}>
                <img src={imageSrc} className="property-image" alt={name} />
              </a>
            </div>
            
          </div>
        </div>
      </div>

      <div className="listing-detail-wrapper">
        <div className="listing-short-detail-wrap">
          <div className="listing-short-detail">
            <h4 className="listing-name verified">
              <a href={link} className="">{name}</a>
            </h4>
          </div>
        </div>
      </div>

      <div className="price-features-wrapper">
        <div className="list-fx-features">
          {features.map((feature, index) => (
            <div key={index} className="listing-card-info-icon">
              <div className="inc-fleat-icon">
              <BsArrowsMove />
              </div>
              {feature}
            </div>
          ))}
        </div>
      </div>

      <div className="listing-detail-footer">
        <div className="footer-first">
          <div className="foot-location">
          <CiLocationOn />
            {location}
          </div>
        </div>
        <div className="footer-flex">
          <span className="prt-view">View</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
