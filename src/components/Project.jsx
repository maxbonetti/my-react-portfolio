import React from 'react';

const Project = ({ title, image, deployedLink, repoLink }) => (
  <div>
    <h3>{title}</h3>
    <img src={image} alt={title} />
    <div>
      <a href={deployedLink} target="_blank" rel="noopener noreferrer">View App</a>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  </div>
);

export default Project;