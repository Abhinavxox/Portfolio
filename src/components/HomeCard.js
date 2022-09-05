import React, { useState } from 'react';
const HomeCard = (props) => {
    return (
        <div className="ui card">
            <div className="content fontCustom">
                <i className="right floated heart icon" onClick={props.clicked}></i>
                <i className="right floated square icon" ></i>
                <i className="right floated minus icon" ></i>

                <div className="header fontCustom">{props.secret.text}</div>
            </div>
            <div className="extra content">
                <img src={props.secret.image} alt="hi" className='ui medium image'></img>
            </div>
        </div>
    )
}

export default HomeCard;