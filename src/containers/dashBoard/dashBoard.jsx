import React from "react";
import { NavLink } from "react-router-dom";

import './dashboard.less';

const Manage = () => {
    return (
        <div className="DashboardPanel">
            Dashboard Page
            <NavLink to="/detail">Jump to Detail Page</NavLink>
            <NavLink to="/dashboard/welcome">Jump to welcome</NavLink>
            <NavLink to="/dashboard/user">Jump to User</NavLink>
        </div>
    )
}

export default Manage;