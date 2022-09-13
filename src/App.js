import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Layout from "./component/hoc/Layout";
import Routes from "./routes";

export default function App() {
  return (
    <Layout>
      <Routes />
      <ToastContainer />
    </Layout>
  );
}
