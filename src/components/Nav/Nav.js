import React from "react";
import "./Nav.css";

export default function Navbar() {
    return (
        <header className="nav">
            <div className="navbar-container">
                <div className="navbar-title">
                    <a href="#about" className="navbar-title-link">
                        Laurel McLean
                    </a>
                </div>
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
                <nav className="navbar-social">
                    <a href="https://www.linkedin.com/in/laurelamclean/"><img width='30px' src="/images/linkedin.png" alt="LinkedIn" /></a>
                    <a href="https://github.com/laurelmclean"><img width='30px' src="/images/ghicon.png" alt="Github" /></a>
                </nav>
            </div>
        </header>
    );
}
