import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Service from "./Pages/Service/Service";
import { Routes, Route } from "react-router-dom";
import Menu from "./Componets/Menu/Menu";
import Portifolio from "./Pages/Portifolio/Portifolio";
import Secondservice from "./Pages/Secondservice/Secondservice";
import Portifoliosecond from "./Pages/Portifoliosecond/Portifoliosecond";
import Footer from "./Componets/Footer/Footer";
import Record from "./Pages/Contact/record";
import News from "./Pages/News/News";
import ContentDisplay from "./Pages/Contact/ContentDisplay";
import RedirectButton from "./Pages/Contact/RedirectButton";
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page on initial load
  }, []);
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/Service" element={<Service />}></Route>
        <Route path="/Portfolio" element={<Portifolio />}></Route>
        <Route path="/Portfoliodetails" element={<Portifoliosecond />}></Route>
        <Route path="/Secondservice" element={<Secondservice />}></Route>
        <Route path="/record" element={<Record />}></Route>
        <Route path="/Announcements" element={<News />}></Route>
        <Route path="/content" element={<ContentDisplay />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
