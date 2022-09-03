import React from 'react';

const WorkCard = (props) => {
    console.log(props)
    return (
        <div className="ui card" >
            <div className="image">
                <img src={props.image} />
            </div>
            <div className="content">
                {props.title}
                <div className="description">
                    {props.text}
                </div>
            </div>
            <div className="extra content">
                <div className='ui button fontCustom' >
                    <a href={props.demo} target='_blank' rel="noreferrer">LIVE DEMO</a>
                </div>
                <div className='ui button fontCustom' >
                    <a href={props.github} target='_blank' rel="noreferrer">GITHUB</a>
                </div>
            </div>
        </div >
    )
}

export default WorkCard