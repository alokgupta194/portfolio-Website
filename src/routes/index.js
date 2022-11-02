import Pages from "../container/AllPages";
import { Routes,Route } from "react-router-dom";

const { Home, About, Contact, Details } = Pages;

export default function routes() {
  return (
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/details" element={<Details/>}/>
        </Routes>
  );
}
