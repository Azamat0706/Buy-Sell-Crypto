import React from 'react'
import './trade.css'
import img1 from '../assets/img6.png'
import img2 from '../assets/img7.png' 
import img3 from '../assets/img8.png'
import img4 from '../assets/img9.png'
const Trade = () => {
  return (
    <div className='trade1'>
      <div className='trade2'>
      <div className='trade3'>
        <div>
        <img src={img1} alt="" />
        </div>
        <div>
            <h2>Easy to Trade</h2>
            <p>Lorem Ipsum is dummy text often used in printing and web design</p>
        </div>
      </div>

      <div className='trade4'>
        <div>
            <img src={img3} alt="" />
        </div>
        <div>
            <h2>Many Payment Methods</h2>
            <p>Lorem Ipsum is dummy text often used in printing</p>
        </div>
      </div>

      <div className='trade5'>
        <div>
            <img src={img4} alt="" />
        </div>
        <div>
            <h2>100% Secure</h2>
            <p>Lorem Ipsum is dummy text often used in printing and web design</p>
        </div>
      </div>
        

      </div>
      <div className='trade6'>
        <img src={img2} alt="" />
      </div>

    
    </div>
  )
}

export default Trade
