import React from 'react';
import Skills from './Skills'
import AboutContent from './AboutContent';

const About = () => {
    return (
        <div className="ui two column stackable grid" style={{ padding: '5%' }}>
            < AboutContent />
            < Skills />
        </div >
    )
}

export default About