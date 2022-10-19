import React from 'react'
import Navbar from './Navbar'
import TextBox from './TextBox'

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="SSDC my-4">
      <h1 className='text-center display-1'>SSDC</h1>
      <h3 className='text-center display-5'>Hive of Developers</h3>
      </div>

      <TextBox />
    </div>
  )
}

export default Home
