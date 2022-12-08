import React from "react";
import "./Skill.css";

import {GrReactjs} from 'react-icons/gr'
import {SiRedux} from 'react-icons/si'
import {IoLogoJavascript} from 'react-icons/io'
import {AiFillHtml5} from 'react-icons/ai'
import {IoLogoCss3} from 'react-icons/io'
import {IoLogoNodejs} from 'react-icons/io'
import {SiExpress} from 'react-icons/si'
import {SiMongodb} from 'react-icons/si'
import {FaBootstrap} from 'react-icons/fa'
const Skills = () => {
  return (
    <section id="skill">
      <h2>My Skills</h2>
      <br></br>
      <div className="container skills_container">

        <div className="skills_frontend">
          <h3>Frontend Development</h3>

          <div className="skills_content">
            <article className="skills_details">
              <AiFillHtml5 />
              <h4>HTML</h4>
            </article>

            <article className="skills_details">
              <IoLogoCss3 />
              <h4>CSS</h4>
            </article>

            <article className="skills_details">
              <IoLogoJavascript />
              <h4>JavaScript</h4>
            </article>

            <article className="skills_details">
              <GrReactjs/>
              <h4>React</h4>
            </article>

            <article className="skills_details">
              <SiRedux/>
              <h4>Redux</h4>
            </article>

            <article className="skills_details">
              <FaBootstrap/>
              <h4>Bootstrap</h4>
            </article>

          </div>
        </div>

      

      <div className="skills_Backend">
        <h3>Backend Development</h3>

        <div className="skills_content">
        <article className="skills_details">
              <IoLogoNodejs />
              <h4>Node JS</h4>
            </article>

          <article className="skills_details">
              <SiExpress />
              <h4>Express JS</h4>
            </article>

            <article className="skills_details">
              <SiMongodb />
              <h4>Mongo DB</h4>
            </article>
        </div>

      </div>



      
      </div>
    </section>
  );
};

export default Skills;

