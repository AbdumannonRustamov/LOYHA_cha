import "./Post.css";
function Posts() {
  return (
    <div>
      <div className="father-post">
        <h1>Budgets</h1>
        <button className="add-budget-btn">+ Add New Budget</button>
      </div>
      <div className="savings-container">
        <div className="savings-card">
          <div className="savings-card-header">
            <span> Savings</span>
            <span className="savings-amount">$159.00</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill color-green"
              style={{ width: "7.95%" }}
            ></div>
          </div>
          <div className="progress-info">
            <span>7.95%</span>
            <span>Target of $2,000</span>
          </div>
          <div className="savings-actions">
            <button>+ Add Money</button>
            <button>Withdraw</button>
          </div>
        </div>

        <div className="savings-card">
          <div className="savings-card-header">
            <span> Concert Ticket</span>
            <span className="savings-amount">$110.00</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill color-green"
              style={{ width: "7.95%" }}
            ></div>
          </div>
          <div className="progress-info">
            <span>7.95%</span>
            <span>Target of $2,000</span>
          </div>
          <div className="savings-actions">
            <button>+ Add Money</button>
            <button>Withdraw</button>
          </div>
        </div>

        <div className="savings-card">
          <div className="savings-card-header">
            <span>Gift</span>
            <span className="savings-amount">$40.00</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill color-green"
              style={{ width: "7.95%" }}
            ></div>
          </div>
          <div className="progress-info">
            <span>7.95%</span>
            <span>Target of $2,000</span>
          </div>
          <div className="savings-actions">
            <button>+ Add Money</button>
            <button>Withdraw</button>
          </div>
        </div>

        <div className="savings-card">
          <div className="savings-card-header">
            <span>New Laptop</span>
            <span className="savings-amount">$10.00</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill color-green"
              style={{ width: "7.95%" }}
            ></div>
          </div>
          <div className="progress-info">
            <span>7.95%</span>
            <span>Target of $2,000</span>
          </div>
          <div className="savings-actions">
            <button>+ Add Money</button>
            <button>Withdraw</button>
          </div>
        </div>

        <div className="savings-card">
          <div className="savings-card-header">
            <span>Holiday</span>
            <span className="savings-amount">$531.00</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill color-green"
              style={{ width: "7.95%" }}
            ></div>
          </div>
          <div className="progress-info">
            <span>7.95%</span>
            <span>Target of $2,000</span>
          </div>
          <div className="savings-actions">
            <button>+ Add Money</button>
            <button>Withdraw</button>
          </div>
        </div>

        <div className="savings-card">
          <div className="savings-card-header">
            <span> Savings</span>
            <span className="savings-amount">$159.00</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill color-green"
              style={{ width: "7.95%" }}
            ></div>
          </div>
          <div className="progress-info">
            <span>7.95%</span>
            <span>Target of $2,000</span>
          </div>
          <div className="savings-actions">
            <button>+ Add Money</button>
            <button>Withdraw</button>
          </div>
        </div>

        <div className="savings-card">
          <div className="savings-card-header">
            <span> Savings</span>
            <span className="savings-amount">$159.00</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill color-green"
              style={{ width: "7.95%" }}
            ></div>
          </div>
          <div className="progress-info">
            <span>7.95%</span>
            <span>Target of $2,000</span>
          </div>
          <div className="savings-actions">
            <button>+ Add Money</button>
            <button>Withdraw</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
