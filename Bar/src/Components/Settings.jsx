import React from 'react';
import cup from './images/cup.png';
import quality from './images/quality.png';
import health from './images/health.png';
import { BsArrowRight } from "react-icons/bs";

const Settings = () => {
    return (
   <div className='cards-container'>

        <div className='const1'>
            <div className='pic1'>
                <img src={cup} alt="cup" />
            </div>
            <h5>Best Chef</h5>

            <div className='msg1'>
                <p>They turn simple ingredients into  dishes
                    with skill and creativity.Every dish they prepare is a
                    perfect blend of flavor and passion.
                </p>
               
            </div>
            <div className='left1'>
                <p>Read more  <BsArrowRight /></p>
               </div>
            </div>
            <div className='const2'>
            <div className='pic2'>
                <img src={quality} alt="quality" />
            </div>
            <h6>Menu<br/> Variations</h6>
            <div className='msg2'>
                <p>
                    Explore a world of flavors with our diverse menu,offering something
                    for every taste.From classic favorites to unique creations,
                    our menu variations promise a delightful experience.
                </p>
            </div>
            <div className='left2'>
                <p>Read more  <BsArrowRight /></p>
               </div>
            </div>
            <div className='const3'>
                <div className='pic3'>
                     <img src={health} alt="health" />
                </div>
                <h6>Healthy Food</h6>
                <div className='msg3'>
                    <p>
                        Nourishing meals crafted to keep you vibrant and full of energy
                        Fresh, wholesome ingredients for a healthier and happier you.
                    </p>
                </div>
                <div className='left3'>
                <p>Read more <BsArrowRight /></p>
               </div>
                
                <div className="discount-section">
      <h2 className="discount-percent">30% Discount</h2>
      <h1 className="discount-text">For This Summer</h1>
      <button className="discount-btn">Order Now</button>
    </div>
            </div>
        </div>
                           
    );
};

export default Settings;