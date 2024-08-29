import React from 'react'
import './navbarr.css'
import img1 from '../assets/img2.png'
const Navbarr = () => {
  return (
        <section className='navbarr1'>
            <div className='navbarr2'>
            <h1>Buy & Sell Crypto,</h1>
           <h1> Trade</h1>
            <span className='span'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero pariatur neque ratione repellendus! Quam, odit?</span>
            <button className='btn'>Sign up</button>
            </div>
            <div className='navbarr3'>
            <img src={img1} alt="" />
            </div>
        </section>      
  )
}

export default Navbarr
