import React from 'react';
import "../../App.css";
import { useNavigate } from 'react-router-dom';

const NewAccount = () => {
    const navigate = useNavigate();

    const handleLoginBtn = () => {
        navigate('/user');
    };

    return (
        <div className="containerOne">
            <div className="heading">
                <h2>Create your PopX account</h2>
            </div>
            <div className="input-group">
                <input type="text" required />
                <label htmlFor="">Full Name<span className="agency-text">*</span></label>
            </div>
            <div className="input-group">
                <input type="text" required />
                <label htmlFor="">Phone number<span className="agency-text">*</span></label>
            </div>
            <div className="input-group">
                <input type="text" required />
                <label htmlFor="">Email address<span className="agency-text">*</span></label>
            </div>
            <div className="input-group">
                <input type="text" required />
                <label htmlFor="">Password<span className="agency-text">*</span></label>
            </div>
            <div className="input-group">
                <input type="text" />
                <label htmlFor="">Company name</label>
            </div>
            <p>Are you an Agency?<span className="agency-text">*</span></p>
            <div className="toggle-buttons">
                <input type="radio" name="agency" id="yes" value="yes" defaultChecked />
                <label htmlFor="yes">Yes</label>
                <input type="radio" name="agency" id="no" value="no" />
                <label htmlFor="no">No</label>
            </div>
            <button className="create-account-button" id="show-account" onClick={handleLoginBtn}>Create Account</button>
        </div>
    );
}

export default NewAccount;
