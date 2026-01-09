import React, { useState } from 'react';
import bbq from './images/bbq.jpg';
import bbq2 from './images/bbq2.jpg';
import bbq3 from './images/bbq3.jpg';
import bbq4 from './images/bbq4.jpg';
import bbq5 from './images/bbq5.jpg';
import bbq6 from './images/bbq6.webp';
import bbq7 from './images/bbq7.jpg';
import bbq8 from './images/bbq8.jpg';
import chef1 from './images/chef1.avif';
import cook6 from './images/cook6.jpg';
import cook7 from './images/cook7.avif';




const Fast = () => {
    const [active, setactive] = useState("Breakfast");
    return (
        <div className='meals'>
            <h3 className='our'>Our Menu</h3>
            <h2 className='hands'>Hands Craft More</h2>
            <h2 className='crafts'>Than Meals</h2>
            <div className='dinner'>
                <ul className='dinner-menu'>
                    <li
                        className={active === "Breakfast" ? "active" : ""}
                        onClick={() => setactive("Breakfast")}
                    >
                        BreakFast
                    </li>
                    <li
                        className={active === "Lunch" ? "active" : ""}
                        onClick={() => setactive("Lunch")}
                    >
                        Lunch
                    </li>
                    <li
                        className={active === "dinner" ? "active" : ""}
                        onClick={() => setactive("Dinner")}
                    >
                        Dinner
                    </li>
                </ul>
            </div>
            <div className='chicken'>
                <div className='bbq1'>
                    <img src={bbq} alt="bbq" />
                </div>
                <div className='bbq2'>
                    <img src={bbq2} alt="bbq2" />
                </div>
                 <div className='bbq3'>
                    <img src={bbq3} alt="bbq3" />
                </div>
                 <div className='bbq4'>
                    <img src={bbq4} alt="bbq4" />
                </div>
                 <div className='bbq5'>
                    <img src={bbq5} alt="bbq5" />
                </div>
                 <div className='bbq6'>
                    <img src={bbq6} alt="bbq6" />
                </div>
                <div className='bbq7'>
                    <img src={bbq7} alt="bbq7" />
                </div>
                 <div className='bbq8'>
                    <img src={bbq8} alt="bbq8" />
                </div>
            </div>
            <div className='meet'>
                <h3 className='expert'>Expert Chefs</h3>
                <h2 className='chefs'>Let's Meet The</h2>
                <h2 className='mid'>Expert</h2>
            </div>
            <div className='caps'>
                <div className='cap1'>
                    <img src={chef1} alt="chef1" />
                </div>
                <div className='cap2'>
                    <img src={cook6} alt="chef2" />
                </div>
                <div className='cap3'>
                    <img src={cook7} alt="chef3" />
                </div>
            </div>
        </div>
    );
};

export default Fast;