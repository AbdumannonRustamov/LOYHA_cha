import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import './overview.css';

function Overview() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div className="container">
      <main className="main-content">
        <h1>Overview</h1>
        <div className='card-1'> 
          <div className='box-1'>
            <div>ewfwer</div>
            <div>fweew</div>
            <div>feww</div>
          </div>
        </div>
        <button className="btn btn-success" onClick={handleLogout}>Log Out</button>
      </main>
    </div>
  );
}

export default Overview;
