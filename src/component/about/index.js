import "../home/style.scss";
import Layout from"../hoc/Layout"
export default function Home() {
  return (
    <Layout  hideImage = "false" pageName="about">
      <div className="container ">
      <div className="row">
        <div className="col" id="background">
          <h3 id="headingtext">ACHIEVEMENTS AND CERTIFICATIONS</h3>
          <ul id="text">
            <li>Achieved 5 star on Hackerrank in Python.</li>
            <li>Online Certification in Complete Sql and database (UDEMY)</li>
            <li>Solved over 100+ Problems of Data Structures and Algorithm.</li>
            <li>Secured 3rd position in National Cyber Olympiad in school
            competiton.</li>
            <li>Offline Certification in Course on computer concept(Nielit)</li>
            <li>Online Certification in Python. (UDEMY)</li>
          </ul>
        </div>
        <div  id="background" style={{color:"white"}} >
          <h3 id="headingtext">INTEREST</h3>
          <h4 id="sideHeading">Subject</h4>
          <ul>
            <li>Data Structure & Algorithms</li>
            <li>DBMS</li>
            <li>Artificial intelligence</li>
          </ul>
          <h4 id="sideHeading">Others</h4>
          <ul>
            <li>Social Welfare</li>
            <li>Traveling</li>
          </ul>        
        </div>
      </div>
    </div>
    </Layout>
  );
}
