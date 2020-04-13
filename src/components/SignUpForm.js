import React from 'react';
import Modal from './Modal';

const SignUpForm = (props) => {
    const closeForm = () => {
        props.handleForm(!props.formState);
    };
    return (
        <Modal>
            <div className="signup-form-overlay">
                <div className="signup-form">
                    <h2>Register with us</h2>
                    <div onClick={closeForm} className="close-button">
                        CLOSE<span className="close-sign">(X)</span>
                    </div>
                    <form>
                        <label>
                            Full Name:
                            <input
                                type="text"
                                name="full_name"
                                placeholder="Enter your full name"
                                value="value"
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value="value"
                            />
                        </label>
                        <label>
                            Mobile No.:
                            <input
                                type="text"
                                name="number"
                                placeholder="Enter your Mobile Number"
                                value="value"
                            />
                        </label>
                        <label>
                            Password:
                            <input
                                type="password"
                                name="password"
                                placeholder="Create password"
                                value="value"
                            />
                        </label>
                        <button className="signup-button">SignUp</button>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default SignUpForm;
