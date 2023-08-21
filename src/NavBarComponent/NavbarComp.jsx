
import { Link } from "react-router-dom";
import ToogleBar from "../DarkMode/ToogleBar";
import "../NavBarComponent/Navbar.css";
import { HashLink as Links } from "react-router-hash-link";
const NavbarComp = () => {
  return (
    <>
      <section className="main-nav">
        <aside className="first-nav">
          <span className="first-logo">
            <h2>Abhishek Soni</h2>
            <p>Full Stack Developer</p>
          </span>
          <ToogleBar />
          <nav className="first-nav-link">
            <Link to="/">Home</Link>
            <Links scroll={(el) => el.scrollIntoView({ behavior: 'smooth'})} to="#about">About</Links>
            <Links   scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })} to="#project">Projects</Links>
            <Links  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
              to="#contact">Contacts</Links>
          </nav>
        </aside>

      </section>
    </>
  );
};

export default NavbarComp;
