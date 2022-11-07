import React, { useState } from 'react';
import '../index.css'
import HomeCard from './HomeCard';
import a from '../images/a.jpg'
import v from '../images/v.JPG'

const Home = () => {

    const [secret, setSecret] = useState({
        text: "ME",
        image: a
    });

    let pass = [1, 1, 2, 2, 3, 3]
    let currentCount = 0;
    let tryPass = []

    const clicked = (key) => {

        if (key == pass[currentCount]) {
            tryPass.push(key)
            currentCount++
        }
        else {
            tryPass = []
            currentCount = 0
        }

        console.log(tryPass)

        if (JSON.stringify(tryPass) === JSON.stringify(pass)) {
            console.log("Heloo")
            setSecret({
                text: "MINE",
                image: v
            })
        }
    }

    return (
        <div className='ui vertical center aligned segment home'>
            <div className='home-card'>
                <HomeCard secret={secret} clicked={clicked.bind(this)} />
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