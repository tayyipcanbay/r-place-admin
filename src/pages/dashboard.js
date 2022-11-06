import React from "react";
import NavbarDefault from "../components/nav";
import Sidebar from "../components/sidebar";
import "../styles/dashboard.css";

function Dashboard(){

    return (
        <div className="dashboard-body">
            <NavbarDefault />
            <Sidebar />
            <div className="dashboard-content">
                <h1>Dashboard</h1>
            </div>
        </div>
    );
}
export default Dashboard;

