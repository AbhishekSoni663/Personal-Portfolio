import { Fade, Zoom } from "react-awesome-reveal";
import "../AboutSection/AboutDetail.css";
import ProfileImg from "../assets/AboutImg/Profile1.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Box } from "@mui/material";
const AboutDetail = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="about-detail" id="about">
        <div className="about-detail-head">
            <h1>Full Stack Developer</h1>
          <span>
           
              <p>
                I am Abhishek Soni, a versatile Full Stack Developer ready to
                bring your web projects to life. With a solid foundation in both
                front-end and back-end technologies.On the front-end side. I am
                proficient in HTML, CSS, and JavaScript, and I have a keen eye
                for clean and intuitive user interfaces.When it comes to the
                back end, I have experience with programming languages like
                JavaScript, along with frameworks like Node.js.
              </p>
           
          </span>
        </div>
        <div
          className="about-detail-main"
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <div className="about-detail-text">
            <Zoom delay={1e3} cascade damping={1e-1}>
              <ul className="about-detail-ul">
                <li className="about-detail-li">
                  <h3>Name</h3>
                  <strong>:</strong>
                  <h5>Abhishek Soni</h5>
                </li>
                <li className="about-detail-li">
                  <h3>Nationality</h3>
                  <strong>:</strong>
                  <h5>Indian</h5>
                </li>
                <li className="about-detail-li">
                  <h3>Education</h3>
                  <strong>:</strong>
                  <h5>BE - CSE</h5>
                </li>
                <li className="about-detail-li">
                  <h3>Experience </h3>
                  <strong>:</strong>
                  <h5>6 Month</h5>
                </li>
                <li className="about-detail-li">
                  <h3>Phone</h3>
                  <strong>:</strong>
                  <h5>(+91) 7869407389</h5>
                </li>
                <li className="about-detail-li">
                  <h3>Email</h3>
                  <strong>:</strong>
                  <h5> Abhishek.as663@gmail.com</h5>
                </li>
                <li className="about-detail-li">
                  <h3>Language</h3>
                  <strong>:</strong>
                  <h5>English , Hindi</h5>
                </li>
              </ul>
            </Zoom>
          </div>
          <div className="about-detail-img">
            <Box className="ab-profile-img">
              <img src={ProfileImg}/>
              </Box>    
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutDetail;
