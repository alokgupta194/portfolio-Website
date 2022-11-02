import "./style.scss";
import Layout from "../hoc/Layout"
export default function Home() {
  return (
    <Layout  hideImage="false" pageName="contact">
      <div className="container ">
      <div className="row">
        <div className="col" id="background">
          <h3 id="headingtext">Contact Me</h3>
          <h6>
            <a
              href="mailto:alokgupta194@gmail.com"
              style={{ "text-decoration": "none" }}
            >
              Email&nbsp;&nbsp;&nbsp;  :&nbsp;&nbsp;alokgupta194@gmail.com
            </a>
          </h6>
          <h6 className="imgLinkdin">
            <img src={require("../../asset/images/LinkedIn_icon.svg.png")} alt="LinkedIn"></img>
            <a
              href="https://www.linkedin.com/in/alok-gupta-024685196"
              target="blank"
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;View On Linkdin
            </a>
          </h6>
          <h6 className="imgGithub">
          <img src={require("../../asset/images/github.png")} alt="LinkedIn"></img>
            <a
              href="https://github.com/alokgupta194"
              target="blank"
              style={{ "text-decoration": "none" }}
            >
              :&nbsp;&nbsp;View On Github
            </a>
          </h6>
          <h6>
            <a href="tel:+91 8299494576" style={{ "text-decoration": "none" }}>
              Phone &nbsp;: &nbsp;8299494576
            </a>
          </h6>
        </div>
      </div>
    </div>
    </Layout>
  );
}
