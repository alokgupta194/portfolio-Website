import "./style.scss";
import Layout from "../hoc/Layout"
export default function Home() {
  return (
    <Layout pageName="details" hideImage="false">
      <div className="container ">
      <div className="row">
        <div className="col" id="background">
          
{/* work experience */}

          <h3 className="centerHeadings">Current Work</h3>
          <h5 id="sideHeading">
            • Graduate Trainee Engineer || Full Stack Developer(MERN)
          </h5>
          <h6 className="subSideHeading">
            INADEV India || Full-time Jun 2022 - Present
          </h6>
          <h6 id="text">Learned Key skills :</h6>
          <h6 id="text">
            DevOps · Amazon Web Services (AWS) · SQL · MySQL · Node.js
            ·React.js.
          </h6>
{/* Internships */}

          <h4 className="centerHeadings">Internships</h4>
{/* 1 */}
          <h5 id="sideHeading">• Software Testing-Associate</h5>
          <h6 className="subSideHeading">
            The Entrepreneurship Network Oct 2021 - Jan 2022
          </h6>
          <h6 id="text">Learned Key skills :</h6>
          <h6 id="text">
            • Learn Various Types Of Testing Methods. <br></br>• In manual
            testing, I learn QA,QC,SDLC and Agile Model.<br></br>• In SOFTWARE
            TESTING METHODOLOGIES i learn Dynamic Testing, White Box Testing,
            Black Box Testing, Black Box Testing, Unit Testing, STLC( Software
            Testing Life Cycle), Types of Reviews Inspections & Audits
            Walkthroughs etc.
          </h6>
{/* 2 */}
          <h5 id="sideHeading">• Subject Matter Expert</h5>
          <h6 className="subSideHeading">
            XcitEducation Worldwide || May 2022 - Jul 2022
          </h6>
          <h6 id="text">Learned Key skills :</h6>
          <h6 id="text">
            • Learn Various Types Of Testing Methods.<br></br>• In manual testing i
            learn QA,QC,SDLC and Agile Model .<br></br> • In SOFTWARE TESTING
            METHODOLOGIES i learn Dynamic Testing, White Box Testing, Black Box
            Testing, Black Box Testing, Unit Testing, STLC( Software Testing
            Life Cycle), Types of Reviews Inspections & Audits Walkthroughs etc.
          </h6>
{/* 3 */}
          <h5 id="sideHeading">• Survey Programmer</h5>
          <h6 className="subSideHeading">
            NS Matrix Services Pvt. Ltd. Feb 2022 - Apr 2022
          </h6>
          <h6 id="text">Learned Key skills :</h6>
          <h6 id="text">
            • Learn Various Types Of online surveys.<br></br> • Review survey
            questionnaires and formulate recommendations to ensure efficient
            programming and optimal data layout.
          </h6>
{/* 4 */}
          <h5 id="sideHeading">• Backend Developer</h5>
          <h6 className="subSideHeading">
            Youth India Foundation || july 2021 - july 2022
          </h6>
          <h6 id="text">Learned Key skills :</h6>
          <h6 id="text">
            • Building and maintaining web applications using React js and node
            js.<br></br> • Assessing the efficiency and speed of current applications.
          </h6>
{/* Projects */}

          <h4 className="centerHeadings">
            PROJECTS
          </h4>
{/* 1 */}
          <h5 id="sideHeading">
            • AI Virtual Mouse| Jan. 1, 2022 -May. 22, 2022 | PSIT
          </h5>
          <h6 id="text">
            this application, The main objective of the proposed system is to
            perform computer mouse cursor functions using a web camera or a
            built-in Camera in the computer instead of using a traditional mouse
            device. USED TECHNOLOGY- A.I and python.
          </h6>
{/* 2 */}
          <h5 id="sideHeading">
            • Face Mask Detection|Aug. 1, 2021 - Dec. 22, 2021 |PSIT
          </h5>
          <h6 id="text">
            This project aims to detect face masks in current picture of Covid19
            using Machine Learning and Object Detection. The main objective of
            the face mask detection model is to detect the face of individuals
            and conclude whether they are wearing masks or not at that
            particular moment when they are captured in the image. USED
            TECHNOLOGY- A.I and python.
          </h6>
{/* 3 */}
          <h5 id="sideHeading">
            • Tic Toc Toe Game (web development) | 2021 | Self
          </h5>
          <h6 id="text">
            Tic-tac-toe is a game in which two players take turns in drawing
            either an ` O' or an ` X' in one square of a grid consisting of nine
            squares. The winner is the first player to get three of the same
            symbols in a row. Used technology: React And Javascrit.
          </h6>
        </div>
      </div>
    </div>
    </Layout>
  );
}
