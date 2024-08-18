import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container">
                <div className="left-column">
                    <h1 className="title-font">
                        Laurel McLean
                        <br className="hidden-lg-inline-block" />software developer
                    </h1>
                    <p className="lead-text">
                    I'm a software developer based in Calgary, who transitioned from a background in journalism and communications to the world of coding in 2022. 
                    Currently a student at Dominican University of California (graduating December 2024) and interning at Shopify, I'm passionate about using my diverse skillset to craft innovative solutions.                    </p>
                    <div className="button-container">
                        <a
                            href="#projects"
                            className="button button-primary">
                            View my work
                        </a>
                    </div>
                </div>
                <div className="right-column">
                    <img
                        className="image"
                        alt="headshot"
                        src="./headshot.svg"
                    />
                </div>
            </div>
        </section>
    );
}
