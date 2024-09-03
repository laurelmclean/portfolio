import React from "react";
import "./Libraries.css"
import { libraries } from "../../data";

export default function Libraries() {
    return (
        <section id="libraries">
            <div className="libraries-container">
                <div className="libraries-header">
                    <h1 className="libraries-title">
                        NPM Packages
                    </h1>
                    <p className="libraries-description">
                        Here are a collection of NPM packages I've created and shared with the global developer community on npmjs.com
                    </p>
                </div>
                <div className="libraries-grid">
                    {libraries.map((library) => (
                        <a
                            href={library.link}
                            key={library.link}
                            className="library-item">
                            <div className="library-card">
                                <div className="library-info">
                                    <h1 className="library-title">
                                        {library.title}
                                    </h1>
                                    <p className="library-description">{library.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
