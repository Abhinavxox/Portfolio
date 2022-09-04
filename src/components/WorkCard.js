import React from 'react';
import '../index.css'

const WorkCard = (props) => {
    if (props.demo === "") {
        return (
            <div className="ui centered card even-container">
                <div className="ui large image " style={{ height: '180px' }}>
                    <img src={props.image} alt="" style={{ height: '180px' }} />
                </div>
                <div className="content">
                    <p className='header fontCustom'>{props.title} </p>
                    <div className="description">
                        {props.text}
                    </div>
                </div>
                <div className="extra content">
                    <button className='ui button fontCustom' href={props.github}>
                        GITHUB
                    </button>
                </div>
            </div >
        )
    }
    return (
        <div className="ui centered card even-container" >
            <div className="ui large image " style={{ height: '180px' }} >
                <img src={props.image} alt="" style={{ height: '180px' }} />
            </div>
            <div className="content">
                <p className='header fontCustom'>{props.title} </p>
                <div className="description">
                    {props.text}
                </div>
            </div>
            <div className="extra content" >
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