import { Button } from "@mui/material";
import "../Pages/About.css";
import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
// import { Fade, Zoom } from "react-awesome-reveal";

// import { Progress } from "antd";

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div
        className="about-home"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        <h1 className="ab-h1">Projects Statistics</h1>
        <section className="about-main">
          <div className="about-main2">
            <div className="about-main2-head">
              <h2 className="about-p1">Abhishek Soni</h2>
              <p className="about-p2">Full Stack Developer Based In India</p>
            </div>
            <div className="stat">
              <div className="stat-box">
                <h2>Html & Css Projects</h2>
                <CountUp end={15} redraw={true}>
                  {({ countUpRef, start }) => (
                    <ReactVisibilitySensor onChange={start} delayedCall>
                      <span
                        style={{
                          fontSize: "1.2em",
                          fontFamily: "Nanum Gothic', sans-serif",
                        }}
                        ref={countUpRef}
                      />
                    </ReactVisibilitySensor>
                  )}
                </CountUp>
              </div>

              <div className="stat-box">
                <h2>JavaScript Projects</h2>
                <CountUp end={9} redraw={true}>
                  {({ countUpRef, start }) => (
                    <ReactVisibilitySensor onChange={start} delayedCall>
                      <span
                        style={{
                          fontSize: "1.2em",
                          fontFamily: "Nanum Gothic', sans-serif",
                        }}
                        ref={countUpRef}
                      />
                    </ReactVisibilitySensor>
                  )}
                </CountUp>
              </div>

              <div className="stat-box">
                <h2>React Projects</h2>
                <CountUp end={7} redraw={true}>
                  {({ countUpRef, start }) => (
                    <ReactVisibilitySensor onChange={start} delayedCall>
                      <span
                        style={{
                          fontSize: "1.2em",
                          fontFamily: "sans-serif",
                        }}
                        ref={countUpRef}
                      />
                    </ReactVisibilitySensor>
                  )}
                </CountUp>
              </div>

              <div className="stat-box">
                <h2>Redux Projects</h2>
                <CountUp end={1} redraw={true}>
                  {({ countUpRef, start }) => (
                    <ReactVisibilitySensor onChange={start} delayedCall>
                      <span
                        style={{
                          fontSize: "1.2em",
                          fontFamily: "Nanum Gothic', sans-serif",
                        }}
                        ref={countUpRef}
                      />
                    </ReactVisibilitySensor>
                  )}
                </CountUp>
              </div>
            </div>
            <div className="button">
              <Button>
                <a
                  href="src/assets/Cv/AbhishekFrontEndFresher Resume.pdf"
                  download
                  className="anchor"
                >
                  <span>Download CV</span>
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default About;
