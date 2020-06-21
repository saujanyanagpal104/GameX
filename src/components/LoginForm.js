import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const LoginForm = (props) => {
    const [formData, setFormData] = useState({});
    const [validateForm, setValidation] = useState(false);
    const [isLoggedIn, setLoggingIn] = useState(false);

    useEffect(() => {
        if (props.auth.isAuthenticated) {
            props.handleForm(false);
            history.push('/feed');
        }
    }, [props.auth.isAuthenticated]);

    const history = useHistory();

    const closeForm = () => {
        props.handleForm(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.email && formData.password) {
            setValidation(false);
            setLoggingIn(true);
            await props.loginUser(formData);
            if (props.auth.isAuthenticated) {
                props.handleForm(false);
            } else {
                setLoggingIn(false);
                setValidation(true);
            }
        } else {
            setValidation(true);
        }
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
                            value={formData.email || ''}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            placeholder="Create password"
                            value={formData.password || ''}
                            onChange={handleChange}
                        />
                    </label>
                    <button className="login-button" onClick={handleSubmit}>
                        {isLoggedIn ? 'Wait! Logging In...' : 'Login'}
                    </button>
                </form>
                {validateForm && (
                    <span className="validation-error">
                        Invalid Email or Password!!
                    </span>
                )}
            </div>
        </div>
    );
};

export default LoginForm;
