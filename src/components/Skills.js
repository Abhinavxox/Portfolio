import React from 'react';
import '../index.css'


const Skills = () => {
    return (
        <div className='ui right floated column skills' style={{ alignItems: 'center' }}>
            <div className='ui very padded segment'>
                <div className='fontCustom in-center'>
                    <div className='ui vertical center aligned segment'>
                        <h1 className='fontCustom'>SKILLS</h1>
                    </div>
                    <div class="ui progress success">
                        <div class="bar" style={{ width: '70%' }}>
                            <div class="progress">70%</div>
                        </div>
                        <div class="label label-black">{`HTML & CSS`}</div>
                    </div>
                    <div class="ui progress success">
                        <div class="bar" style={{ width: '60%' }}>
                            <div class="progress">60%</div>
                        </div>
                        <div class="label label-black">{`JAVASCRIPT`}</div>
                    </div>
                    <div class="ui progress success">
                        <div class="bar" style={{ width: '85%' }}>
                            <div class="progress">85%</div>
                        </div>
                        <div class="label label-black">{`JAVA`}</div>
                    </div>
                    <div class="ui progress success">
                        <div class="bar" style={{ width: '50%' }}>
                            <div class="progress">50%</div>
                        </div>
                        <div class="label label-black">{`REACTJS`}</div>
                    </div>
                    <div class="ui progress success">
                        <div class="bar" style={{ width: '50%' }}>
                            <div class="progress">50%</div>
                        </div>
                        <div class="label label-black">{`MVC FRAMEWORK`}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills