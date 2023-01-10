import React from "react";
import About from "./page/About";
import Contact from "./page/Contact";
import Home from "./page/Home";
import Services from "./page/Services";
import Error from "./page/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Admin from "./page/Admin";
import Nest from "./page/Nest";
import One from "./page/nest/One";
import Three from "./page/nest/Three";
import Two from "./page/nest/Two";

const App = () => {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact/:id" element={<Contact />} />
          <Route path="*" element={<Error />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/nest" element={<Nest />}>
            <Route index element={<One />} />
            <Route path="two" element={<Two />} />
            <Route path="three" element={<Three />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
