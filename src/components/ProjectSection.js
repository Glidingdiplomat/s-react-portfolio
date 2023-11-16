import React from "react";
//import Project from ".Project";

function ProjectSection() {
  // note to remind myself sample projects data
  const projects = [
    {
      title: "Project 1",
      description: "Description of Project 1",
      imageUrl: "url_to_image",
      liveUrl: "url_to_live_project",
      codeUrl: "url_to_project_code",
    },
    //  note to remind me to Add more projects and homeworks goes here
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div>
        {projects.map((project) => (
          <project key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;
