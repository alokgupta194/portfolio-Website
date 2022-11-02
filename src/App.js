import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import {BrowserRouter} from "react-router-dom"
import Routes from "./routes";

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
      <ToastContainer />
    </BrowserRouter>
  );
}
