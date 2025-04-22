import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";
import Overview from "../pages/overview/Overview";

function MainLayout() {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Overview /> 
        <Outlet />     
      </div>
    </div>
  );
}

export default MainLayout;
