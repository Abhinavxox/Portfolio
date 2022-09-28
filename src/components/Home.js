import React, { useState } from 'react';
import '../index.css'
import HomeCard from './HomeCard';
import a from '../images/a.jpg'
import v from '../images/v.JPG'

const Home = () => {

    const [count, setCount] = useState(1);
    const [secret, setSecret] = useState({
        text: "ME",
        image: a
    });

    const clicked = () => {
        setCount(count + 1)
        if (count == 10) {
            setSecret({
                text: "MINE",
                image: v
            })
        }

    }

    return (
        <div className='ui vertical center aligned segment home'>
            <div className='home-card'>
                <HomeCard count={count} secret={secret} clicked={clicked.bind(this)} />
            </div>
            <div className='ui text container' style={{ color: '#121212' }}>
                <h3 className='fontCustom '>Hello, I'm</h3>
                <h1 className='fontCustom '>ABHINAV PANDEY</h1>
                <h3 className='fontCustom '>A CS student</h3>
            </div>
            <div className='ui text container links'>
                <a className="ui blue image label" href='https://github.com/Abhinavxox' target='_blank' rel="noreferrer">
                    <div className="detail">Github</div>
                </a>
                <a className="ui green image label" href='https://www.linkedin.com/in/itsmeabhinavpandey/' target='_blank' rel="noreferrer">
                    <div className="detail">Linkedin</div>
                </a>
                <a className="ui blue image label" href='https://twitter.com/MeroNaamAbhinav' target='_blank' rel="noreferrer">
                    <div className="detail">Twitter</div>
                </a>
            </div>
        </div>
    )
}

export default Home;