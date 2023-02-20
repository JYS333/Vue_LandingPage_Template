import React from "react";
import { NavLink } from "react-router-dom";

const Manage = () => {
    return (
        <div>
            管理页
            <NavLink to="/dashBoard/welcome">跳到欢迎</NavLink>
            <NavLink to="/dashBoard/user">跳到用户</NavLink>
            <NavLink to="/detail">跳到详情</NavLink>
        </div>
    )
}

export default Manage;