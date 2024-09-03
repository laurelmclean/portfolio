import React from "react";
import "./Nav.css";

export default function Navbar() {
    return (
        <header className="nav">
            <div className="navbar-container">
                <a className="navbar-title">
                    <a href="#about" className="navbar-title-link">
                        Laurel McLean
                    </a>
                </a>
                <nav className="navbar-nav">
                    <a href="#about">
                        About
                    </a>
                    <a href="#projects">
                        Projects
                    </a>
                    <a href="#contact">
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
}
