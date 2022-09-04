import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../index.css'
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {

    const form = useRef();
    const [message, setMessage] = useState("");
    const [flag, setFlag] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        if (document.querySelector('#fname').value == "") {
            messageBox("Enter your first name")
            return;
        }
        else if (document.querySelector('#lname').value == "") {
            messageBox("Enter your last name")
            return;
        }
        else if (document.querySelector('#email').value == "") {
            messageBox("Enter your email")
            return;
        }
        else if (document.querySelector('#message').value == "") {
            messageBox("Enter your message")
            return;
        }


        emailjs.sendForm(
            'service_kc91ibg',
            'template_bdfqz43',
            form.current,
            'fVw5NraPaZYZ4lTZN'
        )
            .then((result) => {
                console.log(result.text);
                messageBox("Sent successfully");

                //clear all
                document.querySelector('#fname').value = "";
                document.querySelector('#lname').value = "";
                document.querySelector('#email').value = "";
                document.querySelector('#message').value = "";

            }, (error) => {
                console.log(error.text);
            });
    };

    const messageBox = (msg) => {
        setFlag(!flag)
        setMessage(msg)
        if (msg == "Sent successfully") {
            document.querySelector('#alert').classList.remove("negative")
            document.querySelector('#alert').classList.add("positive")
        }
        else if (document.querySelector('#alert').classList.contains("positive")) {
            document.querySelector('#alert').classList.remove("positive")
            document.querySelector('#alert').classList.add("negative")
        }

        if (flag) {
            document.querySelector('#alert').classList.remove("hidden")
        }
        else {
            document.querySelector('#alert').classList.add("hidden")
        }
    }

    return (
        <div className='contact'>
            <div className='ui pad segment'>
                <div className='ui two column stackable grid '>
                    <div className="ui text container fontCustom column">
                        <div className="ui two column grid">
                            <div className="column contact-left">
                                <div className="ui raised segment">
                                    <a className="ui red ribbon label" href="#">Contact Information</a>
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
                        <form className="ui form attached fluid segment" ref={form} onSubmit={sendEmail} name="myForm">
                            <div className="ui negative message hidden " id='alert'>
                                <i className="close icon" onClick={() => messageBox("")}></i>
                                Please, {message}
                            </div>
                            <div className="two fields">
                                <div className="field">
                                    <label>First Name</label>
                                    <input placeholder="First Name" type="text" name='from_firstName' id='fname' />
                                </div>
                                <div className="field">
                                    <label>Last Name</label>
                                    <input placeholder="Last Name" type="text" name='from_lastName' id='lname' />
                                </div>
                            </div>
                            <div className="field">
                                <label>Mail</label>
                                <input placeholder="Mail" type="text" name='from_email' id='email' />
                            </div>
                            <div className="field">
                                <label>Message</label>
                                <textarea placeholder="Write something.." style={{ height: '200px' }} name="message" id='message'></textarea>
                            </div>
                            <div className="inline field">
                            </div>
                            <input type='submit' value='Send' className="ui blue submit button fontCustom" />
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact