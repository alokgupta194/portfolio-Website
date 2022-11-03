import Layout from "../hoc/Layout";
import "../home/style.scss";
export default function Home() {
  return (
    <Layout>
      <div className="container ">
        <div className="row">
          <div className="col" id="background">
            <h4 id="headingtext">Thank you for visiting my page</h4>
            <ul className="homeText" id="text">
              <li>
                Hello, I am <strong>ALOK</strong> and i am from{" "}
                <strong>KANPUR ('Leather city' of India).</strong>
              </li>
              <li>
                I completed my MCA from PSIT(Kanpur), GRADUATION from
                CSJMU(Kanpur) and schooling from SPI College(Kanpur).
              </li>
              <li>
                I'm fresher, I'm a multitasker, a good communicator, and a
                positive thinker.
              </li>
              <li>
                I am Looking to start the career as an entry-level software
                developer with a reputed firm driven by technology.
              </li>
              <li>
                <h6 id="boldText">I am Proficient in</h6>
                <h6 id="boldText " className="main">
                  {` React js, Node js, PYTHON, C, JAVA(BASIC), HTML5, CSS, JAVASCRIPT and MySQL.`}
                </h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
