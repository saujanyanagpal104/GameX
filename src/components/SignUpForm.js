import React, { useState } from 'react';

const SignUpForm = (props) => {
    const [formData, setFormData] = useState({ fields: {} });

    const closeForm = () => {
        props.handleForm(false);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.handleSignUp(formData);
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
                            value={formData.fields.full_name}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.fields.email}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Mobile No.:
                        <input
                            type="text"
                            name="mobile_number"
                            placeholder="Enter your Mobile Number"
                            value={formData.fields.mobile_number}
                            onChange={handleChange}
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            name="password"
                            placeholder="Create password"
                            value={formData.fields.password}
                            onChange={handleChange}
                        />
                    </label>
                    <button className="signup-button" onClick={handleSubmit}>
                        SignUp
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;
