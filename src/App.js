import React from "react";
import { BrowserRouter as Router, Route, Routes }  from "react-router-dom";
import About from "./pages/About";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Hosting from "./pages/Hosting";

const App = () => {
  return (
    <Router>
      <Routes>

      <Route path="/" element={<Home />}/>
      {/* <Route path="/home" element={<Home />}/> */}
      <Route path="/about" element={<About />}/>
      
      <Route path="/host/:id" element={<Hosting />}/>
      <Route path="*" element={<Error />}/>
      <Route path="/404" element={<Error />}/>

     </Routes>
    </Router>
  );
};

export default App;
