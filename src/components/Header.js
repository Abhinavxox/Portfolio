import React from 'react';
import Snapshot from '../images/Snapshot.png'
import '../index.css'

const Header = () => {
    return (
        <div className='ui vertical center aligned segment '>
            <div className='ui image '>
                <img src={Snapshot} alt="image_portfolio" className='ui large image padded'></img>
            </div>
            <div className='ui text container'>
                <h1 className='fontCustom '>ABHINAV PANDEY</h1>
                <h3 className='fontCustom student'>I'm a CS student.</h3>
            </div>
            <div className='ui text container'>
                <a className="ui blue image label" href='https://github.com/Abhinavxox' target='_blank' rel="noreferrer">
                    <div className="detail">Github</div>
                </a>
                <a class="ui green image label" href='https://www.linkedin.com/in/abhinav-pandey-480269176/' target='_blank' rel="noreferrer">
                    <div className="detail">Linkedin</div>
                </a>
                <a className="ui blue image label" href='https://twitter.com/MeroNaamAbhinav' target='_blank' rel="noreferrer">
                    <div className="detail">Twitter</div>
                </a>
            </div>
        </div>
    )
}

export default Header;