import React, { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard/PropertyCard";
import "./PropertyData.css";

const PropertyData = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/properties");
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="property-section">
      <div className="custom-container">
        <div className="heading-center">
          <h2>Featured Properties</h2>
        </div>

        <div className="property-card-wrapper">
          {properties.map((property, index) => (
            <PropertyCard
              key={index}
              imageSrc={property.imageSrc}
              name={property.name}
              link={property.link}
              location={property.location}
              features={property.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyData;
