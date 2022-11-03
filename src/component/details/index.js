import "./style.scss";
import Layout from "../hoc/Layout";
export default function Home() {
  return (
    <Layout pageName="details" hideImage="false">
      <div className="container ">
        <div className="row">
          <div className="col" id="background">
            {/* work experience */}
            <h3 className="centerHeadings">Current Work</h3>
            <ul>
              <h5 id="sideHeading">
                <li>Graduate Trainee Engineer || Full Stack Developer(MERN)</li>
              </h5>
              <h6 className="subSideHeading">
                INADEV India || Full-time Jun 2022 - Present
              </h6>
              <h6 className="innerHeading">Learned Key skills :</h6>
              <h6 id="text">
              • DevOps · Amazon Web Services (AWS) · SQL · MySQL · Node.js
                ·React.js.
              </h6>
              {/* Internships */}

              <h4 className="centerHeadings">Internships</h4>
              {/* 1 */}
              <h5 id="sideHeading">
                <li>Software Testing-Associate</li>
              </h5>
              <h6 className="subSideHeading">
                The Entrepreneurship Network Oct 2021 - Jan 2022
              </h6>
              <h6 className="innerHeading">Learned Key skills :</h6>
              <h6 id="text">
                <ul>
                  <li>Learn Various Types Of Testing Methods.</li>
                  <li>In manual testing, I learn QA,QC,SDLC and Agile Model.</li>
                  <li>In SOFTWARE TESTING METHODOLOGIES i learn Dynamic Testing, White Box Testing, Black Box Testing, Black Box Testing, Unit Testing, STLC( Software Testing Life Cycle), Types of Reviews Inspections & Audits Walkthroughs etc.</li>
                </ul>
              </h6>
              {/* 2 */}
              <h5 id="sideHeading">
                <li>Subject Matter Expert</li>
              </h5>
              <h6 className="subSideHeading">
                XcitEducation Worldwide || May 2022 - Jul 2022
              </h6>
              <h6 className="innerHeading">Learned Key skills :</h6>
              <h6 id="text">
                <ul>
                  <li>Subject Experts deliver high-quality lessons and self-learning materials in various formats such as lectures, concept notes, assessments, tests & practice questions, etc.</li>
                  <li>Create data through brainstorming with the team.</li>
                  <li>Create, update & review supplementary content materials like short notes, assignments, tests, quizzes, Mock test series etc.</li>
                </ul>
              </h6>
              {/* 3 */}
              <h5 id="sideHeading">
                <li>Survey Programmer</li>
              </h5>
              <h6 className="subSideHeading">
                NS Matrix Services Pvt. Ltd. Feb 2022 - Apr 2022
              </h6>
              <h6 className="innerHeading">Learned Key skills :</h6>
              <h6 id="text">
              <ul>
                  <li>Learn Various Types Of online surveys.</li>
                  <li>Review
                survey questionnaires and formulate recommendations to ensure
                efficient programming and optimal data layout.</li>
                </ul>
              </h6>
              {/* 4 */}
              <h5 id="sideHeading">
                <li>Backend Developer</li>
              </h5>
              <h6 className="subSideHeading">
                Youth India Foundation || july 2021 - july 2022
              </h6>
              <h6 className="innerHeading">Learned Key skills :</h6>
              <h6 id="text">
              <ul>
                  <li>Building and maintaining web applications using React js and
                node js.</li>
                  <li>Assessing the efficiency and speed of
                current applications.</li>
                </ul>
              </h6>
              {/* Projects */}

              <h4 className="centerHeadings">PROJECTS</h4>
              {/* 1 */}
              <h5 id="sideHeading">
                <li>AI Virtual Mouse| Jan. 1, 2022 -May. 22, 2022 | PSIT</li>
              </h5>
              <h6 className="innerHeading">Learned Key skills :</h6>
              <h6 id="text">
                <ul>
                  <li>The main objective of the proposed system is to perform computer mouse cursor functions using a web camera or
                a built-in Camera in the computer instead of using a traditional
                mouse device.</li>
                  <li><strong>USED TECHNOLOGY :</strong>A.I and python.</li>
                </ul>
                
              </h6>
              {/* 2 */}
              <h5 id="sideHeading">
                <li>Face Mask Detection|Aug. 1, 2021 - Dec. 22, 2021 |PSIT</li>
              </h5>
              <h6 className="innerHeading">Learned Key skills :</h6>
              <h6 id="text">
              <ul>
                  <li>This project aims to detect face masks in current picture of
                Covid19 using Machine Learning and Object Detection. </li>
                  <li>The main
                objective of the face mask detection model is to detect the face
                of individuals and conclude whether they are wearing masks or
                not at that particular moment when they are captured in the
                image.</li>
                  <li> <strong>USED TECHNOLOGY :</strong> A.I and python.</li>
                </ul>

                
              </h6>
              {/* 3 */}
              <h5 id="sideHeading">
                <li>Tic Toc Toe Game (web development) | 2021 | Self</li>
              </h5>
              <h6 className="innerHeading">Learned Key skills :</h6>
              <h6 id="text">
              <ul>
                  <li>Tic-tac-toe is a game in which two players take turns in drawing
                either an ` O' or an ` X' in one square of a grid consisting of
                nine squares.</li>
                  <li>The winner is the first player to get three of the
                same symbols in a row. </li>
                  <li><strong>USED TECHNOLOGY :</strong> React And Javascrit.</li>
                </ul>
                 
              </h6>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
