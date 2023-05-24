import React from "react";
import Navbar from "../Components/Navbar";
import"../stayle/team.css";
import { Footer } from "../Components/Footer";
import{Team1} from "../pages/Team1";
import{Teampic} from "../pages/Teampic";
import Fade from "react-reveal/Fade";
import Navmenu from "../pages/Navmenu";
const Team=()=>{
    return(    
<div>
<Navmenu/>

<Fade bottom duration={1500}>
<div className="Team">
<p>Our Team</p></div>
<div><p className="team1">At Creative Software, we specialise in assembling and leading devoted teams of software engineers who regularly work as a member of your internal staff, assisting with the creation, upkeep, and support of your software programmes.</p></div>
</Fade>
{/* </div> */}
<Fade bottom duration={1500}>
<Teampic/>
    {/* <a href="#" class="btn-join">join our Team</a> */}
    </Fade>
             {/* <div className="grid__Team">
              <div className="pic1"> <img src={require("../image/Photo5.png")}/><p className="name">David James</p><p className="work">web App</p></div>
              <div className="pic2"><img src={require("../image/Photo6.png")}/><p className="name">Max Oliver</p ><p className="work">web App</p></div>
              <div className="pic3"><img src={require("../image/Photo7.png")}/><p className="name"> Steven Hill</p><p className="work">web App</p></div>
              <div className="pic4"><img src={require("../image/Photo8.png")}/><p className="name">David James</p><p className="work">web App</p></div>
              <div className="pic5"><img src={require("../image/Photo4.png")}/><p className="name">David James</p><p className="work">web App</p></div>
              <div className="pic6"><img src={require("../image/Photo7.png")}/><p className="name">David James</p><p className="work">web App</p></div>
              </div>    */}
             
              <div className=" grid-bttun text-center ">
                {/* <div><a href="#" class="btn-join">join our Team <img src={require("../image/Icon.png")}/></a> </div>  */}
                <button class="button__team"><span> Join Our Team  <img src={require("../image/Icon.png")} /></span></button>
                 </div>
              
            
               <Team1/>
                <Footer/>
        </div>
      
        
        
       
       
        
  
      
   
  

    
    );
}
export default Team;