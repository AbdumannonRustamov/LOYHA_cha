
  import './Budgets.css';
  import { ApexChart } from '../../components/Chart'
  export default function Budgets() {
    return (
      <div className="budgets-container">
        <div className='header'>  
        <div className='header-2'>
        <h1>Budgets</h1>
        <button className="add-budget-btn">+ Add New Budget</button>
        </div>
          <div className='chart'>
            <ApexChart/>
            </div>
            </div>
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

       
      </div>
    );
  }
