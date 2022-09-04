import React from "react";
import ReactDOM from 'react-dom';
import { ImCross } from "react-icons/im";
import { NavLink } from 'react-router-dom';
import '../index.css'

class Modal extends React.Component {

    close() {
        document.querySelector('.modals').classList.remove('active');
        document.querySelector('.toggle-button').classList.remove('hidden');
    }

    render() {
        return ReactDOM.createPortal(
            <div className="ui dimmer show modals visible ">
                <div className="ui raised very padded text container segment sec-menu">
                    <div className="ui secondary vertical menu fontCustom">
                        <NavLink to='/' className="item" exact={true} onClick={this.close}>Home</NavLink>
                        <NavLink to='/about' className="item" onClick={this.close}>About</NavLink>
                        <NavLink to='/work' className="item" onClick={this.close}>Work</NavLink>
                        <NavLink to='/contact' className="item" onClick={this.close}>Contact</NavLink>
                        <div className='cross'><ImCross size={15} onClick={this.close} /></div>
                    </div>
                </div>
                <div className="overlay" onClick={this.close}></div>
            </div>,
            document.querySelector('#modal')
        )
    }
}

export default Modal;