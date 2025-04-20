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
          <a href="#" > <img src="../src/images/overview.svg" alt="" />       Overview</a>
          <a href="/transactions"><img src="../src/images/icon-nav-transactions.svg" alt="" />      Transactions</a>
          <a href="/budgets"><img src="../src/images/icon-nav-budgets.svg" alt="" />     Budgets</a>
          <a href="/posts"><img src="../src/images/icon-nav-pots.svg" alt="" />   Pots</a>
          <a href="/recurringBills"><img src="../src/images/icon-recurring-bills.svg" alt="" width={18} />     Recurring Bills</a>
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
