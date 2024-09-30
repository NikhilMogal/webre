import React from 'react'
import Slider from '../../components/Slider/Slider';
import Footer from '../../components/Footer/Footer';
import CallToAction from '../../components/CallToAction/CallToAction';
import Location from "../../components/Location/Location";
import PropertyData from '../../components/PropertyData';
import About from '../About/About';
import Blogs from '../Blogs/Blogs';
import Navbar from '../../components/Navbar/Navbar';
import Achievements from '../Achievements/Achievement';
import Review from '../Review/Review';

function Home() {
  return (
    <div>
       <Navbar />

      <Slider />
      <PropertyData />

     < Achievements/>
      <Location />
      <About />
      <Review/>
      <Blogs/>

      <CallToAction />
     
      <Footer />

    </div>
  )
}

export default Home
