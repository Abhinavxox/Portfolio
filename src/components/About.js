import React from 'react';
import Skills from './Skills'
import AboutContent from './AboutContent';

const About = () => {
    return (
        <div className='ui container about'>
            <div className="ui two column stackable grid" >
                < AboutContent />
                < Skills />
            </div >
            <div class="ui two column centered grid">
                <div class="column cv-button">
                    <button className='ui primary button fontCustom'>DOWNLOAD CV</button>
                </div>
            </div>

        </div >
    )
}

export default About