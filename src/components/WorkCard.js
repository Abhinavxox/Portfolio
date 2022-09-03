import React from 'react';

const WorkCard = (props) => {
    return (
        <div className="ui centered card" >
            <div className="image">
                <img src={props.image} alt="" />
            </div>
            <div className="content">
                <h1 className='fontCustom'>{props.title} </h1>
                <div className="description">
                    {props.text}
                </div>
            </div>
            <div className="extra content">
                <div className='ui button fontCustom ' >
                    <a href={props.demo} target='_blank' rel="noreferrer">LIVE DEMO</a>
                </div>
                <div className='ui button fontCustom ' >
                    <a href={props.github} target='_blank' rel="noreferrer">GITHUB</a>
                </div>
            </div>
        </div >
    )
}

export default WorkCard