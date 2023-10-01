import React from "react";
import "./style.css";
import avatar from "../assets/my-avatar.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside className="sidebar" data-sidebar>
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img src={avatar} alt="" width="80" />
          </figure>

          <div className="info-content">
            <h1 className="name" title="">
              Aman Devani
            </h1>

            <p className="title">MERN Stack Developer</p>
          </div>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>

                <Link
                  to="mailto:amandevani25@gmail.com"
                  className="contact-link"
                >
                  amandevani25@gmail.com
                </Link>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>

                <Link
                  to="https://api.whatsapp.com/send?phone=8866514792&text=Hello"
                  className="contact-link"
                >
                  +91 888665 14792
                </Link>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>

                <address>Surat, Gujrat, Bharat</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            <li className="social-item">
              <Link
                to="https://www.github.com/AmanDevani"
                className="social-link"
                target="_blank"
              >
                <ion-icon name="logo-github"></ion-icon>
              </Link>
            </li>
            <li className="social-item">
              <Link
                to="https://www.linkedin.com/in/aman-devani-34b612239/"
                className="social-link"
                target="_blank"
              >
                <ion-icon name="logo-linkedin"></ion-icon>
              </Link>
            </li>

            <li className="social-item">
              <Link
                to="https://www.instagram.com/devani_aman"
                className="social-link"
                target="_blank"
              >
                <ion-icon name="logo-instagram"></ion-icon>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
