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
                        <br className="hidden-lg-inline-block" />software developer
                    </h2>
                    <p className="lead-text">
                    I'm a software developer based in Calgary, who transitioned from a background in journalism and communications to the world of coding in 2022. 
                    Currently a student at Dominican University of California (graduating December 2024) and interning at Shopify, I'm passionate about using my diverse skillset to craft innovative solutions.                   
                        Languages: HTML, CSS, JavaScript, Typescript, Ruby, Python, SQL, GraphQL
                        Libraries/Frameworks: React, Rails, Bootstrap, Flask, Node.js, Express.js
                        Tools: Git, GitHub, VSCode, Figma, Splunk, Observe, BigQuery
                    </p>
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
