import React from "react";
import "./Header.css";

export default function Header() {
    return (
        <section id="header">
            <div className="header-container">
                <h2 className="small-font">
                    Hi, my name is
                </h2>
                    <h1 className="header-font">
                        Laurel McLean
                    </h1>
                <h2 className="small-font">
                    Full Stack Software Developer
                </h2>
                <div className="button-container">
                    <a
                        href="#projects"
                        className="button button-primary">
                        View my work
                    </a>
                    <a
                        href="#contact"
                        className="button button-primary">
                        Get in touch
                    </a>
                </div>
                </div>
        </section>
    );
}
