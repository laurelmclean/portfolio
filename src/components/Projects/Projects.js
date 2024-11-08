import React from "react";
import "./Projects.css"
import { projects } from "../../data";

export default function Projects() {
    return (
        <section id="projects">
            <div className="projects-container">
                <div className="projects-header">
                    <h1 className="projects-title">
                        Featured Projects
                    </h1>
                </div>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div
                            key={project.image}
                            className="project-item">
                            <div className="project-card">
                                <img
                                    alt="project"
                                    className="project-image"
                                    src={`${process.env.PUBLIC_URL}${project.image}`}
                                />
                                <div className="project-info">
                                    <h2 className="project-category">{project.category}</h2>
                                    <h1 className="project-title">
                                        {project.title}
                                    </h1>
                                    <p className="project-description">{project.description}</p>
                                    <h2 className="project-language">{project.language}</h2>
                                    <div className="project-link-container">
                                        <a href={project.github} target="_blank" rel="noreferrer"><img className="gh-icon" src={`${process.env.PUBLIC_URL}/images/ghicon.png`} alt="github" /></a>
                                        <a href={project.link} target="_blank" rel="noreferrer"><img className="website-icon" src={`${process.env.PUBLIC_URL}/images/website.png`} alt="Website" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
