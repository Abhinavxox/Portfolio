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
                    <a className='ui primary button fontCustom' href={props.github} target='_blank'>GITHUB</a>
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
                <a className='ui green button fontCustom' href={props.demo} target='_blank' rel="noreferrer">LIVE DEMO</a>
                <a className='ui primary button fontCustom' href={props.github} target='_blank' rel="noreferrer" style={{ marginTop: '1%' }}>GITHUB</a>
            </div>
        </div >
    )
}

export default WorkCard