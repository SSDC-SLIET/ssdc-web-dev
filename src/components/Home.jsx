import React from 'react'
import Contests from './Contests'
import Navbar from './Navbar'
import TextBox from './TextBox'
import Footer from './Footer'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="SSDC">
        <h1 className='text-center display-1'>SSDC</h1>
        <h3 className='text-center display-5'>Hive of Developers</h3>
      </div>

      <TextBox />
      <Contests />
      <Footer />
    </div>
  )
}

export default Home
