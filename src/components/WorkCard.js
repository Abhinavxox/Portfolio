import React from 'react';

const WorkCard = (props) => {
    if (props.demo == "") {
        return (
            <div className="ui centered card" style={{ height: '450px' }}>
                <div className="ui large image ">
                    <img src={props.image} alt="" />
                </div>
                <div className="content">
                    <p className='header fontCustom'>{props.title} </p>
                    <div className="description">
                        {props.text}
                    </div>
                </div>
                <div className="extra content">
                    <div className='ui button fontCustom ' >
                        <a href={props.github} target='_blank' rel="noreferrer">GITHUB</a>
                    </div>
                </div>
            </div >
        )
    }
    return (
        <div className="ui centered card" style={{ height: '450px' }}>
            <div className="ui large image " >
                <img src={props.image} alt="" />
            </div>
            <div className="content">
                <p className='header fontCustom'>{props.title} </p>
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