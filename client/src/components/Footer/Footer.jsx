import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";


const Footer = () => {


  return (


    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">

          <div className="footer-col">
            <div className="footer-widget">
              <img
                src="https://www.roongtagroup.co.in/uploads/192x55.png"
                alt="Lalit Roongta Group"
                className="footer-logo"
              />
            </div>
          </div>


          <div className="footer-col">
            <div className="footer-widget">
              <h4>Contact Us</h4>
              <div className="footer-add">
                <p>Shree Tirumala Ashirwad Apt, Pethe Nagar Rd, Opp. Balbharti, Nashik 422009.</p>
                <p><a href="tel:+917770002222">+91 7770002222</a></p>
                <p><a href="mailto:Connect@roongtagroup.co.in">Connect@roongtagroup.co.in</a></p>
              </div>
            </div>
          </div>


          <div className="footer-col">
            <div className="footer-widget">
              <h4>Category</h4>
              <ul className="footer-menu">
                <li><Link to="">Residential</Link></li>
                <li><Link to="">Commercial</Link></li>
                <li><Link to="">NA Plots</Link></li>
              </ul>
            </div>
          </div>


          <div className="footer-col">
            <div className="footer-widget">
              <h4>Navigations</h4>
              <ul className="footer-menu">
                <li><Link to="">Blogs</Link></li>
                <li><Link to="">About Us</Link></li>
                <li><Link to="">Privacy Policy</Link></li>
                <li><Link to="">Terms And Condition</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className="footer-bottom">
        <div className="footer-container">
          <div className="footer-bottom-row">
            <p>© 2024 Lalit Roongta Group.</p>
            <div className="footer-social">
              <TiSocialFacebook />
              <SlSocialInstagram />
              <TiSocialLinkedin />
              <TiSocialTwitter />

            </div>
          </div>
        </div>
      </div>
    </footer>
  );

};



export default Footer;
