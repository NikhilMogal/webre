import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PropertyDetails = () => {
  const { propertyName } = useParams(); 
  const [propertyDetail, setPropertyDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/properties/details/${propertyName}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPropertyDetail(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyDetails();
  }, [propertyName]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching property details: {error}</div>;
  if (!propertyDetail) return <div>No property found.</div>;

  return (
    <div>
      <h2>{propertyDetail.name}</h2>
      <img src={propertyDetail.imageSrc} alt={propertyDetail.name} />
      <p>Location: {propertyDetail.location}</p>
      <p>Description: {propertyDetail.description}</p>
      <p>RERA Number: {propertyDetail.reraNumber}</p>
      <p>Amenities: {propertyDetail.amenities.join(', ')}</p>
      <p>Features: {propertyDetail.features.join(', ')}</p>
    </div>
  );
};

export default PropertyDetails;
