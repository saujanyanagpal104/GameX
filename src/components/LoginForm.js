import React from 'react';
import Modal from './Modal';

const LoginForm = (props) => {
    const closeForm = () => {
        props.handleForm(!props.formState);
    };
    return (
        <Modal>
            <div className="login-form-overlay">
                <div className="login-form">
                    <h2>Login</h2>
                    <div onClick={closeForm} className="close-button">
                        CLOSE<span className="close-sign">(X)</span>
                    </div>
                    <form>
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
                            Password:
                            <input
                                type="password"
                                name="password"
                                placeholder="Create password"
                                value="value"
                            />
                        </label>
                        <button className="login-button">Login</button>
                    </form>
                </div>
            </div>
        </Modal>
    );
};

export default LoginForm;
