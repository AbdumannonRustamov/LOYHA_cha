import { useEffect, useState } from "react";
import { collection, getDocs, query, limit } from "firebase/firestore";
import { db } from "../../firebase/index";
import "./taransactions.css";

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const q = query(collection(db, "transactions"), limit(15));
        const querySnapshot = await getDocs(q);
        const transactionList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTransactions(transactionList);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <div>
      <h3 className="h3">Transactions</h3>
      <div className="fatherdiv">
        <div>
          <div className="my-div">
            <input
              type="text"
              className="my-input"
              placeholder="Search transaction"
            />
            <div className="you-div">
              <div className="selects">
                <p>Sort by</p>
                <select className="my-select">
                  <option value="" disabled selected>
                    Latest
                  </option>
                  <option value="amount">Amount</option>
                  <option value="date">Date</option>
                  <option value="category">Category</option>
                </select>
              </div>
              <div className="selects">
                <p>Category</p>
                <select className="my-selectt">
                  <option value="" disabled selected>
                    All Transactions
                  </option>
                  <option value="entertainment">Entertainment</option>
                  <option value="groceries">Groceries</option>
                  <option value="dining">Dining Out</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            {transactions.map((item) => (
              <div key={item.id} className="childrendiv">

                <div className="childs">
                  <img src={item.avatar || "../src/images/avatars/default.jpg"} alt="avatar" />
                  <p>{item.name || "Unknown"}</p>
                </div>
                <div className="faths">
                  <p>{item.category || "General"}</p>
                  <p>{item.date ? new Date(item.date.seconds * 1000).toLocaleDateString() : "No date"}</p>
                </div>
                <span>{item.amount ? `$${item.amount}` : "$0.00"}</span>
              </div>
              
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Transactions;