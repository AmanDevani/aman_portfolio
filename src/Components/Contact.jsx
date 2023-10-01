import React from "react";
import "./style.css";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9jfliy6",
        "template_pfvcw2r",
        form.current,
        "5uLGjUadPgl92Tm7R"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast.success("Message Sent Successfully");
    e.target.reset();
    window.location.href = "/";
  };
  return (
    <>
      <main>
        <Sidebar />
        <div className="main-content">
          <Navbar />
          <div className="contact">
            <header>
              <h2 className="h2 article-title">Contact</h2>
            </header>

            <div className="separator"></div>
            <div className="contact__info">
              <div className="sidebar-information_more flex">
                <div className="email">
                  <ul className="contacts-list ">
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
                  </ul>
                </div>
                <div className="phone">
                  <ul className="contacts-list ">
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
                          +91 88665 14792
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="location">
                  <ul className="contacts-list ">
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
                </div>
              </div>
              <div className="social__contact">
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
            </div>
            <section className="mapbox" data-mapbox>
              <figure>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59506.716962273866!2d72.83738451679693!3d21.225113880976032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f1e852caa53%3A0xef2093afc2ce2ca8!2sSitaram%20Nagar!5e0!3m2!1sen!2sin!4v1695989181692!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  title="Sitaram nager Soc"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </figure>
            </section>

            <section className="contact-form">
              <h3 className="h3 form-title">Contact Form</h3>
              <form ref={form} onSubmit={sendEmail} className="contact__form">
                <div className="contact__form-div">
                  <input
                    type="text"
                    name="name"
                    minLength={3}
                    required
                    className="contact__form-input"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="contact__form-div">
                  <input
                    type="email"
                    name="email"
                    className="contact__form-input"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="contact__form-div contact__form-area">
                  <textarea
                    minLength={3}
                    required
                    cols={30}
                    rows={10}
                    name="message"
                    className="contact__form-input"
                    placeholder="Write your Message"
                  ></textarea>
                </div>
                <button className="form-btn" type="submit" value="Send">
                  <ion-icon name="paper-plane"></ion-icon>
                  <span>Send Message</span>
                </button>
              </form>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
