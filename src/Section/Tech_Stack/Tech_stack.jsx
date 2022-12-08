import React from "react";
import "./Tech_stack.css";
import { SiTypescript } from "react-icons/si";
import { SiHeroku } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { SiReactrouter } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiCanva } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { BsFillBootstrapFill } from "react-icons/bs";
import { ImDatabase } from "react-icons/im";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaNpm } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { SiJavascript } from "react-icons/si";
import { DiReact } from "react-icons/di";
import Skills from "./../Skills/Skills";

const Tech_stack = () => {
  return (
    <div name="Skills" className="backgroundbody">
      <div className="skillbody">
        <div>
          <h2 className="techcss">Tech Stacks</h2>
          <h3 className="headcss" align="center">
            These are the Technologies I've worked with
          </h3>
        </div>
      </div>
      <div className="iconsbrand">
        <article className="iconsdisigne">
          <ImDatabase />
          <h5>DSA</h5>
          <h6>[Other Skills]</h6>
        </article>
        <article className="iconsdisigne">
          <AiFillHtml5 className="html" />
          <h5>HTML</h5>
          <h6>[Language]</h6>
        </article>
        <article className="iconsdisigne">
          <DiCss3 />
          <h5>CSS</h5>
          <h6>[Language]</h6>
        </article>
        <article className="iconsdisigne">
          <SiJavascript />
          <h5>JavaScript</h5>
          <h6>[Language]</h6>
        </article>
        <article className="iconsdisigne">
          <SiTypescript />
          <h5>TypeScript</h5>
          <h6>[Language]</h6>
        </article>
        <article className="iconsdisigne">
          <DiReact />
          <h5>REACT</h5>
          <h6>[Library]</h6>
        </article>
        <article className="iconsdisigne">
          <SiRedux />
          <h5>Redux</h5>
          <h6>[Library]</h6>
        </article>
        <article className="iconsdisigne">
          <BsFillBootstrapFill />
          <h5>Bootstrap</h5>
          <h6>[Framework]</h6>
        </article>
        <article className="iconsdisigne">
          <SiExpress />
          <h5>Express Js</h5>
          <h6>[Framework]</h6>
        </article>
        <article className="iconsdisigne">
          <DiNodejsSmall />
          <h5>Node Js</h5>
          <h6>[Workspace platform]</h6>
        </article>
        <article className="iconsdisigne">
          <DiMongodb />
          <h5>MongoDB</h5>
          <h6>[DataBase]</h6>
        </article>
        <article className="iconsdisigne">
          <SiTailwindcss />
          <h5>Tailwindcss</h5>
          <h6>[CSS Framework]</h6>
        </article>
        <article className="iconsdisigne">
          <SiStyledcomponents />
          <h5>Styled-Components</h5>
          <h6>[CSS framework]</h6>
        </article>
        <article className="iconsdisigne">
          <AiFillGithub />
          <h5>Github</h5>
          <h6>[Others Skills]</h6>
        </article>
        <article className="iconsdisigne">
          <SiVisualstudiocode />
          <h5>VS code</h5>
          <h6>[IDE]</h6>
        </article>
        <article className="iconsdisigne">
          <FaNpm />
          <h5>NPM</h5>
          <h6> [Package Manager] </h6>
        </article>
        <article className="iconsdisigne">
          <SiCypress />
          <h5>Cypress</h5>
          <h6>[Testing Tool]</h6>
        </article>
        <article className="iconsdisigne">
          <SiChakraui />
          <h5>Chakra U-I</h5>
          <h6>[Library]</h6>
        </article>
        <article className="iconsdisigne">
          <SiReactrouter />
          <h5>React-Router</h5>
          <h6>[Library]</h6>
        </article>
        <article className="iconsdisigne">
          <SiHeroku />
          <h5>Heroku</h5>
          <h6>[Hosting]</h6>
        </article>
        <article className="iconsdisigne">
          <SiNetlify />
          <h5>Netlify</h5>
          <h6>[Hosting]</h6>
        </article>
        <article className="iconsdisigne">
          <SiVercel />
          <h5>Vercel</h5>
          <h6>[Hosting]</h6>
        </article>
        <article className="iconsdisigne">
          <SiPostman />
          <h5>Postman</h5>
          <h6>[API Platform]</h6>
        </article>
        <article className="iconsdisigne">
          <SiCanva />
          <h5>Canva</h5>
          <h6>[Other Skills]</h6>
        </article>
      </div>
    </div>
  );
};

export default Tech_stack;
