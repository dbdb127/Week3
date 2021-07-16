import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCalendar, faChartBar, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import './Navbar.css'

const Navbar = () => {
    return (
    <nav className="navbar navbar-expand-lg navbar-light ">
    <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
                <NavLink exact
                    className="nav-link" 
                    to="/"
                    activeClassName="active"
                >
                <FontAwesomeIcon icon={faClock} className="search" size='2x'/>
                    {/* Home */}
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink 
                    className="nav-link" 
                    to="/calendar"
                    activeClassName="active"
                >
                <FontAwesomeIcon icon={faCalendar} className="search" size='2x'/>
                    {/* Calendar */}
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink 
                    className="nav-link" 
                    to="/analytics"
                    activeClassName="active"
                >
                <FontAwesomeIcon icon={faChartBar} className="search" size='2x'/>
                    {/* Analytics */}
                </NavLink>
            </li>
            <span class="vertical-line search"></span>
            <li className="nav-item">
                <NavLink 
                    className="nav-link" 
                    to="/payment"
                    activeClassName="active"
                >
                <FontAwesomeIcon icon={faCreditCard} className="search" size='2x'/>
                    {/* Payment */}
                </NavLink>
            </li>
        </ul>
        </div>
    </div>
    </nav>
    );
};

export default Navbar;