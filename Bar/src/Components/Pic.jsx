import React from 'react';
import food9 from './images/food9.jpg';
import man1 from './images/man1.jpg';
import food3 from './images/food3.webp';
import { GoArrowUp, GoArrowDown } from "react-icons/go";


const Pic = () => {
    return (
        <div className='gallery'>
            <div className='gallery-img1'>
                <img src={food9} alt="Food1" />

                <div className='para1'>
                    <p>
                        The dish exemplifies haute cuisine with careful composition and aesthetic detail.
                        Vibrant vegetables and delicate proteins create harmony in color, texture, and flavor.
                        Fresh herbs and garnishes add both aroma and visual appeal.
                        The chef’s precise touch elevates the dish beyond mere nourishment.
                        Every bite offers a refined sensory experience typical of fine dining.
                    </p>
                </div>

                <div className="arrow-down">
                   <GoArrowDown />
                </div>
            </div>

            <div className='gallery-img2'>
                <img src={man1} alt="Food2" />
            </div>

            <div className='gallery-img3'>
                <img src={food3} alt="Food3" />

                <div className='para2'>
                    <p>
                        This culinary creation showcases refined gastronomy through meticulous arrangement and visual finesse.
                        A medley of colorful vegetables and tender proteins delivers a balanced interplay of taste and texture.
                        The chef’s skillful technique transforms the plate into a work of edible art.
                        Each mouthful provides an elegant and sophisticated dining experience.
                    </p>
                </div>

                <div className="arrow-up">
                   <GoArrowUp />
                </div>
                  
            </div>
             
        </div>
    );
}

export default Pic;
