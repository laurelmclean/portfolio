import React from "react";
import "./Contact.css";

export default function Contact() {

    return (
        <section id="contact">
            <h1 className="contact-title">
                Get in Touch
            </h1>
            <div className="contact-buttons">
                <a href="https://www.linkedin.com/in/laurelamclean/" target="_blank" rel="noreferrer"><img className="linkedin-icon" src="/images/linkedin.png" alt="LinkedIn" /></a>
                <a href="https://github.com/laurelmclean" target="_blank" rel="noreferrer"><img className="github-icon" src="/images/ghicon.png" alt="Github" /></a>
            </div>
        </section>
    );
}
