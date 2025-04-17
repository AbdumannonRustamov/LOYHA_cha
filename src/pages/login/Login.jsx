import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [firebaseError, setFirebaseError] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/overview');
    } catch (error) {
      console.error('Login error:', error);
      setFirebaseError(error.message);
    }
  };

  return (
    <div className="login">
      <div>
        <img
          className="img_login"
          src="./src/images/Frame 33.png"
          alt="login"
          width={490}
          height={630}
        />
      </div>
      <div className="inputs">
        <div className="inputs_2">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <p>Email</p>
            <input
              type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <p>Password</p>
            <input
              type="password"
              className="input"
              value={password}
              onChange={handlePasswordChange}
              required
            />
            {passwordError && <p className="error-message">{passwordError}</p>}
            {firebaseError && <p className="error-message">{firebaseError}</p>}
            <br /><br />
            <button type="submit" className="btn btn-accent">Login</button>
          </form>
          <div className="bottom">
            <span>Dont have an account? </span>
            <Link className="link" to="/register">Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;