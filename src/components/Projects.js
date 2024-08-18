import React from "react";
import { projects } from "../data";

export default function Projects() {
    return (
        <section id="projects">
            <div className="projects-container">
                <div className="projects-header">
                    <h1 className="projects-title">
                        Projects
                    </h1>
                    <p className="projects-description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                        facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                        fuga dolore.
                    </p>
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
                                    <h2 className="project-subtitle">
                                        {project.subtitle}
                                    </h2>
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
