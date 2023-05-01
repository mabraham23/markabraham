import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the styles
import projectsData from "./projectData";
import './Projects.css';

const Projects = () => {
  return (
    <div>
      <Carousel autoPlay interval={3000}>
        {projectsData.map((project, index) => (
          <div key={index} className="project-slide">
            <img src={project.image} alt={project.title} className="project-image" />
            <p className="legend project-title">{project.title}</p>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
