import React from "react";
import ProjectItems from "../../ProjectItems";


function Projects(){
    return(
        <div className="projects-primary" id="projects">
            <h1>Projects</h1>
            <div className="project-container">
            <ul className="projects-info">
            {ProjectItems.map((item, index) => {
                        return (
                            <div class="project-card">
                        <div class="project-content">
                            <span class="project-overlay"></span>
                            <h2 class="project-name">{item.title}</h2>
                        </div>
                        <div class="project-card-content">
                            <p class="project-description">{item.info}</p>
                        </div>
                    </div>
                        )
                    })}
            </ul>
            </div>
        </div>
    );
}

export default Projects;