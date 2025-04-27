import "./overview.css";
import { ApexChart } from "../../components/Chart";
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

        <div className="bg">
          <div className="post">
            <div className="text">
              <p>Post</p>
              <span>See Details</span>
            </div>
            <div className="class">
              <img src="../src/images/Vector(1).svg" width={20} alt="" />
              <div className="class-1">
                <p>Total Saved</p>
                <h3>$850</h3>
              </div>

              <div className="goals">
                <div className="goal">
                  <div
                    className="bar"
                    style={{ backgroundColor: "#2A8674" }}
                  ></div>
                  <div>
                    <p>Savings</p>
                    <strong>$159</strong>
                  </div>
                </div>
                <div className="goal">
                  <div
                    className="bar"
                    style={{ backgroundColor: "#3793E0" }}
                  ></div>
                  <div>
                    <p>Gift</p>
                    <strong>$40</strong>
                  </div>
                </div>
                <div className="goal">
                  <div
                    className="bar"
                    style={{ backgroundColor: "#5B556D" }}
                  ></div>
                  <div>
                    <p>Concert Ticket</p>
                    <strong>$110</strong>
                  </div>
                </div>

                <div className="goal">
                  <div
                    className="bar"
                    style={{ backgroundColor: "#F2C9AC" }}
                  ></div>
                  <div>
                    <p>New Laptop</p>
                    <strong>$10</strong>
                  </div>
                </div>
             
            </div>
          </div>
        </div>
        <div className="chart">
          <div className="detalies">
          <h4>Budgets</h4>
          <p>See Details</p>
          </div>
          
          <div className="charts" >
          <ApexChart /> 
          </div>
        </div>
        </div>
        <div className="father-div">
          <div className="wes">
            <div className="texts">
              <h4>Transactions</h4>
              <p>View All</p>
            </div>
            <div>
            <div className="children-div">
              <div className="child">
                <img src="./src/images/avatars/emma-richardson.jpg" alt="ece" />
                <p>Emma Richardson</p>
              </div>
              <div className="fath">
                <span>+$75.50</span>
                <p>19 Aug 2024</p>
              </div>
            </div>
            <div className="children-div">
              <div className="child">
                <img src="./src/images/avatars/savory-bites-bistro.jpg" alt="ece" />
                <p>Savory Bites Bistro</p>
              </div>
              <div className="fath">
              <span style={{ color: 'black' }}>-$55.50</span>

                <p>19 Aug 2024</p>
              </div>
            </div>
            <div className="children-divv">
              <div className="child">
                <img src="./src/images/avatars/daniel-carter.jpg" alt="ece" />
                <p>Daniel Carter</p>
              </div>
              <div className="fath">
              <span style={{ color: 'black' }}>-$42.30</span>
                <p>18 Aug 2024</p>
              </div>  
            </div>
            <div className="children-diva">
              <div className="child">
                <img src="./src/images/avatars/sun-park.jpg" alt="ece" />
                <p>Sun Park</p>
              </div>
              <div className="fath">
                <span>+$120.00</span>
                <p>17 Aug 2024</p>
              </div>
            </div>
            <div className="children-div">
              <div className="child">
                <img src="./src/images/avatars/urban-services-hub.jpg" alt="ece" />
                <p>Urban Services Hu</p>
              </div>
              <div className="fath">
                <span>+$75.50</span>
                <p>19 Aug 2024</p>
              </div>
            </div>
            </div>
          </div>
          <div className="fatt">
          <div className="wess">
            <div className="ffather">
              <h3>Recurring Bills</h3>
              <p>See Details</p>
            </div>
            <div className="childer">
              <p>Paid Bills</p>
              <span>$190.00</span>
            </div>
            <div className="childer">
              <p>Paid Bills</p>
              <span>$190.00</span>
            </div>
            <div className="childer">
              <p>Paid Bills</p>
              <span>$190.00</span>
            </div>
          </div>    
          </div>
        </div>
      </main>       
    </div>
  );
}

export default Overview;
