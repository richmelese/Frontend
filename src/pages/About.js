import React from "react";
import Navbar from "../Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Homemain7} from "./Homemain7";
import '../stayle/About.css';
import { Footer } from "../Components/Footer";
import Appacordino from "./Appacordino";
import{Team1} from "./Team1"
import Filter from "../pages/Filter";
import Fade from "react-reveal/Fade";
import Navmenu from"../pages/Navmenu";


const About = ()=> {
    return(
       
        <div>
            <Navmenu/>
       
            <Fade bottom duration={1500}>
            <div className="Abttext text-center">
            <p>About Us</p>
            </div>
            <div className="Abttext1 ">
                <p> Tewos always look at the things from the customer perspective, 
but also from customer’s customer perspective to grasp their real business need for the 
IT solutions they deliveres.</p>
                </div>
                {/* <a href="" className="btn-about">Call now <img src={require("../image/Icon.png")}/></a> */}
               <a href="/Contactus"> <button class="button-abt"><span>Call now<img src={require("../image/Icon.png")}/> </span></button></a>
               </Fade>
               <Fade bottom duration={1500}>
      <div className="grid__container">
                   
        <div className="About__text">
           <p className="whyus">why <span  className="colorus">Us</span></p>
            <p className="texttewos"> Tewos Solutions is a company which intends to be in front of the client’s needs, deeply 
understanding clients’ business and delivering and optimizing IT solutions from the 
initial phase of scoping the requirements, up to the final delivery, maintenance and 
continuous upgrade. Tewos always look at the things from the customer perspective, 
but also from customer’s customer perspective to grasp their real business need for the 
IT solutions they deliver</p>
<img src={require("../image/image55.png")}/>
                    </div>
                    <div className="newbox">
        <div className="content1"><p className="what">OUR VISION</p>
            <p>Established to deliver leading edge secure technologies, technical solutions and 
consulting services to businesses, organizations and governmental bodies, Tewos 
Solutions was founded with the vision to enable<b> “secure access to any service, data 
and information anytime, anywhere “,</b> providing its customers and business partners 
with robust, extensible and customizable security-enhanced solutions for information 
sharing, data exchange, services invocation and communication</p></div>
<div className="content2"> <p className="whatt">OUR MISSION  </p>
<p> •To deliver effective, efficient, reliable, accessible and secure Information 
                                                  technology solutions, products, and services that are relevant to the Ethiopian.</p>
                                                 environment and fully support the country's needs. 
                                                 <p>• To become a high impact provider of IT products and services in Africa.</p>
                                                 <p>• Providing our employees with meaningful work and advancement 
                                                 opportunities.</p>                                                            
                                                 </div>
                                                 {/* <div className="grid-abtimg">  */}
        <div className="content3"> <p className="whattt">OUR VALUES </p>
            <p> • Commitment to Quality service</p>
              <p>•Innovation</p> 
              <p>• Timely Delivery</p> 
              <p>•Empowerment & Teamwork
                  </p> 
                  <p>•Growth and Continuous Learning
                  </p> 
              {/* </div> */}
        </div>
                                                                  
            </div>
                </div>
                </Fade>
                <Fade bottom duration={1500}>
                <div className="grid-numbersabt">
  <div className="no1"> 13<sup>+</sup> 
  <p className=' lorem'>Software development</p></div>
  <div className="no2">110
   <p  className='lorem'>Applications management</p></div>
  <div className="no3">99<sup>%</sup>
  <p  className='lorem'>Quality Assurance</p></div>
  <div className="no4"> 100<sup>+</sup>
  <p  className='lorem'>Applications Development</p></div>
  </div>
  </Fade> 
          
             <div className="about__icon">
             <div className='grid__newicons text-center'><p className="text-center">The Core Values that drive  </p>
           <p>& <span className='project'>Everything</span> we do</p>
           {/* <a href="" className="btn-filter">All works </a><a href="" className="btn-filter">Web design </a><a href="" className="btn-filter">App desing </a><a href="" className="btn-filter">Web App </a> */}
           </div> <Fade bottom duration={1500}>
                <div className=" text-center">
                <img src={require("../image/Vector2.png")}/>
                <p className="title"> Creativity </p>
                <p className="main"> Whether you are looking to extend your in-house software teams,
or need assistance in developing, quality assuring,
managing or supporting your applications, we can help</p>
                </div>
              
                <div className="text-center">
                <img src={require("../image/team.png")}/>
                <p className="title"> Teamwork </p>
                <p className="main"> In a real team the members work toward a common goal.A team working together usually gets more results in less time than other types of organizations.</p>
                </div>
               
                <div className="text-center"><img src={require("../image/vector4.png")}/>
                <p className="title"> Innovation </p>
                <p className="main">Innovation software goes beyond simply working to generate new ideas and can actually be used to identify new markets and develop disruptive business models that have yet to even be considered</p>
                </div>
                </Fade>
                <Fade bottom duration={1500}>
                <div className="text-center"><img src={require("../image/vector5.png")}/>
                <p className="title"> Quality </p>
                <p className="main">Quality assurance is an integral part of our development process and is also provided as a separate, stand-alone service</p>
                </div>
            
                <div className="text-center">
                <img src={require("../image/vector6.png")}/>
                <p className="title"> Simplicity </p>
                <p className="main"> an experimental research program focused on developing technologies for designs that are simpler to understand, easier to use, and, ultimately, more enjoyable</p>
                <p></p>
                </div>
                
                <div className="text-center">
                <img src={require("../image/Vector2.png")}/>
                <p className="title"> Integrity </p>
                <p className="main">Refrain from sharing secrets and confidential information with others.Remain honest with your partner.</p>
                </div>
                 </Fade>
             </div>
                
                <div>
            </div>
            {/* <Filter/> */}
            <Fade bottom duration={1500}>
           <Appacordino/>
           </Fade>
           <Fade bottom duration={1500}>
           <Team1/>
           </Fade>
           <Fade bottom duration={1500}>
            <Footer/>
            </Fade>
            </div>








            
     

 
    );
    
    
}
export default About;