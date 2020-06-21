import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const SignUpForm = (props) => {
    const [formData, setFormData] = useState({});
    const [validateForm, setValidation] = useState(false);
    const [isRegistered, setRegistrationStatus] = useState(false);

    useEffect(() => {
        if (props.register.isAuthenticated) {
            history.push('/feed');
        }
    }, [props.register.isAuthenticated]);

    const history = useHistory();

    const closeForm = () => {
        props.handleForm(false);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const checkFields =
            formData.full_name &&
            formData.email &&
            formData.mobile_number &&
            formData.password;
        if (checkFields) {
            setValidation(false);
            setRegistrationStatus(true);
            await props.handleSignUp(formData);
        }
        setValidation(true);
    };

    return (
        <div className="signup-form-overlay">
            <div className="signup-form">
                <h2>Register</h2>
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
                            value={formData.full_name || ''}
                            onChange={handleChange}
                        />
                    </label>
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
                        Mobile No.:
                        <input
                            type="text"
                            name="mobile_number"
                            placeholder="Enter your Mobile Number"
                            value={formData.mobile_number || ''}
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
                    <button className="signup-button" onClick={handleSubmit}>
                        {isRegistered ? 'Wait!! Signing Up...' : 'SignUp'}
                    </button>
                </form>
                {validateForm && (
                    <span className="validation-error">
                        Cannot leave any field empty!!
                    </span>
                )}
            </div>
        </div>
    );
};

export default SignUpForm;
