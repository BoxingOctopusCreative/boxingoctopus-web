import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './Components/Layout';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Collective from "./Pages/Collective";
import FourOhFour from "./Pages/404";
import Contact from './Pages/Contact';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="collective" element={<Collective />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<FourOhFour />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};