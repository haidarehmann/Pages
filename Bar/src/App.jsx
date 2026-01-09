import React from 'react';
import Navbar from './Navbar.jsx';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Heading from './Components/heading.jsx';
import Pic from './Components/Pic.jsx';
import About from './Components/About.jsx';
import Color from './Components/color.jsx';
import Settings from './Components/settings.jsx';
import Fast from './Components/Fast.jsx';


const App = () => {
  return (
    <div className='container'>


      <div className="social-icons">
        <div className="icon-circle">
          <FaFacebookF />
        </div>
        <div className="icon-circle">
          <FaLinkedinIn />
        </div>
        <div className="icon-circle">
          <FaTwitter />
        </div>

      </div>

      <Navbar />
      <div className="heading-container">
        <Heading />

      </div>
      <div className='gallery'>
        <Pic />
      </div>
      <div className='next-section'>
        <About />
        <div className='tags-section'>
          <Color />
        </div>
        <div className='const-section'>
          <Settings />
        </div>
        <div className='meals-section'>
          <Fast />
        </div>
      </div>
 
    </div>


  );


}

export default App;
