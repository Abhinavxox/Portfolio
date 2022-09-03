import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css'
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import { ImCross } from "react-icons/im";

class Navbar extends React.Component {

    constructor(props) {
        super(props)
        this.state = { flag: false }
    }

    onActive = () => {
        const toggle = document.querySelector('.toggle-button');
        const cross = document.querySelector('.cross');
        const nav = document.querySelector('.before-navbar');
        this.state.flag = !this.state.flag;
        if (this.state.flag) {
            toggle.classList.add("hidden")
            nav.classList.add("activeClass")
            nav.setAttribute('style', 'display:inline !important');
            cross.setAttribute('style', 'display:flex !important');
        }
        else if (!this.state.flag) {
            toggle.classList.remove("hidden")
            nav.classList.remove("activeClass")
            nav.setAttribute('style', 'display:none !important');
            cross.setAttribute('style', 'display:none !important');
        }

    }

    render() {
        return (
            <div className='ui  menu ' style={{ background: 'white', marginBottom: '2px' }}>
                <a href='#' className='toggle-button'>
                    <IconContext.Provider value={{ className: "shared-class", size: 70 }}>
                        <FaBars size={40} onClick={this.onActive} />
                    </IconContext.Provider>
                </a>
                <div className="ui large secondary pointing menu fontCustom before-navbar">
                    <NavLink to='/' className="item" exact={true}>Home</NavLink>
                    <NavLink to='/about' className="item">About</NavLink>
                    <NavLink to='/work' className="item">Work</NavLink>
                    <NavLink to='/contact' className="item">Contact</NavLink>
                </div>
                <div className='cross'><ImCross size={40} onClick={this.onActive} /></div>
            </div >
        )
    }
}


export default Navbar