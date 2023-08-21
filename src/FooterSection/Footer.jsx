
import "../FooterSection/Footer.css";
import blackImg from "../assets/Footer img/abhisheklogo.png";
import emailjs from "@emailjs/browser";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import DownArrow from "../ArrowComp/DownArrow";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_bkiyws6",
        "template_b4fj92w",
        form.current,
        "Ot2YAGfdJiIHd66b7"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast("Email Sent Successfully");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <footer
        className="footer "
        id="contact"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="footer-main">
          <div className="foot-svg" data-aos="fade-up" data-aos-duration="3000">
            <img src={blackImg} />
            <p>
              Abhishek Soni
              <br />
              Providing Great Web Design & Web Development Services
            </p>
          </div>
          <div
            className="foot-detail"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <div className="foot-card">
              <h2>Contact Us</h2>

              <form ref={form} onSubmit={sendEmail} className="foot-form">
                <div className="form-input">
                  <span className="form-inp1">
                    <h5>Name</h5>
                    <input
                      name="user_name"
                      type="text"
                      placeholder="Enter Your Name"
                      required
                    />
                  </span>
                  <span className="form-inp2">
                    <h5>Email</h5>
                    <input
                      name="user_email"
                      type="email"
                      placeholder="Enter Your Email"
                      required
                    />
                  </span>
                  <span className="form-textarea">
                    <h5>Name</h5>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows="4"
                      cols="50"
                    ></textarea>
                  </span>
                  <span className="foot-submit">
                    <button className="bt" id="bt">
                      <span className="msg" id="msg"></span>
                      SEND
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="grid foot-grid foot-grid grid-flow-col gap-4">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>

        <DownArrow />

        <div className="cop">
          <p className="cop-p">
            Copyright © 2023 - All right reserved by Abhishek Soni Full Stack
            Developer
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
