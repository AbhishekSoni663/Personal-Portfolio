
import ToogleBar from "../DarkMode/ToogleBar";
import "../NavBarComponent/Navbar.css";
import { Link } from "react-router-dom";
import closeImg from "../assets/Hero-img/close.png"
import menuImg from "../assets/Hero-img/menu.png"
import offLogo from "../assets/Footer img/abhisheklogo.png"
import { HashLink as Links } from "react-router-hash-link";
const Secondnav = () => {
    return (
        <div>
            <section className="second-nav">
                <nav className="navbar">
                    <div className="container-fluid">
                        <Link className="navbar-Logo" style={{ width: "auto", padding: "10px" }} href="#">
                            <img className="sec-navbar-logo" src={offLogo} width={"80px"} />
                        </Link>
                        <div className="second-link">
                            <ul className="sec-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Links className="nav-link" smooth to="#about">
                                        About
                                    </Links>
                                </li>
                                <li className="nav-item">
                                    <Links className="nav-link" smooth to="#project">
                                        Projects
                                    </Links>
                                </li>
                                <li className="nav-item">
                                    <Links className="nav-link" smooth to="#contact">
                                        Contacts
                                    </Links>
                                </li>
                            </ul>
                        </div>
                        <ToogleBar />
                        <button
                            className="navbar-toggler tog"

                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasNavbar"
                            aria-controls="offcanvasNavbar"
                            aria-label="Toggle navigation"
                        >
                            <img className="sec-navbar-menu1" src={menuImg} />
                        </button>
                        <div
                            className="offcanvas offcanvas-end"
                            tabIndex="-1"
                            id="offcanvasNavbar"

                        >
                            <div className="offcanvas-header">
                                <h5 className="title" id="offcanvasNavbarLabel">
                                    <img src={offLogo} width={"100px"} />
                                </h5>
                                <button
                                    // className="btn-close"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                ><img src={closeImg} /></button>
                            </div>

                            <div className="offcanvas-body second-nav-body">
                                <ul className="navbar-nav-menu ">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Links className="nav-link"  to="#about">
                                            About
                                        </Links>
                                    </li>
                                    <li className="nav-item">
                                        <Links className="nav-link"  to="#project">
                                            Projects
                                        </Links>
                                    </li>
                                    <li className="nav-item">
                                        <Links className="nav-link"  to="#contact">
                                            Contacts
                                        </Links>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </section>
        </div>
    );
};

export default Secondnav;
