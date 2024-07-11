import React from 'react'
import './Navbar.css'
import Marquan from '../../assets/Marquan.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={Marquan} alt="" />
            <ul className="nav-menu">
                <li>Home</li>
                <li>About Me</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className="nav-connect">Connect With Me</div>
        </div>
    )
}

export default Navbar