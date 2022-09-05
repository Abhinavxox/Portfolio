import React, { useState } from 'react';
import a from '../images/a.jpg'
import v from '../images/v.PNG'
const HomeCard = () => {
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
            console.log(secret)
        }

    }

    return (
        <div className="ui card">
            <div className="content fontCustom">
                <i className="right floated heart icon" onClick={clicked} ></i>
                <i className="right floated square icon" ></i>
                <i className="right floated minus icon" ></i>

                <div className="header fontCustom">{secret.text}</div>
            </div>
            <div className="extra content">
                <img src={secret.image} alt="hi" className='ui medium image'></img>
            </div>
        </div>
    )
}

export default HomeCard;