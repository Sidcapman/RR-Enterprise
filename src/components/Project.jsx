import React from "react";
import "./Project.css";
import MYROrobot from "./MYROrobot.JPG";
import AriesDrone from "./AriesDrone.PNG";
import AriesDrone2 from "./Ariesdrone2.PNG";

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="live-project-title">Live Projects</h1>
      <div className="project">
        <div className="project-image">
          <img src={AriesDrone} alt="Project 1" />
        </div>
        <div className="project-content">
          <div className="project-about">
            <h2>Aries Drones</h2>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-image">
          <img src={AriesDrone2} alt="Project 2" />
        </div>
        <div className="project-content">
          <div className="project-about">
            <h2>Land Rover</h2>
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-image">
          <img src={MYROrobot} alt="Project 3" />
        </div>
        <div className="project-content">
          <div className="project-about">
            <h2>MYRO</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
