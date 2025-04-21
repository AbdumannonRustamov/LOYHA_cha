import { Outlet } from "react-router-dom";
import { Sidebar } from "../components"; 


function MainLayout() {
  return (
    <div className="layout-container">
      <Sidebar />
      <main className="layout-main">
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
