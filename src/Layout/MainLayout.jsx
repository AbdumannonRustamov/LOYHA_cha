import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";

function MainLayout() {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">  
        <Outlet /> 
      </div>
    </div>
  );
}

export default MainLayout;
