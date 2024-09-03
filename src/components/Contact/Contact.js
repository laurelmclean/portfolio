import React from "react";
import "./Contact.css";

export default function Contact() {

    return (
        <div className="contact">
            <h1 className="contact-header">
                Get in Touch
            </h1>
            <div className="contact-buttons">
                <a href="https://www.linkedin.com/in/laurelamclean/"><img src="/images/linkedin.png" alt="LinkedIn" /></a>
                <a href="https://github.com/laurelmclean"><img src="/images/ghicon.png" alt="Github" /></a>
            </div>
        </div>
    );
}