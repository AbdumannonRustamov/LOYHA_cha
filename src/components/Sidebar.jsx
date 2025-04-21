import { useState } from 'react';
import './sidebar.css';

function Sidebar() {
  const [minimized, setMinimized] = useState(false);

  const toggleSidebar = () => {
    setMinimized(!minimized);
  };

  return (
    <aside className={`sidebar ${minimized ? 'minimized' : ''}`}>
      <h2 className="logo">{!minimized && 'finance'}</h2>

      <nav className="nav-links">
        <a href="#"><img src="../src/images/overview.svg" alt="" /> {!minimized && 'Overview'}</a>
        <a href="/transactions"><img src="../src/images/icon-nav-transactions.svg" alt="" /> {!minimized && 'Transactions'}</a>
        <a href="/budgets"><img src="../src/images/icon-nav-budgets.svg" alt="" /> {!minimized && 'Budgets'}</a>
        <a href="/posts"><img src="../src/images/icon-nav-pots.svg" alt="" /> {!minimized && 'Pots'}</a>
        <a href="/recurringBills"><img src="../src/images/icon-recurring-bills.svg" alt="" width={18} /> {!minimized && 'Recurring Bills'}</a>
      </nav>

      <button className="minimize" onClick={toggleSidebar}>
        <img src="../src/images/Vector.svg" alt="Toggle" />
        {!minimized && 'Minimize Menu'}
      </button>
    </aside>
  );
}

export default Sidebar;
