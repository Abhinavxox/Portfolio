import React from 'react';
import Snapshot from '../images/Snapshot.png'
import '../index.css'

const AboutContent = () => {
    return (
        <div className='ui very padded segment column fontCustom about-content'>
            <div className='ui middle aligned stackable grid container' style={{ paddingLeft: '7%' }}>
                <div class="row">
                    <div className="">
                        <h3 className="fontCustom">I am an Undergrad student</h3>
                        <p>I'm currently studying B.Tech CSE with AI at Amrita Vishwa Vidyapeetham, Kollam, India.</p>
                        <img src={Snapshot} class="ui large image" alt="hi" />
                        <h3 className="fontCustom">I'm exploring different fields</h3>
                        <p>I've been currently been increasing my proficiency with JAVA for problem solving. I've also been learning REACTJS and MERN framework. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;