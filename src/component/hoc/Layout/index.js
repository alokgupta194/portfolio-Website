import "./style.scss";

import Header from "../../header";
import Footer from "../../footer";
import Sidebar from "../../sidebar";
import { BrowserRouter as Router } from "react-router-dom";

export default function Layout({children}) {
  return (
    <Router>
    <div className="layout-wrapper">
      <Header />
      <div className="container ">
        <div className="row">
          <div className="col-8 pe-5">
            {children}
          </div>
          <div className="col-4 " id="text">
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </Router>
  );
}
