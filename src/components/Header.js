import React from 'react';
import { Link } from "react-router-dom"
import "./header.css"

export default function Header() {
    return (
        <header>
            <div>
                <h2>Porto - the City of...</h2>

                <div className="weather">Weather</div>

                {/* For Anneli - coding the clock */}
                <div className="clock">
                    <h3>Clock</h3>
                    <div>.....</div>

                </div>


            </div>
    
            <nav className="NavBar">
                <Link to="/">Porto</Link>
                <Link to="/climate">Climate</Link>
                <Link to="/sightseeing">Sightseeing</Link>
                <Link to="/culture">Culture</Link>
                <Link to="/transport">Transport</Link>
                <Link to="/covid">COVID</Link>

            </nav>
        </header>
    )
}
