// import { Fade } from "react-awesome-reveal";
import "../ThirdNav/thirdNav.css";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ThirdNav = () => {
     useEffect(() => {
       AOS.init();
     }, []);
  return (
    <>
      <div className="third-nav">
        <div className="third-nav-link">
          <ul className="third-ul">
            <li
              className="third-li"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
            >
              <button className="third-btn">
                <Link to="/">About</Link>
              </button>
            </li>
            <li
              className="third-li"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
            >
              <button className="third-btn">
                <Link to="/experience">Experience</Link>
              </button>
            </li>
            <li
              className="third-li"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
            >
              <button className="third-btn">
                <Link to="/education">Education</Link>
              </button>
            </li>
            <li
              className="third-li"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-easing="ease-in"
            >
              <button className="third-btn">
                <Link to="/skill">Skill</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ThirdNav;
