import React, { useState } from 'react';
import './register.css';
import { Link, useNavigate } from 'react-router-dom';


function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
      return;
    }

    navigate('/overview');
  };

  return (
    <div className="register">
      <div>
        <img
          className="img_register"
          src="./src/images/Frame 33.png"
          alt="fe"
          width={490}
          height={630}
        />
      </div>
      <div className="inputs">
        <div className="inputs_2">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <p>Name</p>
            <input
              type="text"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <p>Email</p>
            <input
              type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p>Create Password</p>
            <input
              type="password"
              className="input"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {passwordError && <p className="error-message">{passwordError}</p>}
            <br /> <br />
            <button type="submit" className="btn btn-accent">Create Account</button>
          </form>
          <div className='bottom'>
            <span>Already have an account? </span>
            <Link className='link' to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
