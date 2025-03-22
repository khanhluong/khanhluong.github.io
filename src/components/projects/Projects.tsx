import React from "react";
import "./Project.css";

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio",
      description: "A portfolio using ReactJS",
      status: "on-going",
    },
    {
      id: 2,
      title: "Speed Odometer",
      description: "An Android application to calculate speed",
      status: "on-going",
    },
  ];
  return (
    <section id='projects'>
      <h2>Projects</h2>
      <div className='project-list'>
        {projects.map((project) => (
          <div key={project.id} className='project-card'>
            <h3>{project.title}</h3>
            <h3>{project.description}</h3>
            <h4>{project.status}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
