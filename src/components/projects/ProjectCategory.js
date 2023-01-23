import React from "react";
import ProjectList from "./ProjectList";
import classNames from "classnames";

const container = ({ active }) => {
  return {
    transform: active
      ? "scale(1.1) translate3d(0, 0, 0)"
      : "scale(1) translate3d(0, 0, 0)",
  };
};

const item = ({ focused, active, shiftLeft }) => {
  return {
    transform:
      focused && !active
        ? `translate3d(${shiftLeft ? "-" : ""}100%, 0, 0)`
        : "translate3d(0, 0, 0)",
  };
};

const background = ({ thumbnail, active }) => {
  return {
    background: `url(${thumbnail}) no-repeat center center`,
    backgroundSize: "cover",
    height: "500px",
    width: !active ? "calc(20vw - 20px)" : "500px",
  };
};

const ProjectCategory = ({
  projects,
  handleClick,
  active,
  focused,
  shiftLeft,
  isLast,
  category,
}) => {
  const { thumbnail, name } = category;

  const classes = classNames({
    category: true,
    isActive: active,
    isLast,
    shiftLeft,
  });

  return (
    <div className={classes} style={item({ focused, active, shiftLeft })}>
      <div className="category--content">
        <h2>{name}</h2>
        <ProjectList projects={projects} />
      </div>
      <div
        className="category--image-container"
        onClick={handleClick}
        style={container({ active })}
      >
        <div
          className="category--image"
          style={background({ thumbnail, active })}
        />
      </div>
      <div className="category--name">
        <h6>{name}</h6>
      </div>
      <div className="category--closeButton">
        <a href="#">Back</a>
      </div>
    </div>
  );
};

export default ProjectCategory;
