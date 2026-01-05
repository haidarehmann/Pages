import React from 'react';
import Navbar from './Navbar.jsx';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";


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
    </div>
  );
}

export default App;
