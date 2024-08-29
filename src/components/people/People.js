import React from 'react'
import './people.css'
import img1 from '../assets/img10.png'
import img2 from '../assets/img11.png'
import img3 from '../assets/img12.png'
import img4 from '../assets/Group 481735 (1).png'
import img5 from '../assets/Group 481736.png'
import img6 from '../assets/Group 481737.png'
import img7 from '../assets/Group 481734.png'
const People = () => {
  return (
    <div className='people1'>
        <div className='people2'>
            <div>
                <h2>What people are </h2>
                <h2> saying about us</h2>
            </div>
            <div>
                <p>Everything you need to accept card payments </p>
                <p> and grow your business anywhere on the planet.</p>  
            </div>
        </div>
        <div className='people3'>
            <div className='shadow'>
                <h1>//</h1>
                <h5>Money is only a tool. It will take </h5>
                <h5> you wherever you wish, but it </h5>
                <h5> will not replace you as the </h5>
                <h5> driver.</h5>
                <div className='fex'>
                    <div><img src={img1} alt="" /></div>
                    <div>
                        <h4>Herman Jensen</h4>
                        <h6>Founder & Leader</h6>
                    </div>
                </div>
            </div>
            <div  className='shadow'>
                <h1>//</h1>
                <h5>Money makes your life easier. </h5>
                <h5>If you're lucky to have it, you're </h5>
                <h5>lucky.</h5>
                <div className='fex'>
                <div><img src={img2} alt="" /></div>
                    <div>
                        <h4> Steve Mark</h4>
                        <h6>Founder & Leader</h6>
                    </div>
                </div>
            </div>
            <div className='shadow'>
                <h1>//</h1>
                <h5>It is usually people in the </h5>
                <h5>money business, finance, and</h5>
                <h5>international trade that are </h5>
                <h5>really rich.</h5>
                <div className='fex'>
                    <div><img src={img3} alt="" /></div>
                    <div>
                        <h4> Kenn Gallagher </h4>
                        <h6>Founder & Leader</h6>
                    </div>
                </div>
            </div>
        </div>
        <div className='fax'>
          <img src={img4} alt="" />
          <img src={img5} alt="" />
            <img src={img6} alt="" />
            <img src={img7} alt="" />
        </div>
    </div>
  )
}

export default People
