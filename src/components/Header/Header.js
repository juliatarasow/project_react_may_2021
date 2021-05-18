import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css';
import Weather from './Weather';
import porto from '../../images/selo_2017.png';

export default function Header() {

    return (

        <header>
            <nav className="NavBar">
                {/* <Link to="/">Porto</Link> */}
                <div>
                    <img src={porto} alt="porto" style={{ height: "90px", width: "auto" }} />
                </div>
                <div className="NavLinks">
                    <NavLink exact to="/" >Porto</NavLink>
                    <NavLink to="/climate">Climate</NavLink>
                    <NavLink to="/sightseeing">Sightseeing</NavLink>
                    <NavLink to="/culture">Culture</NavLink>
                    <NavLink to="/transport">Transport</NavLink>
                    <NavLink to="/covid">COVID</NavLink>
                </div>
                <Weather />
                <div className="Clock">
                    <h3>Clock</h3>
                    <div>.....</div>
                </div>
            </nav>
            <hr />
        </header>


    )
}
