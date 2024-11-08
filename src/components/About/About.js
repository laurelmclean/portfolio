import React from "react";
import "./About.css";

export default function About() {
    return (
        <section id="about">
            <h1 className="about-title">
                About
            </h1>
            <div className="container">
                <div className="left-column">
                    <h2 className="title-font">
                        Laurel McLean
                    </h2>
                    <h3>Software Developer</h3>
                    <p className="lead-text">
                    I'm a software developer based in Calgary, who transitioned from a background in journalism and communications to the world of coding in 2022. 
                    Currently an Applied Computer Science student at Dominican University of California (graduating December 2024) and interning at Shopify, I'm passionate about using my diverse skillset to craft innovative solutions.                   
    
                    </p>
                    <ul className="skills">
                        <li><strong className="skills-heading">Languages:</strong> HTML, CSS, JavaScript, Typescript, Ruby, Python, SQL, GraphQL</li>
                        <li><strong className="skills-heading">Libraries/Frameworks:</strong> React, Rails, Bootstrap, Flask, Node.js, Express.js</li>
                        <li><strong className="skills-heading">Tools:</strong> Git, GitHub, VSCode, Figma, Splunk, Observe, BigQuery</li>
                    </ul>
                </div>
                <div className="right-column">
                    <img
                        className="image"
                        alt="headshot"
                        src="/images/headshot.jpg"
                    />
                </div>
            </div>
        </section>
    );
}
