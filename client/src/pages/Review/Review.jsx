import React from 'react';
import './Review.css'; 

const Testimonials = () => {
  return (
    <div className="bg-orange">
      <div className="container">
        <div className="heading-container">
          <h2>Good Reviews by Customers</h2>
        </div>
        <div className="testimonial-container">
          <div className="testimonial-item">
            <div className="smart-tes-content">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/y8tF3IoaJ_U"
                title="YouTube video player"
                allowFullScreen
              ></iframe>
            </div>
            <div className="st-author-info">
              <h4 className="st-author-title" style={{ color: '#fd5332' }}>Mr. Shubham Kagade</h4>
            </div>
          </div>

          <div className="testimonial-item">
            <div className="smart-tes-content">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/tsPRe4V2Cl8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="st-author-info">
              <h4 className="st-author-title" style={{ color: '#fd5332' }}>Mr. Bhausaheb Sonawane</h4>
            </div>
          </div>

          <div className="testimonial-item">
            <div className="smart-tes-content">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/L-36U92u4BU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <div className="st-author-info">
              <h4 className="st-author-title" style={{ color: '#fd5332' }}>Mrs. Nanda Bansode</h4>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a href="https://www.youtube.com/playlist?list=PLlrhJygJiRQpUiEy92OkDr7FcjjS_GuSk">
            <button className="btn-primary">View All</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
