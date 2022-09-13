import "./style.scss";
import Typical from "react-typical";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg  navbar-dark ">
          <div class="container-fluid">
            <a class="navbar-brand me-auto" href="#">
              Alok Gupta
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/contact">
                    Contact Me
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/details">
                    Experience
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="typical">
          <h4 className="text" style={{"text-align": "center"}}>
          Hello, I am
            <Typical
              steps={[
                "ALOK GUPTA!!",
                8000,
                "Fullstack Software Developer.",
                11000,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </h4>
      </div>
    </>
  );
}
