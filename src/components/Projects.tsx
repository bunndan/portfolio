import React from 'react';
import { projects } from '../data/projectsData';

const Projects: React.FC = () => {
  return (
    <section id="projects" style={{ padding: '2rem' }}>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} style={{ marginBottom: '1.5rem' }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
          {project.link && (
            <p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </p>
          )}
        </div>
      ))}
    </section>
  );
};

export default Projects;
