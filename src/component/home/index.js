import Layout from "../hoc/Layout";
import "../home/style.scss";
export default function Home() {
  return (
    <Layout >
      <div className="container ">
      <div className="row">
        <div className="col" id="background">
          <h4 id="headingtext">Thank you for visiting my page</h4>
          <h6 id="text">
            Hello, I am <strong>ALOK</strong> and i am from <strong>KANPUR ('Leather city' of India).</strong>
            <br></br>
            <br></br>
            I completed my MCA from PSIT(Kanpur), GRADUATION from CSJMU(Kanpur) and
            schooling from SPI College(Kanpur).
            <br></br>
            <br></br>
            I'm fresher, I'm a multitasker, a good communicator, and a positive thinker.
          </h6>
          <h6 id="text">
            I am Looking to start the career as an entry-level software
            developer with a reputed firm driven by technology.
          </h6>
          <h6 id="boldText">
          I am Proficient in   
          </h6>
          <h6 id="boldText " className="main" >
           {` React js, Node js, PYTHON, C, JAVA(BASIC), HTML5, CSS, JAVASCRIPT and MySQL.`}
          </h6>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
    </Layout>
  );
}
