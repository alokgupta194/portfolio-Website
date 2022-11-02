import "../header/style.scss";
import Typical from "react-typical";
import { Link } from "react-router-dom";
import {useState} from "react"

export default function Header({pageName="home"}) { 
  let [showMenu,setShowMenu]=useState(false);
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg  navbar-dark ">
          <div className="container-fluid">
            <div className="dot"></div>
            <Link className="navbar-brand me-auto" to="/">
              Alok Gupta
            </Link>
            <button
            onClick={() => {
              setShowMenu((prevState) => !prevState);
            }}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${showMenu && "show"}`}>
              <ul className=" navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item ">
                  <a
                    href="https://drive.google.com/file/d/1i334-oBUweohtx2KmI7taDJVjbFjdlD3/view?usp=share_link"
                    target="blank"
                    className="resume"
                  >
                    Download Resume
                  </a>
                </li>
                <li className="nav-item ">
                  <Link
                    className={`menu nav-link ${pageName==="home" && "active"}`}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item ">
                  <Link className={`menu nav-link ${pageName==="about" && "active"}`} to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className={`menu nav-link ${pageName==="contact" && "active"}`} to="/contact">
                    Contact Me
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link className={`menu nav-link ${pageName==="details" && "active"}`} to="/details">
                    Experience
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div classNameName="typical">
        <h4
          style={{
            "text-align": "center",
            color: "white",
            "background-color": "rgba(0,0,0,0.8)",
            "font-family": "Arial, sans-serif",
            "font-weight": "750",
            "font-size": "25px",
          }}
        >
          Hello, I am
          <Typical
            steps={[
              "ALOK GUPTA ...",
              6000,
              "Fullstack Software Developer in MERN",
              8000,
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </h4>
      </div>
    </>
  );
}
