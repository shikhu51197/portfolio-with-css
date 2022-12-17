
import React from "react";
import AboutImage from "../../assest/shikha.png";
import "./About.css";
import { ImDownload } from "react-icons/im";
import data from "./data";
import Card from "../../Components/Card";


const About = () => {
  return (
    <section id="about" >
        <h2>About Me</h2>
      <div className="about_conatiner">
      <div className="photo">
     <img src={AboutImage} alt="shikha"  />
      </div>
      <div>
        <div>
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
        </div>
        <br />
        <div>
        <p>
        i Learnt Full Stack Web Development from Masai School🏫(India's
            first Skill building School "Driven by Outcomes, Fuelled by
            Ambitions.")

          </p>
        </div>
        <br />
        <div>
        <p>
        💻 1200+ Hours Practical Coding , ⌛100+ Hours Soft Skill
            Development , 🌟80+ Mini Projects , 📚300 Hours Data Structures &
            Algorithms , ⏰100+ Hours Math & Logic , 📂10+ Projects & Hackathon

          </p>
        </div>
        <br />
        <div>
        <a href="https://drive.google.com/file/d/1Ft3zyA6KHRmaUC3C9FAr6p_9tWgwrQJi/view?usp=share_link" target="_blank"download className="btn primary">
            Download Resume
            <ImDownload />
          </a>

        </div>
      </div>
      </div>
    </section>
  );
};

export default About;