import React from 'react';
import './Blogs.css'; // Custom CSS file

const Blogs = () => {
    return (
        <div className="blogs-section">
            <h2 className="blogs-heading">Blogs</h2>

            <div className="blog-grid">
                <div className="blog-item">
                    <div className="blog-thumb">
                        <img 
                            src="https://www.roongtagroup.co.in/uploads/blogs/image/image-2.webp" 
                            alt="Nashik From The POV Of Real-estate Investment" 
                        />
                    </div>
                    <div className="blog-info">
                        <span className="post-date">12 Apr 2023</span>
                    </div>
                    <div className="blog-body">
                        <h4 className="bl-title">Nashik From The POV Of Real-estate Investment</h4>
                        <p className="blog-description">
                            With the rise in demand for houses, especially in Tier II &amp; III cities, after having realised the importance of this...
                        </p>
                    </div>
                </div>

                <div className="blog-item">
                    <div className="blog-thumb">
                        <img 
                            src="https://www.roongtagroup.co.in/uploads/blogs/image/image-4.webp" 
                            alt="Styling Your House? Then Read These 12 Tips, Once!" 
                        />
                    </div>
                    <div className="blog-info">
                        <span className="post-date">11 May 2023</span>
                    </div>
                    <div className="blog-body">
                        <h4 className="bl-title">Styling Your House? Then Read These 12 Tips, Once!</h4>
                        <p className="blog-description">
                            Whether the house has been in the family for generations, you’ve just bought it, or it is the one you’re living in; decorating or...
                        </p>
                    </div>
                </div>

                <div className="blog-item">
                    <div className="blog-thumb">
                        <img 
                            src="https://www.roongtagroup.co.in/uploads/blogs/image/image-5.webp" 
                            alt="Things You Need On The First Day In Your New House!" 
                        />
                    </div>
                    <div className="blog-info">
                        <span className="post-date">11 May 2023</span>
                    </div>
                    <div className="blog-body">
                        <h4 className="bl-title">Things You Need On The First Day In Your New House!</h4>
                        <p className="blog-description">
                            One among the many challenges during buying and setting up a new house, is preparing for the big move, and the first day...
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center">
                <button className="btn-view-all">View All</button>
            </div>
        </div>
    );
};

export default Blogs;
