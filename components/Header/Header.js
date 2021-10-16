import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css';
import Weather from '../Weather';
import porto from '../../images/selo_2017.png';
import Clock from '../Clock';

export default function Header() {

    return (

        <header>
            <nav className="NavBar">

                {/* Clickable Logo*/}
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
                    <div className="hidden">
                        <NavLink exact to="/"><img src={porto} alt="porto" className="Stamp1" /></NavLink>
                    </div>

                    <Weather />

                    <Clock />

                </div>
            </nav >
            <hr />
        </header >


    )
}
