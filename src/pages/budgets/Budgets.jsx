
import './Budgets.css';

export default function Budgets() {
  return (
    <div className="budgets-container">
      <header className="budgets-header">
        <h1>Budgets</h1>
        <button className="add-budget-btn">+ Add New Budget</button>
      </header>

      <section className="overview-section">
        <div className="chart-placeholder">
          <h2>$338</h2>
        </div>
        <div className="spending-summary">
          <h3>Spending Summary</h3>
          <ul>
            <li><span>Entertainment</span><span>$25.00</span></li>
            <li><span>Bills</span><span>$90.00</span></li>
            <li><span>Dining Out</span><span>$100.00</span></li>
            <li><span>Personal Care</span><span>$60.00</span></li>
          </ul>
        </div>
      </section>

      <section className="budget-category">
        <h3>Entertainment</h3>
        <div className="budget-bar"></div>
        <div className="latest-spending">
          <h4>Latest Spending</h4>
          <ul>
            <li><span>Spotify</span><span>$10</span></li>
            <li><span>Netflix</span><span>$15</span></li>
          </ul>
        </div>
      </section>

      <section className="budget-category">
        <h3>Bills</h3>
        <div className="budget-bar"></div>
        <div className="latest-spending">
          <h4>Latest Spending</h4>
          <ul>
            <li><span>Internet</span><span>$50</span></li>
            <li><span>Electricity</span><span>$40</span></li>
          </ul>
        </div>
      </section>

      <section className="budget-category">
        <h3>Dining Out</h3>
        <div className="budget-bar"></div>
        <div className="latest-spending">
          <h4>Latest Spending</h4>
          <ul>
            <li><span>Starbucks</span><span>$5</span></li>
            <li><span>Pizza Hut</span><span>$20</span></li>
          </ul>
        </div>
      </section>

      <section className="budget-category">
        <h3>Personal Care</h3>
        <div className="budget-bar"></div>
        <div className="latest-spending">
          <h4>Latest Spending</h4>
          <ul>
            <li><span>Barber</span><span>$30</span></li>
            <li><span>Salon</span><span>$30</span></li>
          </ul>
        </div>
      </section>
    </div>
  );
}
