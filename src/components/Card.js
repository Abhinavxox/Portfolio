import React from 'react';
import { BiCodeBlock } from "react-icons/bi";

const Card = () => {
    return (
        <div className='column in-center'>
            <div class="ui cards fontCustom for-card">
                <div class="card">
                    <div class="content">

                        <div class="header fontCustom">CS student</div>
                        <BiCodeBlock size={50} />
                        <div class="description">
                            Laboris ea id aute exercitation occaecat.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card