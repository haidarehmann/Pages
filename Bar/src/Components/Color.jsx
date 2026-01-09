import React from 'react';
import { FaStar } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";
const Color = () => {
    return (
       <div className='tags'>

  <div className='years'>
    <FaStar />
  </div>
  <div className='arrange1'>
    <p className='tittle1'>Years</p>
    <span className='number1'>1234</span>
  </div>

  <div className='clients'>
    <FaUsers />
  </div>
  <div className='arrange2'>
    <p className='tittle2'>Clients</p>
    <span className='number2'>1234</span>
  </div>

  <div className='awards'>
    <FaCheck />
  </div>
  <div className='arrange3'>
    <p className='tittle3'>Awards</p>
    <span className='number3'>1234</span>
  </div>

  <div className='events'>
    <GiCoffeeCup />
  </div>
  <div className='arrange4'>
    <p className='tittle4'>Events</p>
    <span className='number4'>1234</span>
  </div>

</div>


    );
};

export default Color;