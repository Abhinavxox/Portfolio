import { NavLink } from 'react-router-dom';
import React from 'react';
import '../index.css'
import { FaBars } from "react-icons/fa";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import Modal from './Modal'

class Navbar extends React.Component {

    onActive = () => {
        document.querySelector('.modals').classList.add("active")
        document.querySelector('.toggle-button').classList.add('hidden')
    }



    render() {
        return (
            <div className='ui  menu ' style={{ background: 'white', marginBottom: '2px' }}>
                <Modal />
                <a href='#' className='toggle-button'>
                    <FaBars size={35} onClick={this.onActive} />
                </a>
                <div className="ui large secondary pointing menu fontCustom before-navbar">
                    <NavLink to='/' className="item" exact={true}>Home</NavLink>
                    <NavLink to='/about' className="item">About</NavLink>
                    <NavLink to='/work' className="item">Work</NavLink>
                    <NavLink to='/contact' className="item">Contact</NavLink>
                </div>

            </div >
        )
    }
}


export default Navbar