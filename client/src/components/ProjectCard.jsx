import React from "react";

function ProjectCard({ title, description, imageUrl, link }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      marginBottom: "16px",
      backgroundColor: "#fff",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      {imageUrl && <img src={imageUrl} alt={title} style={{ width: "100%", borderRadius: "8px" }} />}
      <h3>{title}</h3>
      <p>{description}</p>
      {link && <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>}
    </div>
  );
}

export default ProjectCard;