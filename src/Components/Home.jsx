import React from "react";
import "./style.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import CV from "../assets/Aman_Devani_CV.pdf";
import htmlIcon from "../assets/HTML.png";
import cssIcon from "../assets/CSS.png";
import jsIcon from "../assets/JS.png";
import nodeIcon from "../assets/Nodejs.png";
import reactIcon from "../assets/React.png";
import expressIcon from "../assets/express.png";
import mongoDBIcon from "../assets/mongoDB.png";
import wordpressIcon from "../assets/wordpress.png";
import GitIcon from "../assets/git.png";
import GithubIcon from "../assets/github.png";
const Home = () => {
  const skills = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "React.js", icon: reactIcon },
    { name: "Git", icon: GitIcon },
    { name: "Node.js", icon: nodeIcon },
    { name: "Express.js", icon: expressIcon },
    { name: "MongoDB", icon: mongoDBIcon },
    { name: "Wordpress", icon: wordpressIcon },
    { name: "Github", icon: GithubIcon },
  ];
  return (
    <>
      <main>
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <article className="about active" data-page="about">
            <header>
              <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">
              <p>Hello and welcome to my portfolio!</p>

              <p>
                As a MERN stack developer, I specialize in building dynamic and
                responsive web applications. I take pride in delivering
                high-quality solutions that meet the needs of clients and users
                alike. From database design and API development to front-end
                implementation and user experience.
              </p>
              <a href={CV} download="" className="cv-btn">
                Download CV
              </a>
            </section>

            <section className="all_skills">
              <h2 className="h2 article-title ">Skills</h2>
              <div className="skills-list">
                {skills.map((skill, index) => (
                  <div className="skill" key={index}>
                    <img src={skill.icon} alt={skill.name} />
                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
            </section>
          </article>
        </div>
      </main>
    </>
  );
};

export default Home;
