import React from "react";
import { Link,Outlet, NavLink } from "react-router-dom";

export default function HostLayout(){
    return (
        <>
            <nav className="host-nav">
                <NavLink end className={({isActive}) => isActive? "active-link": null} to="/host">Dashboard</NavLink>
                <NavLink className={({isActive}) => isActive? "active-link": null} to="/host/income">Income</NavLink>
                <NavLink className={({isActive}) => isActive? "active-link": null} to="/host/reviews">Reviews</NavLink>
            </nav>
            <Outlet/>
        </>
    )
}
