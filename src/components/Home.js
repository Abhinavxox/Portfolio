import React from 'react';
import '../index.css'

const Home = () => {
    return (
        <div className='ui vertical center aligned segment custom-align'>
            <div className='ui text container' style={{ color: 'white' }}>
                <h3 className='fontCustom '>Hello, I'm</h3>
                <h1 className='fontCustom '>ABHINAV PANDEY</h1>
                <h3 className='fontCustom '>A CS student</h3>
            </div>
            <div className='ui text container links'>
                <a className="ui blue image label" href='https://github.com/Abhinavxox' target='_blank' rel="noreferrer">
                    <div className="detail">Github</div>
                </a>
                <a class="ui green image label" href='https://www.linkedin.com/in/abhinav-pandey-480269176/' target='_blank' rel="noreferrer">
                    <div className="detail">Linkedin</div>
                </a>
                <a className="ui blue image label" href='https://twitter.com/MeroNaamAbhinav' target='_blank' rel="noreferrer">
                    <div className="detail">Twitter</div>
                </a>
            </div>
        </div>
    )
}

export default Home;