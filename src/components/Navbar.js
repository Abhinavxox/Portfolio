import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css'

const Navbar = () => {
    return (
        <div class="ui large secondary pointing menu fontCustom" style={{ background: 'white', marginBottom: '2px' }}>
            <NavLink to='/' className="item" exact={true}>Home</NavLink>
            <NavLink to='/about' className="item">About</NavLink>
            <NavLink to='/work' className="item">Work</NavLink>
            <NavLink to='/contact' className="item">Contact</NavLink>
        </div>
    )
}

export default Navbar