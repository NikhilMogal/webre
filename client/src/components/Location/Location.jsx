import React from "react";
import "./Location.css"; 
import { IoIosArrowForward } from "react-icons/io";

const Location = () => {
  const locations = [
    {
      title: "Gangapur Road",
      link: ""
    },
    {
      title: "Govind Nagar",
      link: ""
    },
    {
      title: "Makhmalabad",
      link: ""
    },
    {
      title: "Indira Nagar",
      link: ""
    },
    {
      title: "Tidke Colony",
      link: ""
    },
    {
      title: "Panchavati Annex",
      link: ""
    },
    {
      title: "Near City Centre Mall",
      link: ""
    },
    {
      title: "Mumbai-Agra Highway Front",
      link: ""
    },
    {
      title: "Rajiv Nagar",
      link: ""
    }
  ];

  return (
    <div className="location-section">
      <div className="custom-container">
        <div className="heading-center">
          <h2>Find By Locations</h2>
        </div>
        <div className="location-grid">
          {locations.map((location, index) => (
            <div key={index} className="location-property-wrap">
              <div className="location-property-content">
                <h4 className="location-title">{location.title}</h4>
                <a href={location.link} className="location-view">
                  <span className="arrow-icon"><IoIosArrowForward /></span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Location;
