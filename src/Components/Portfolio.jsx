import React from "react";
import "./style.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work3 from "../assets/work3.jpg";
const Portfolio = () => {
  return (
    <>
      <main>
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="portfolio">
            <header>
              <h2 className="h2 article-title">Portfolio</h2>
            </header>

            <section className="projects">
              <ul className="project-list">
                <li
                  className="project-item active"
                  data-filter-item
                  data-category="web development"
                >
                  <figure className="project-img">
                    <img src={work1} alt="crypto" loading="lazy" />
                  </figure>

                  <h3 className="project-title">Crypto Tracker</h3>

                  <p className="project-category">
                    The crypto tracker is a platform that provides real-time
                    information on various cryptocurrencies. It displays
                    cryptocurrency platforms and lists multiple coins along with
                    live charts and their respective values in INR , USDT , and
                    Euro.
                  </p>
                  <Link
                    to="https://guide-crypto.netlify.app/"
                    className="view__demo"
                    target="_blank"
                  >
                    View Demo
                  </Link>
                </li>
                <li
                  className="project-item active"
                  data-filter-item
                  data-category="web development"
                >
                  <figure className="project-img">
                    <img src={work2} alt="notes" loading="lazy" />
                  </figure>

                  <h3 className="project-title">Notes App</h3>

                  <p className="project-category">
                    The NotesApp is a user-friendly application that caters to
                    the needs of individuals looking to organize their thoughts,
                    tasks, and ideas. With a user-friendly interface, it offers
                    the ability to create, read, update, and delete notes
                    effortlessly.
                  </p>
                  <Link
                    to="https://noteapp-gyl1.onrender.com/"
                    className="view__demo"
                    target="_blank"
                  >
                    View Demo
                  </Link>
                </li>
                <li
                  className="project-item active"
                  data-filter-item
                  data-category="web development"
                >
                  <figure className="project-img">
                    <img src={work3} alt="finance" loading="lazy" />
                  </figure>

                  <h3 className="project-title">E-Commerce App</h3>

                  <p className="project-category">
                    The Ecommerce App is a shopping destination that offers a
                    seamless and convenient shopping experience for users. With
                    this app, users have the power to browse, select, and
                    purchase a wide range of products from the comfort of their
                    devices.
                  </p>
                  <Link
                    to="https://e-commerce-mern.cyclic.app/"
                    className="view__demo"
                    target="_blank"
                  >
                    View Demo
                  </Link>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Portfolio;
