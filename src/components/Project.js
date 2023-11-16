import React from "react";

function Project({ title, description, imageUrl, liveUrl, codeUrl }) {
  return (
    <div className="project">
      <img src={imageUrl} alt={title} /> "<h3>{title}</h3>
      <p>{description}</p>
      <a href={liveUrl} target="_blank" rel="noopener noreferrer">
        View Live
      </a>
      <a href={codeUrl} target="_blank" rel="noopener noreferrer">
        View Code
      </a>
    </div>
  );
}

export default Project;
