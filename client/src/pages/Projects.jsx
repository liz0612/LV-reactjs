import React from "react";
import "../style/Project.scss";

const dummyProjects = [
  {
    title: "Tech Blog",
    description: "A blog app using Node, Express, and Handlebars.",
    imageUrl: "/example2.jpg",
    link: "https://github.com/liz0612/tech-blog",
  },
];

function Projects() {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="project-grid">
        {dummyProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;