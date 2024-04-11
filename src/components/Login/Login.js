import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
    const navigate = useNavigate();

    const handleLoginBtn = () => {
        navigate('/user');
    };

    return (
        <div className="containerOne" style={{ height: '90vh' }}>
            <div className="heading">
                <h2 style={{ marginBottom: '9px', fontWeight: '600' }}>Sign in to your <br />PopX account</h2>
                <p style={{ color: '#969393' }}>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit,</p>
            </div>
            <div className="input-group">
                <input type="text" required />
                <label htmlFor="">Email address<span className="agency-text">*</span></label>
            </div>
            <div className="input-group">
                <input type="password" required />
                <label htmlFor="">Password<span className="agency-text">*</span></label>
            </div>
            <button className="create-account-button" onClick={handleLoginBtn}>Login</button>
        </div>
    );
}

export default Login;
