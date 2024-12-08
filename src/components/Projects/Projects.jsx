import React, { useRef } from "react";
import "./Projects.css";
import { projects } from "../../utils/data";
import ProjectCard from "./ProjectCard/ProjectCard";
import Slider from "react-slick";

const Projects = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="project-container">
      <h5>Projects</h5>
      <div className="project-content">
        <Slider ref={sliderRef} {...settings}>
          {projects.map((item) => (
            <ProjectCard key={item.name} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
