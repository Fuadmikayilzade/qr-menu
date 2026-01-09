// import React from "react";
// import { Navigate } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Luxbar from './Luxbar/Luxbar';
// import Home from "./components/Home";
// import About from "./components/About";
// import Services from "./components/Services";
// import Contact from "./components/Contact";
// import Social from './social media/social'
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//     <Router basename="/qr-menu">
//       <Luxbar />
//       <Routes>
//         <Route exact path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         {/* <Route path="/projects" element={<Projects />} /> */}
//         <Route path="/contact" element={<Contact />} />
//         {/* Yanlış yola daxil olunarsa, Home səhifəsinə yönləndir */}
//         <Route path="*" element={<Navigate to="/" />} />

//       </Routes>
//       <Social />
//     </Router>
//     </div>
//   );
// }

// export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Luxbar from "./Luxbar/Luxbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Social from "./social media/social";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Luxbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          {/* Yanlış route olarsa Home-a yönləndir */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Social />
      </Router>
    </div>
  );
}

export default App;
