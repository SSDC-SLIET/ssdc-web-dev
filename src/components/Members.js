import React from 'react'
import Card from './Card'
import './style.css'
import Navbar from './Navbar';

function Members() {
    return (
        <>
            <Navbar />
            <div className='members__container'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}

export default Members