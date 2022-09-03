import React from 'react';
import Snapshot from '../images/Snapshot.png'
import '../index.css'

const AboutContent = () => {
    return (
        <div className='ui very padded segment column fontCustom about-content'>
            <div className='ui middle aligned stackable grid container'>
                <div class="row">
                    <div className="eight wide column">
                        <h3 className="fontCustom">We Help Companies and Companions</h3>
                        <p>Amet proident incididunt anim nisi consectetur veniam aute non sint nostrud dolor.</p>
                        <h3 className="fontCustom">We Make Bananas That Can Dance</h3>
                        <p>Proident excepteur eu irure duis non exercitation laborum sit ex aute.</p>
                    </div>
                    <div className="six wide right floated column">
                        <img src={Snapshot} class="ui large image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;