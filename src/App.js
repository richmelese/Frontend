
import './App.css';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Navmenu from"./pages/Navmenu";
import About from'./pages/About';
import ContactUs from'./pages/ContactUs';
import Work from'./pages/Work';
import Pricing from'./pages/Pricing';

import Home from './pages/Home';
import Footer from'./Components/Footer';
import Homeapp from './Components/Homapp';
import PortifolioSingle from './pages/PortifolioSingle';
import Team from './pages/Team';
import Accordion from './pages/Accordion';
import { Routes, Route, Form } from 'react-router-dom';
// import'../stayle/main.css';
const App=()=> {
  return (
    <>
 
    <div className="container1">
    
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/About" element={<About />} />
       <Route path="/ContactUs" element={<ContactUs />} />
       <Route path="/Work" element={<work />} />
       <Route path="/Pricing" element={<Pricing/>} />
       <Route path="/PortifolioSingle"element={<PortifolioSingle/>}/>
       <Route path="/Team"element={<Team/>}/>
       {/* <Route path="*" element={<NoMatch />} /> */}
    </Routes>
    </div>
    <div className="App">
     {/* <Navbar/> */}
     {/* <Footer/> */}
   
    </div>
    </>
  );
}

export default App;
