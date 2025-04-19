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
      <aside className="sidebar">
        <h2 className="logo">finance</h2>
        <nav className="nav-links">
          <a href="#" >Overview</a>
          <a href="/transactions">Transactions</a>
          <a href="/budgets">Budgets</a>
          <a href="/posts">Pots</a>
          <a href="/recurringBills">Recurring Bills</a>
        </nav>
        <div className="minimize">Minimize Menu</div>
      </aside>

      <main className="main-content">
        <h1>Overview</h1>
        <button className="btn btn-success" onClick={handleLogout}>Log Out</button>
      </main>
    </div>
  );
}

export default Overview;
