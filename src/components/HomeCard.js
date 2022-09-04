import React from 'react';
import a from '../images/a.jpg'
const HomeCard = () => {
    return (
        <div class="ui card">
            <div class="content fontCustom">
                <i class="right floated x icon"></i>
                <i class="right floated square icon"></i>
                <i class="right floated minus icon"></i>

                <div class="header fontCustom">ME</div>
            </div>
            <div class="extra content">
                <img src={a} alt="hi" className='ui medium image'></img>
            </div>
        </div>
    )
}

export default HomeCard;