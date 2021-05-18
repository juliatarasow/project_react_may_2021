import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css';
import Weather from '../Weather';
import porto from '../../images/selo_2017.png';

export default function Header() {

    return (

        <header>
            <nav className="NavBar">

                {/* <Link to="/">Porto</Link> */}
                <div>
                    <NavLink exact to="/"><img src={porto} alt="porto" className="Stamp" /></NavLink>
                </div>

                {/* Links to the Pages */}
                <div className="NavLinks">
                    <NavLink exact to="/" >Porto</NavLink>
                    <NavLink exact to="/climate">Climate</NavLink>
                    <NavLink exact to="/sightseeing">Sightseeing</NavLink>
                    <NavLink exact to="/culture">Culture</NavLink>
                    <NavLink exact to="/transport">Transport</NavLink>
                    <NavLink exact to="/covid">COVID</NavLink>
                </div>

                {/* Weather and Clock */}
                <div className="LocalData">
                    <Weather />
                    <div className="Clock">
                        <h3>Clock</h3>
                        <div>.....</div>
                    </div>
                </div>
            </nav >
            <hr />
        </header >


    )
}
