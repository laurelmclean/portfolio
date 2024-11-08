import React from "react";
import "./Nav.css";

export default function Navbar() {
    return (
        <header className="nav">
            <div className="navbar-container">
                <div className="navbar-title">
                    <a href="#header" className="navbar-title-link">
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
                    <a href="https://www.linkedin.com/in/laurelamclean/" target="_blank" rel="noreferrer">
                        <img className="linkedin-icon" width='30px' src={`${process.env.PUBLIC_URL}/images/linkedin.png`} alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/laurelmclean" target="_blank" rel="noreferrer">
                        <img className="github-icon" width='30px' src={`${process.env.PUBLIC_URL}/images/ghicon.png`} alt="Github" />
                    </a>
                </nav>
            </div>
        </header>
    );
}
