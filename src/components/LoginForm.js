import React, { useState } from 'react';

const LoginForm = (props) => {
    const [formData, setFormData] = useState({});

    const closeForm = () => {
        props.handleForm(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.loginUser(formData);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="login-form-overlay">
            <div className="login-form">
                <h2>Login</h2>
                <div onClick={closeForm} className="close-button">
                    CLOSE<span className="close-sign">(X)</span>
                </div>
                <form method="POST" action="http://localhost:4000/api/login">
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            placeholder="Create password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </label>
                    <button className="login-button" onClick={handleSubmit}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
