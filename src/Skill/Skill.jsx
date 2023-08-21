import { Box, Grid } from "@mui/material";
import "../Skill/Skill.css";
import HtmlImg from "/src/assets/Skill image/html-5.png";
import CssImg from "/src/assets/Skill image/css.png";
import JSImg from "/src/assets/Skill image/js.png";
import BootImg from "/src/assets/Skill image/bootstrap.png";
import TailImg from "/src/assets/Skill image/TailWind.png";
import MatImg from "/src/assets/Skill image/Material.png";
import RctImg from "/src/assets/Skill image/atom.png";
import RdImg from "/src/assets/Skill image/Redux.png";
import MoDImg from "/src/assets/Skill image/MongoDB.png";
import NodImg from "/src/assets/Skill image/nodejs.png";
import ExpImg from "/src/assets/Skill image/Expr.png";
import TxImg from "/src/assets/Skill image/typescript.png";
import GtImg from "/src/assets/Skill image/github2.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Skill = () => {
    useEffect(() => {
      AOS.init();
    }, []);
  return (
    <>
      <Grid
        item
        md={2}
        sm={6}
        xs={12}
        className="skill-detail"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Box className="Skill-head">
          <img className="skill-img" src={HtmlImg} />
          <Box className="skill-h1">
            <h3>Html</h3>
            <Box className="skill-para">
              <p>
                HTML, or Hypertext Markup Language, is the foundation of the
                web. With HTML, you can define the structure of your web page
                using tags, such as headings, paragraphs, lists, and links. and
                other media elements. HTML is an essential skill for web
                developers and a fundamental language for building engaging and
                interactive websites.
              </p>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        md={2}
        sm={6}
        xs={12}
        className="skill-detail"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Box className="Skill-head">
          <img className="skill-img" src={CssImg} />
          <Box className="skill-h1">
            <h3>Css</h3>
            <Box className="skill-para">
              <p>
                CSS, or Cascading Style Sheets, is a powerful language used for
                styling and visually enhancing web pages.CSS allows for
                customization and creativity, enabling you to transform a basic
                HTML structure into an aesthetically pleasing and
                professional-looking website. It plays a crucial role in web
                design and is a fundamental skill for front-end developers.
              </p>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        md={2}
        sm={6}
        xs={12}
        className="skill-detail"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Box className="Skill-head">
          <img className="skill-img" src={JSImg} />
          <Box className="skill-h1">
            <h3>Java Script</h3>
            <Box className="skill-para">
              <p>
                JavaScript is a versatile programming language that brings
                interactivity and dynamism to web pages. With JavaScript, you
                can enhance user experience by creating dynamic content,
                handling user interactions, and manipulating data in real-time
                With its extensive libraries and frameworks, JavaScript empowers
                developers to create rich, interactive web applications and
                responsive websites.
              </p>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        md={2}
        sm={6}
        xs={12}
        className="skill-detail"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Box className="Skill-head">
          <img className="skill-img" src={BootImg} />
          <Box className="skill-h1">
            <h3>BootStrap</h3>
            <Box className="skill-para">
              <p>
                Bootstrap is a popular front-end framework that simplifies web
                development and enables the creation of responsive and visually
                appealing websites.Bootstrap's extensive library of JavaScript
                plugins enhances interactivity and functionality, providing
                features like carousels, modals, tooltips, and much
                more.Additionally, Bootstrap's documentation is comprehensive
                and beginner-friendly, making it accessible to developers of all
                skill levels.
              </p>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        md={2}
        sm={6}
        xs={12}
        className="skill-detail"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Box className="Skill-head">
          <img className="skill-img" src={TailImg} />
          <Box className="skill-h1">
            <h3>TailWind Css</h3>
            <Box className="skill-para">
              <p>
                Tailwind CSS is a utility-first CSS framework that offers a
                highly flexible and efficient approach to building web
                interfaces.With Tailwind CSS, you have granular control over
                every aspect of your design. You can easily adjust margins,
                padding, typography, colors, and more by simply applying
                appropriate utility classes.Tailwind CSS also includes a
                responsive design system, allowing you to easily create adaptive
                layouts for different screen sizes. One of the major advantages
                of Tailwind CSS is its flexibility.
              </p>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        md={2}
        sm={6}
        xs={12}
        className="skill-detail"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Box className="Skill-head">
          <img className="skill-img" src={MatImg} />
          <Box className="skill-h1">
            <h3>Material Ui</h3>
            <Box className="skill-para">
              <p>
                Material-UI is a popular React UI component library that
                implements Google's Material Design principles.With Material-UI,
                you can leverage a wide range of ready-to-use components, such
                as buttons, cards, menus, forms, and more, to build consistent
                and intuitive user experiences.Material-UI also offers a theming
                system that allows you to customize the visual style of your
                application to align with your branding or design requirements.
              </p>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        md={2}
        sm={6}
        xs={12}
        className="skill-detail"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Box className="Skill-head">
          <img className="skill-img" src={RctImg} />
          <Box className="skill-h1">
            <h3>React</h3>
            <Box className="skill-para">
              <p>
                React.js is a popular JavaScript library used for building
                dynamic and interactive user interfaces.With React.js, you can
                break down your application into small, modular components that
                are easier to understand, test, and maintain. Each component
                encapsulates its own logic and rendering, promoting reusability
                and separation of concerns.One of the key features of React.js
                is its virtual DOM (Document Object Model)
                implementation.Furthermore, React.js has a vibrant ecosystem
                with a wide range of community-supported libraries and tools.
              </p>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        md={2}
        sm={6}
        xs={12}
        className="skill-detail"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Box className="Skill-head">
          <img className="skill-img" src={RdImg} />
          <Box className="skill-h1">
            <h3>Redux</h3>
            <Box className="skill-para">
              <p>
                Redux is a state management library for JavaScript applications,
                commonly used with React.js but also compatible with other
                frameworks.The core concept of Redux is its single source of
                truth, represented by a centralized store.The store holds the
                entire application state, which can only be modified through
                dispatching actions.Reducers, pure functions, specify how the
                state should be updated based on dispatched actions. They take
                the current state and an action as inputs, returning a new state
                object.
              </p>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        md={2}
        sm={6}
        xs={12}
        className="skill-detail"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Box className="Skill-head">
          <img className="skill-img" src={MoDImg} />
          <Box className="skill-h1">
            <h3>MongoDB</h3>
            <Box className="skill-para">
              <p>
                MongoDB is a popular NoSQL database management system that
                offers flexibility, scalability, and high-performance storage
                for modern applications.One of the key features of MongoDB is
                its document-oriented data model. Instead of using traditional
                tables and rows, MongoDB organizes data into flexible and
                self-contained documents in the BSON (Binary JSON)
                format.MongoDB's flexible schema enables developers to iterate
                and adapt their data models quickly.Another advantage of MongoDB
                is its scalability.
              </p>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        md={2}
        sm={6}
        xs={12}
        className="skill-detail"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Box className="Skill-head">
          <img className="skill-img" src={ExpImg} />
          <Box className="skill-h1">
            <h3>Express Js</h3>
            <Box className="skill-para">
              <p>
                Express.js is a fast and minimalist web application framework
                for Node.js. With Express.js, you can quickly set up routes,
                handle HTTP requests and responses, and define middleware
                functions to perform various tasks. It simplifies the process of
                building RESTful APIs, handling routing, and managing HTTP
                methods like GET, POST, PUT, and DELETE.Express.js is known for
                its flexibility and extensibility.
              </p>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        md={2}
        sm={6}
        xs={12}
        className="skill-detail"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Box className="Skill-head">
          <img className="skill-img" src={NodImg} />
          <Box className="skill-h1">
            <h3>Node Js</h3>
            <Box className="skill-para">
              <p>
                Node.js is a powerful JavaScript runtime environment that allows
                developers to build scalable and high-performance applications
                on the server-side.One of the key advantages of Node.js is its
                ability to use JavaScript both on the client and server sides,
                promoting code reuse and enabling full-stack development.Node.js
                excels at building real-time applications, web servers, APIs,
                microservices, and streaming applications.
              </p>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        md={2}
        sm={6}
        xs={12}
        className="skill-detail"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Box className="Skill-head">
          <img className="skill-img" src={TxImg} />
          <Box className="skill-h1">
            <h3>TypeScript</h3>
            <Box className="skill-para">
              <p>
                TypeScript is a strongly typed superset of JavaScript that adds
                static typing to the language.One of the key benefits of
                TypeScript is its type system. It allows you to define explicit
                types for variables, function parameters, return values, and
                object properties.TypeScript supports gradual adoption, meaning
                you can start incorporating it into existing JavaScript projects
                without having to rewrite everything. It is fully compatible
                with JavaScript
              </p>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        md={2}
        sm={6}
        xs={12}
        className="skill-detail"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Box className="Skill-head">
          <img className="skill-img" src={GtImg} />
          <Box className="skill-h1">
            <h3>Git Hub</h3>
            <Box className="skill-para">
              <p>
                GitHub is a widely used web-based platform for version control
                and collaboration.One of the key features of GitHub is its
                version control system, based on Git.Git allows developers to
                track changes made to their codebase over time, creating a
                history of commits.Furthermore, GitHub supports continuous
                integration and deployment (CI/CD) workflows. It integrates with
                popular CI/CD tools and services,allowing developers to automate
                the building, testing, and deployment of their applications.
              </p>
            </Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Skill;
