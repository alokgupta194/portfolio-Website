import "../home/style.scss";
import Layout from"../hoc/Layout"
export default function Home() {
  return (
    <Layout  hideImage = "false" pageName="about">
      <div className="container ">
      <div className="row">
        <div className="col" id="background">
          <h3 id="headingtext">ACHIEVEMENTS AND CERTIFICATIONS</h3>
          <h6 id="text">• Achieved 5 star on Hackerrank in Python.</h6>
          <h6 id="text">• Online Certification in Complete Sql and database (UDEMY)</h6>
          <h6 id="text">• Solved over 100+ Problems of Data Structures and Algorithm.</h6>
          <h6 id="text">
            • Secured 3rd position in National Cyber Olympiad in school
            competiton.
          </h6>
          <h6 id="text">• Offline Certification in Course on computer concept(Nielit)</h6>
          <h6 id="text">• Online Certification in Python. (UDEMY)</h6>
        </div>
        <div  id="background" style={{color:"white"}} >
          <h3 id="headingtext">INTEREST</h3>
          <h4 id="sideHeading">Subject</h4>
          <h6 id="text">• Data Structure & Algorithms</h6>
          <h6 id="text">• DBMS</h6>
          <h6 id="text">• Artificial intelligence</h6>
          <h4 id="sideHeading">Others</h4>
          <h6 id="text">• Social Welfare</h6>
          <h6 id="text">• Traveling</h6>          
        </div>
      </div>
    </div>
    </Layout>
  );
}
