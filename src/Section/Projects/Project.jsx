import React from "react";
import "./Projects.css";

import img1 from "../../assest/Screenshot (1506).png";
import img2 from "../../assest/Screenshot (1502).png";
import img3 from "../../assest/Screenshot (1503).png";
import img4 from "../../assest/Screenshot (1507).png";
import img5 from "../../assest/Screenshot (1511).png";
import img6 from "../../assest/Screenshot (1510).png";
import Tech_stack from "./../Tech_Stack/Tech_stack";

const data = [
  {
    id: 1,
    image: img1,
    title: "Clockify.com",
    github: "https://github.com/Skchouhan753/far-bird-7999",
    demo: "https://633990fcab76de57326475f2--endearing-snickerdoodle-41dc09.netlify.app/",
    description:
      " Clockify is a simple time tracker and timesheet app that lets you and your team track work hours across projects. Unlimited users, free forever.",
    Tech_stack: "JavaScript , HTML , CSS , Bootstrap",
  },

  {
    id: 2,
    image: img2,
    title: "Fabbag.com",
    github:
      "https://github.com/shikhu51197/industrious-summer-462/tree/main/industrious",
    demo: "https://rad-kringle-4e5d41.netlify.app/",
    description:
      "FabBag is a beauty experts and addicts driven by our passion for high-quality beauty products and delightful service. ",
    Tech_stack: "JavaScript , HTML , CSS",
  },
  {
    id: 3,
    image: img3,
    title: "Desktime.com",
    github: "https://github.com/shubhamrathore09/dizzy-stitch-9009",
    demo: "https://63965859d3b1f26d4121b9e4--rad-kringle-4e5d41.netlify.app/",
    description:
      "DeskTime allows teams, managers, and freelancers to measure time spent on tasks and projects. It is used in many industries for settling up with hourly workers and billing clients for work.",
    Tech_stack: "JavaScript , HTML , CSS , Bootstrap",
  },
  {
    id: 4,
    image: img4,
    title: "Tic-Tac-Toe Game",
    github: "https://github.com/shikhu51197/my-work/tree/main/game1",
    demo: "https://endearing-snickerdoodle-41dc09.netlify.app/",
    description:
      "Tic-Tac-Toe is a simple and fun game for 2 players, X and O. It is played on a 3x3 grid. Each players goal is to make 3 in a row.",
    Tech_stack: "JavaScript , HTML , CSS , React",
  },
];
const Project = () => {
  return (
    <section id="Project">
      <h2 className="main_head">My Recent Projects</h2>

      <div className="container Project__container">
        {data.map(
          ({ id, image, title, description, Tech_stack, github, demo }) => {
            return (
              <article key={id} className="Project__item">
                <div className="Project__item-image">
                  <img src={image} alt={title} width="300px" />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>TechStack:- {Tech_stack}</p>
                <div className="Project__item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Project;
