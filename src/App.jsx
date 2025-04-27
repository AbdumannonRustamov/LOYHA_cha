import { useState, useEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

import {
  Budgets,
  Login,
  Overview,
  Posts,
  RecurringBills,
  Register,
  Transactions
} from "./pages";
import MainLayout from "./Layout/MainLayout";
import { PortectedRoutes } from "./components";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);       
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: 50 }}>
        Loading…
      </div>
    );
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: user ? (
        <PortectedRoutes user={true}>
          <MainLayout />
        </PortectedRoutes>
      ) : (
        <Navigate to="/register" replace />
      ),
      children: user
        ? [
            { index: true, element: <Overview /> },
            { path: "overview", element: <Overview /> },
            { path: "budgets", element: <Budgets /> },
            { path: "posts", element: <Posts /> },
            { path: "recurringBills", element: <RecurringBills /> },
            { path: "transactions", element: <Transactions /> },
          ]
        : []
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" replace /> : <Login />
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" replace /> : <Register />
    },
    {
      path: "*",
      element: <Navigate to={user ? "/" : "/register"} replace />
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
