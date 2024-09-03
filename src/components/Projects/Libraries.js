import React from "react";
import "./Projects.css"
import { libraries } from "../../data";

export default function Libraries() {
    return (
        <section id="projects">
            <div className="projects-container">
                <div className="projects-header">
                    <h1 className="projects-title">
                        NPM Packages
                    </h1>
                    <p className="projects-description">
                        Here are a collection of NPM packages I've created and shared with the global developer community on npmjs.com
                    </p>
                </div>
                <div className="projects-grid">
                    {libraries.map((project) => (
                        <a
                            href={project.link}
                            key={project.link}
                            className="project-item">
                            <div className="project-card">
                                <div className="project-info">
                                    <h1 className="project-title">
                                        {project.title}
                                    </h1>
                                    <p className="project-description">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
