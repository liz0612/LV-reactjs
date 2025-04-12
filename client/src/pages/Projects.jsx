import React from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const dummyProjects = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio built with React.",
      imageUrl: "https://via.placeholder.com/400x200",
      link: "https://github.com/liz061204/portfolio",
    },
    {
      title: "Tech Blog",
      description: "A blog for developers using Node and Handlebars.",
      imageUrl: "https://via.placeholder.com/400x200",
      link: "https://github.com/liz061204/tech-blog",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Projects</h2>
      {dummyProjects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          link={project.link}
        />
      ))}
    </div>
  );
}

export default Projects;