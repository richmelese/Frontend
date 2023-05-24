import React from "react";
import Navbar from "../Components/Navbar";
import { Homemain5 } from "./Homemain5";
import { Footer } from "../Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Filter from "../pages/Filter";
import Navmenu from"../pages/Navmenu";
import Fade from "react-reveal/Fade";
import "../stayle/work.css";
const Work=()=>{
    return(
<div>
<Navmenu/>
<Fade bottom duration={1500}>
<div>
    <p className="workheader1">Our Work</p>
</div>
<div><p className="workheader2"> We also have special expertise in custom software development – providing 
specialized products, IT services and custom end to end solutions to our enterprise 
customers. We gain competitive advantage from these distinctive capabilities and 
have developed the ability to implement and manage complex IT systems in changing 
times with greater effectiveness than many competitors..</p></div>
<div className="work-img text-center">
  <div><img src={require("../image/image1.png")}/> </div>
 
    </div>
    </Fade>
 
    {/* <div className="grid_home__content">
         
           <div className='grid__item text-center'><p className="text-center">We Work to Craft Solid Products  </p>
           <p>& <span className='project'>Project</span> For You</p>
           <a href="" className="btn-filter">All works </a><a href="" className="btn-filter">Web design </a><a href="" className="btn-filter">App desing </a><a href="" className="btn-filter">Web App </a>
           </div> 
    <div className="home-img1"> <img src={require("../image/image11.png")} /><img src={require("../image/blue.png")} className='blue'/><p className="web1">Website desing</p>
    <p className="web-design1">web desing</p></div>
    <div className="home-img2"><img src={require("../image/image22.png")} /><p className="web2">Branding Desing</p>
    <p className="web-design2">web desing</p></div>
    <div className="home-img3"><img src={require("../image/image33.png")} /><p className="web3">Desing Strategy</p>
    <p className="web-design3">web desing</p></div>
    <div className="home-img4"><img src={require("../image/image44.png")} /> <p className="web4">Different Website</p>
    <p className="web-design4">web desing</p>
  </div>
    <div className="home-img5"><img src={require("../image/image55.png")} /><p className="web5">Build Website</p>
    <p className="web-design5">web desing</p></div>
    <div className="whitecircle"><p className="txt ">See All Project
    <img src={require("../image/Icon.png")} /></p>
    </div>
    </div> */}
    <Fade bottom duration={1500}>
    <Filter/>
    </Fade>
    <Fade bottom duration={1500}>
   <Footer/>
   </Fade>
</div>

    );
}
export default Work;