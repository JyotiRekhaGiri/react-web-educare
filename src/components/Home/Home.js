import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../../App.css";

const Home = () => {
    const navigate = useNavigate();

    const handleCreateAccountBtn = () => {
        navigate('/newaccount');
    };

    const handleLoginBtn = () => {
        navigate('/login');
    };
    
    return (
        <div className="login">
            <h2 style={{ marginBottom: '0.2em', fontFamily: 'Arial, Helvetica, sans-serif' }}>Welcome to PopX</h2>
            <p style={{ marginBottom: '0.5rem', color: '#9a9797' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            <div className="buttons">
                <button className="btn1" onClick={handleCreateAccountBtn}>Create Account</button>
                <button className="btn2" onClick={handleLoginBtn}>Already Registered? Login</button>
            </div>
        </div>
    );
}

export default Home;
