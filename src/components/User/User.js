import React from 'react';

const User = () => {
  return (
    <div className="user-account" style={{ height: '90vh', margin: '20px', border: '1px solid #ccc' }}>
      <h3 style={{ fontFamily: 'Arial, Helvetica, sans-serif', marginLeft: '1rem', color: '#5e5c5c', marginTop: '1rem', marginBottom: '1rem' }}>Account Settings</h3>

      <div className="card" style={{ background: 'rgb(248, 248, 249)', padding: '1rem', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '13px', fontWeight: '500', color: '#5e5c5c' }}>
        <div className="card-head" style={{ display: 'flex', alignItems: 'center', justifyContent: 'start' }}>
          <img src="https://www.kindpng.com/picc/m/271-2711764_girl-image-in-circle-hd-png-download.png" alt="user" style={{ height: '70px', background: 'rgb(192, 206, 231)' }} />
          <div style={{ marginLeft: '1rem', alignItems: 'flex-start', display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontWeight: '600', margin: '0' }}>Marry Doe</p>
            <p style={{ marginTop: '3px' }}>Marry@Gmail.com</p>
          </div>
        </div>
        <div style={{ display: 'flex', marginTop: '7px' }}>
          <p style={{ margin: '10px 0' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nihil consequuntur iure aliquam temporibus saepe perferendis veniam quasi quae commodi.</p>
        </div>
      </div>
      <hr style={{ marginBottom: '360px', border: 'none', borderTop: '3px dotted #ccc' }} />
      <hr style={{ border: 'none', borderTop: '3px dotted #ccc' }} />
    </div>
  );
}

export default User;
