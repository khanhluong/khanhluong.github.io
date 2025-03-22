import React from "react";
import "./Project.css";

const Projects: React.FC = () => {
  const projects = [
    { id: 1, title: "Project 1", description: "A cool web application" },
    { id: 2, title: "Project 2", description: "An awesome mobile app" },
  ];
  return (
    <section id='projects'>
      <h2>Projects</h2>
      <div className='project-list'>
        {projects.map((project) => (
          <div key={project.id} className='project-card'>
            <h3>{project.title}</h3>
            <h3>{project.description}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
