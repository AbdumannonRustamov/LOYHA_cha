import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { Budgets, Login, Overview, Posts, RecurringBills, Register, Transactions } from "./pages";
import MainLayout from "./Layout/MainLayout";
import { PortectedRoutes } from "./components";


function App() {
  const user = true
  const routes = createBrowserRouter([
    {
      path: "/",
      element:( 
      <PortectedRoutes user={user}>
        <MainLayout/>
      </PortectedRoutes>
          ),
      children: [
        {
          index: true,
          element: <Overview/>
        },
        {
          path: '/budgets',
          element : <Budgets/>
        },
        {
          path: '/overview',
          element: <Overview/>
        },
        {
          path: '/posts',
          element: <Posts/>
        },
         {
          path: '/recurringBills',
          element: <RecurringBills/>
         },
         {
          path: '/transactions',
          element: <Transactions/>
         }
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />
    }
  ]);
  return (
    <RouterProvider router={routes} />
  );
}

export default App;
