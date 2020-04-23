import React from 'react';
import Modal from './Modal';

const LoginForm = (props) => {
    const closeForm = () => {
        props.handleForm(false);
    };

    const handleSubmit = () => {
        console.log('LoggedIn');
    };

    const handleChange = (e) => {
        console.log(e.target.value);
    };

    return (
        <Modal>
            <div className="login-form-overlay">
                <div className="login-form">
                    <h2>Login</h2>
                    <div onClick={closeForm} className="close-button">
                        CLOSE<span className="close-sign">(X)</span>
                    </div>
                    <form
                        method="POST"
                        action="http://localhost:4000/api/login"
                        onSubmit={handleSubmit}
                    >
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={'email'}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            Password:
                            <input
                                type="password"
                                name="password"
                                placeholder="Create password"
                                value={'password'}
                                onChange={handleChange}
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
