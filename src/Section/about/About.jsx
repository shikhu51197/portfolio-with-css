import React from "react";
import AboutImage from "../../assest/shikha.png";
import "./About.css";
import cv from "../../assest/Shikha_Gupta_Resume.pdf";
import { ImDownload } from "react-icons/im";
import data from "./data";
import Card from "./../../Components/Card";

const About = () => {
  return (
    <section id="about">
      <div className="container about_conatiner">
        <div className="about_left">
          <div className="about_portrait">
            <img src={AboutImage} alt="About Image" width="375px" />
          </div>
        </div>
        <div className="about_right">
          <h2>About Me</h2>
          <div className="about_cards">
            {data.map((item) => {
              return (
                <Card key={item.id} className="about_card">
                  <span className="about_card-icon">{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desec}</small>
                </Card>
              );
            })}
          </div>

          <p>
            A passionate & Enthusiastic 🤓 Full Stack Web Developer & learning
            MERN Stack at Masai School, Bangalore.Always eager to learn
            something new and deal with new tasks and challenges. I have done my
            Bechlor's of Engineering from Shahdol , MadhyaPradesh , India.
          </p>
          <br></br>
          <p>
            i Learnt Full Stack Web Development from Masai School🏫(India's
            first Skill building School "Driven by Outcomes, Fuelled by
            Ambitions.")
          </p>
          <br></br>
          <p>
            💻 1200+ Hours Practical Coding , ⌛100+ Hours Soft Skill
            Development , 🌟80+ Mini Projects , 📚300 Hours Data Structures &
            Algorithms , ⏰100+ Hours Math & Logic , 📂10+ Projects & Hackathon
          </p>
          <br></br>
          <a href={cv} download className="btn primary">
            Download Resume
            <ImDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
