import React from 'react';
import same from './images/same.jpg';
import cook4 from './images/cook4.avif';
import quality from './images/quality.png';
const About = () => {
    return (
        <div className='about'>
            <div className='wrapper'>
                <img src={same} alt="Food1" />
            </div>
            <h3>ABOUT US</h3>
            <h1>Cooking<br /> Together With <br />The Expert</h1>
            <div className='short'>
                <p>Cooking together with an expert is a delightful experience that
                    blends learning with fun. It allows you to explore new recipes
                    and techniques firsthand. The joy of preparing dishes
                    as a team strengthens bonds and creates lasting memories.
                    </p>
            </div>
            <div className='box1'>
                <div className='profile1'>
                    <img src={cook4} alt="cup2" />
                </div>
                <h4>Master Chefs</h4>
                <div className='text1'>
                    <p>
                        Cooking with skill and creativity turns simple ingredients into amazing dishes,
                        experienced cooks blend flavors and techniques to make every meal memorable,
                        working alongside them is a fun way to learn, cook, and enjoy teamwork.
                    </p>
                </div>
            </div>
            <div className='box2'>
                <div className='profile2'>
                    <img src={quality} alt="quality" />
                </div>
                <h5 className='div'>Quality Food</h5>
                <div className='text2'>
                    <p>
                        Fresh ingredients and careful preparation make every meal special
                        well-cooked dishes balance flavor, texture, and nutrition.
                        Meals that are thoughtfully prepared are both delicious and healthy,
                        attention to detail in cooking creates a memorable dining experience.
                    </p>
                </div>
            </div>

           
        </div>
    );
};
export default About;