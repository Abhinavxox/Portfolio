import React from 'react';
import '../index.css'
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <div className='contact'>
            <div className='ui pad segment'>
                <div className='ui two column stackable grid '>
                    <div className="ui text container fontCustom column">
                        <div class="ui two column grid">
                            <div class="column contact-left">
                                <div class="ui raised segment">
                                    <a class="ui red ribbon label" href="#">Contact Information</a>
                                    <p>
                                    </p>
                                    <div className='ui very padded segment'>
                                        <div className='row pad'>
                                            <BsFillTelephoneFill color='green' size={25} /> <p>+91 9153563744, +977 9841085450</p>
                                        </div>
                                        <div className='row pad'>
                                            <FaGithub size={25} /> <p><a href='https://github.com/Abhinavxox' target='_blank' style={{ color: 'black' }}> Abhinavxox</a></p>
                                        </div>
                                        <div className='row pad'>
                                            <FaLinkedin color='#0A66C2' size={25} /> <p><a href='https://www.linkedin.com/in/abhinav-pandey-480269176/' target='_blank' style={{ color: 'black' }}> Abhinav Pandey</a></p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ui text container column fontCustom">
                        <form class="ui form attached fluid segment">
                            <div class="two fields">
                                <div class="field">
                                    <label>First Name</label>
                                    <input placeholder="First Name" type="text" />
                                </div>
                                <div class="field">
                                    <label>Last Name</label>
                                    <input placeholder="Last Name" type="text" />
                                </div>
                            </div>
                            <div class="field">
                                <label>Mail</label>
                                <input placeholder="Mail" type="text" />
                            </div>
                            <div class="field">
                                <label>Message</label>
                                <textarea placeholder="Write something.." style={{ height: '200px' }}></textarea>
                            </div>
                            <div class="inline field">
                            </div>
                            <div class="ui blue submit button fontCustom">Send</div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact