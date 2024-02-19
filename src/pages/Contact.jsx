import React, { useState } from 'react';
import '../App.css';

function Contact() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState(''); 
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'firstName') {
            setFirstName(inputValue);
        } else if (inputType === 'lastName') {
            setLastName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
        setErrorMessage('Please enter a valid email address!');

        setFirstName('');
        setLastName('');
        setEmail('');
        setMessagte('');
        }
    }

        
    return (
            <section>
                <form className="form" onSubmit={handleFormSubmit}>
                    <div className="row">
                        <div className="form-group col-md-6 mb-3">
                            <label>First Name</label>
                            <input
                                value={firstName}
                                name="firstName"
                                onChange={handleInputChange}
                                type="text"
                                className="form-control text-white"
                            />
                        </div>
                        <div className="form-group col-md-6 mb-3">
                            <label>Last Name</label>
                            <input
                                value={lastName}
                                name="lastName"
                                onChange={handleInputChange}
                                type="text"
                                className="form-control text-white"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-group mb-3">
                            <label>Email Address</label>
                            <input
                                value={email}
                                name="email"
                                onChange={handleInputChange}
                                type="email"
                                className="form-control text-white"       
                            />
                        </div>
                        <div className="form-group mb-5">
                            <label>Leave a Message</label>
                            <textarea
                                value={message}
                                name="message"
                                onChange={handleInputChange}
                                type="text"
                                className="form-control text-white"
                                style={{height: 150}}
                            />
                        </div>
                        <button type="submit" className="btn btn-lg btn-primary mb-5">
                            Submit
                        </button>  
                    </div>
                </form>
            </section>
    );
}
 
export default Contact;

