import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="menu">
                <Link to={'/'} className="item">
                    Home
                </Link>
                <Link to={'/'} className="item active">
                    Coin List
                </Link>
            </div>
        </div>
    )
}

export default Navbar;