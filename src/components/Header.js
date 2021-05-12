import React from 'react';
import { Link } from "react-router-dom"
import "./header.css"

export default function Header() {
    return (
        <header>
            <h2>Porto - the City of...</h2>

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
