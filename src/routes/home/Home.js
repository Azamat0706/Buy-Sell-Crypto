import React from 'react'
import Navbarr from '../../components/navbarr/Navbarr'
import Coin from '../../components/coin/Coin'
import './home.css'
import Trade from '../../components/trade/Trade'
import User from '../../components/user/User'
import Rewards from '../../components/rewards/Rewards'
import People from '../../components/people/People'
import Now from '../../components/now/Now'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
     <Navbarr/>
      <Coin/>
      <Trade/>
      <User/>
      <Rewards/>
      <People/>
      <Now/>
      <Footer/>
    </div>
  )
}

export default Home
