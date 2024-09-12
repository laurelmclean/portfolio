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
                        <a
                            href={project.link}
                            key={project.image}
                            className="project-item">
                            <div className="project-card">
                                <img
                                    alt="project"
                                    className="project-image"
                                    src={project.image}
                                />
                                <div className="project-info">
                                    <h2 className="project-category">{project.category}</h2>
                                    <h1 className="project-title">
                                        {project.title}
                                    </h1>
                                    <p className="project-description">{project.description}</p>
                                    <h2 className="project-language">{project.language}</h2>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
