import React, { useState } from 'react';
import { MdArrowDropDown } from "react-icons/md";


const Navbar = () => {
  const [isBlogOpen, setIsBlogOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);

  const toggleBlog = () => {
    setIsBlogOpen(!isBlogOpen);
    setIsPagesOpen(false); 
  };

  const togglePages = () => {
    setIsPagesOpen(!isPagesOpen);
    setIsBlogOpen(false); 
  };

  return (
    <div>
      <div className="top-bar">
        <p className="email">✉ info@example.com</p>
        <p className="phone">📞 +012 3456789</p>
      </div>

      <div className="navbar">
        <h1 className="logo">CHEFER</h1>

        <ul className="nav-menu">
          <li>Home</li>
          <li>About</li>
          <li>Menu</li>
 
          <li className='blogitems' onClick={toggleBlog}>
            <span>Blog</span>
            <MdArrowDropDown />
            {isBlogOpen && (
              <ul className='dropdown'>
                <li>Blog Posts</li>
                <li>Blog Details</li>
              </ul>
            )}
          </li>

        
          <li className='pageitems' onClick={togglePages}>
            <span>Pages</span>
            <MdArrowDropDown />
            {isPagesOpen && (
              <ul className='dropup'>
                <li>Chefs</li>
                <li>Features</li>
                <li>Testimonial</li>
                <li>404 Error</li>
              </ul>
            )}
          </li>

          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
