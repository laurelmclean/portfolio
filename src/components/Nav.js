import React from "react";

export default function Navbar() {
    return (
        <header className="header">
            <div className="navbar-container">
                <a className="navbar-title">
                    <a href="#about" className="navbar-title-link">
                        Laurel McLean
                    </a>
                </a>
                <nav className="navbar-nav">
                    <a href="#projects">
                        Projects
                    </a>
                    <a href="#skills">
                        Skills
                    </a>
                    <a href="#about">
                        About
                    </a>
                </nav>
            </div>
        </header>
    );
}
