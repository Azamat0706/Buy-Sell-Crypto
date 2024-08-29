import React from 'react'
import './contact.css'
import img1 from '../../components/assets/img1.png' 
import Navbar from '../../components/navbar/Navbar'
const Contact = () => {
  return (
    <section className='contact'>
      <Navbar/>
      <div className='contact1'>
        <div className='contact2'>
          <img src={img1} alt="" />
          
        </div>
        <div className='contact3'>
         <div></div>
         <form>
          <h1>User name</h1>
          <input type="text" placeholder='Enter your User name'/>
          <h1>Password</h1>
          <input type="Password" placeholder='Enter your Password'/>
          <div className='cheks'  >
        <div className='chek'>
        <input type="checkbox" />
        </div>

            <h6>Rememebr me</h6>
            <h6>Forgot Password ?</h6>
          </div>
          <button>Login</button>
         </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
