import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import DataDisplay from "./DataDisplay";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="content-wrapper">
          <div className="page-content">
            <Outlet />
          </div>
          <DataDisplay />
        </div>
      </div>
    </div>
  );
};

export default Layout;
