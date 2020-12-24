import React from 'react';
import {Link} from "react-router-dom";

const Header = () => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link className="navbar-brand" to="/">DIARY 2018</Link>
            </div>
            <div className="collapse navbar-collapse" id="#myNavbar">
                <ul className="nav navbar-nav navbar-right">
                    <li><Link className="navbr-brand" to="/Login"> Login </Link></li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Header;