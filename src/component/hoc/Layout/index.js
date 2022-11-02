import "./style.scss";

import Header from "../../header";
import Footer from "../../footer";
import Sidebar from "../../sidebar";

export default function Layout({ children, hideImage = false  ,pageName="home"}) {
  return (
    <div className="layout-wrapper">
      <Header pageName={pageName}/>
      <div className="container">
        <div className="row">
          <div className={`${hideImage ? "col-md-12" : "col-md-9"}`}>{children}</div>
          <div className="col-md-3 ">
            {hideImage ? 
              <Sidebar />              
             : 
             <img
                src={require("../../../asset/images/alok.png")}
                alt="myImg"
                className="myImg"
              ></img>
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
