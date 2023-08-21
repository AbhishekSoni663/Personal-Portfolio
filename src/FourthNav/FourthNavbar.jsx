import { Link } from "react-router-dom";
import "../FourthNav/Fourth.css";
// import { Fade, Zoom } from "react-awesome-reveal";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const FourthNavbar = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="fourth-nav-ul">
        <ul className="fourth-ul">
          <li
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
          >
            <Link to="/">Html & Css Projects</Link>
          </li>
          <li
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
          >
            <Link to="/javascript">JavaScript Projects</Link>
          </li>

          <li
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in"
          >
            <Link to="/reactpro">React Projects</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FourthNavbar;
