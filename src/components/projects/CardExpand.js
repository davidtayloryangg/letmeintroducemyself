import { useState, useEffect } from "react";
import {
  projects1,
  projects2,
  projects3,
  projects4,
  projects5,
} from "./Projects";
import ProjectCategory from "./ProjectCategory";
import categoriess from "./Categories";
import "./CardExpand.css";

const CardExpand = () => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    setCategories(categoriess);
    setProjects({
      consequat: projects1,
      non: projects2,
      commodo: projects3,
      velit: projects4,
      voluptate: projects5,
    });
  }, []);

  const focusOff = (e) => {
    if (e.target.className !== "category--image") {
      setActiveIndex(null);
      setOpen(false);
    }
  };

  return (
    <div className="App">
      <div
        className={`categories--menu-container ${open ? "focused" : ""}`}
        onClick={focusOff}
        style={{ height: "100vh" }}
      >
        <div className="categories menu">
          {categories.map((category, i) => (
            <ProjectCategory
              category={category}
              projects={projects[category.slug]}
              key={"cat-" + i}
              handleClick={() => {
                setActiveIndex(i);
                setOpen(true);
              }}
              active={i === activeIndex}
              focusOff={focusOff}
              focused={open}
              shiftLeft={i < activeIndex}
              isLast={
                i === categories.length - 1 || i === categories.length - 2
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardExpand;
