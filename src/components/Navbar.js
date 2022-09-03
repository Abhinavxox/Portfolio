import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css'
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";

const Navbar = () => {

    return (
        <div className='ui large secondary pointing menu' style={{ background: 'white', marginBottom: '2px' }}>
            <a href='#' className='toggle-button'>
                <IconContext.Provider value={{ className: "shared-class", size: 70 }}>
                    <FaBars size={40} />
                </IconContext.Provider>
            </a>
            <div className="ui large secondary pointing menu fontCustom before-navbar">
                <NavLink to='/' className="item" exact={true}>Home</NavLink>
                <NavLink to='/about' className="item">About</NavLink>
                <NavLink to='/work' className="item">Work</NavLink>
                <NavLink to='/contact' className="item">Contact</NavLink>
            </div>
        </div>
    )
}

export default Navbar