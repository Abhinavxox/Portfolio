import React from 'react';
import Skills from './Skills'
import AboutContent from './AboutContent';
import resume from '../resume.pdf'

const About = () => {
    return (
        <div className='ui container about'>
            <div className="ui two column stackable grid" >
                < AboutContent />
                < Skills />
            </div >
            <div class="ui two column centered grid">
                <div class="column cv-button">
                    <a href={resume} download><button className='ui primary button fontCustom' type='submit'>DOWNLOAD CV</button></a>
                </div>
            </div>

        </div >
    )
}

export default About