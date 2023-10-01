import React from "react";
import "./style.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Experience = () => {
  return (
    <>
      <main>
        <Sidebar />
        <div className="main-content">
          <Navbar />

          <div className="resume">
            <header>
              <h2 className="h2 article-title">Experience</h2>
            </header>
            <section className="timeline">
              <div className="title-wrapper">
                <div className="icon-box">
                  <ion-icon name="book-outline"></ion-icon>
                </div>

                <h3 className="h3">Experience</h3>
              </div>

              <ol className="timeline-list">
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">React.js Developer</h4>

                  <span>1.5 Months</span>

                  <p className="timeline-text">Cruxtab Technologies</p>
                </li>
              </ol>
            </section>
            <section className="timeline">
              <div className="title-wrapper">
                <div className="icon-box">
                  <ion-icon name="book-outline"></ion-icon>
                </div>

                <h3 className="h3">Education</h3>
              </div>

              <ol className="timeline-list">
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    B.Tech Computer Engineering
                  </h4>

                  <span>2020 — 2024</span>
                  <p className="timeline-text">Uka Tarsadiya University</p>
                </li>

                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">HSC GSHEB Board</h4>

                  <span>2020</span>
                  <p className="timeline-text">
                    Dharamajivan Higher Secondary School
                  </p>
                </li>
              </ol>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Experience;
