import "./overview.css";

function Overview() {
  return (
    <div className="container">
      <main className="main-content">
        <h2>Overview</h2>

        <div className="card-1">
          <div className="box-1">
            <div>
              <p>Current Balance</p>
              <span>$4,836.00</span>
            </div>
            <div>
              <p>Income</p>
              <span>$3,814.25</span>
            </div>
            <div>
              <p>Expenses</p>
              <span>$1,700.50</span>
            </div>
          </div>
        </div>

        <div>
          <div className="post">
            <div className="text">
              <p>Post</p>
              <span>See Details</span>
            </div>
            <div className="class">
                <img src="../src/images/Vector(1).svg" width={20} alt="" />
              <div className="class-1">
              <p>Total Saved</p>
              <h2>$850</h2>
              </div>

              <div className="goals">
      <div className="goal">
        <div className="bar" style={{ backgroundColor: '#2A8674' }}></div>
        <div>
          <p>Savings</p>
          <strong>$159</strong>
        </div>
      </div>
      <div className="goal">
        <div className="bar" style={{ backgroundColor: '#3793E0' }}></div>
        <div>
          <p>Gift</p>
          <strong>$40</strong>
        </div>
      </div>
      <div className="goal">
        <div className="bar" style={{ backgroundColor: '#5B556D' }}></div>
        <div>
          <p>Concert Ticket</p>
          <strong>$110</strong>
        </div>
      </div>
  
      <div className="goal">
        <div className="bar" style={{ backgroundColor: '#F2C9AC' }}></div>
        <div>
          <p>New Laptop</p>
          <strong>$10</strong>
        </div>
      </div>
    </div>
            </div>
          </div>
        </div>

        

      </main>
    </div>
  );
}

export default Overview;
