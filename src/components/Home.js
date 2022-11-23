import React from 'react'
import Contests from './Contests'
import Navbar from './Navbar'
import TextBox from './TextBox'
import Footer from './Footer'
import './style.css'

const Home = () => {
  return (
    <div className="SSDC bg">
      <Navbar />
      <div className='heading'>
        <h1 className='text-center display-1'>SSDC</h1>
        <h3 className='text-center display-5'>Hive of Developers</h3>
      </div>
      <TextBox />
      <Contests className="my-3" />
      <Footer />
    </div>
  )
}

export default Home