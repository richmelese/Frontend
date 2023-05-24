import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Homemain1 } from "./Homemain1";
import Navbar from "../Components/Navbar";
import { Homemain2 } from "./Homemain2";
import { New } from "./new";
import { Homemain4 } from "./Homemain4";
import { Homemain5 } from "./Homemain5";
import { Homemain7 } from "./Homemain7";
import { Homemain8 } from "./Homemain8";
import { Hellobutton } from "./Hellobutton";
import Navmenu from "../pages/Navmenu";
import{Footer} from"../Components/Footer";
import Fade from "react-reveal/Fade";
const Home=()=>{
  return(
    <div>

<Navmenu/>
<Fade bottom duration={1500}>
  <Homemain1/>
   <Hellobutton/>
 
  <Homemain2/>
  </Fade>
<div id="New-img" className="scrolpic ">
 <a href="#scrool"> <img src={require("../image/ScrollDown.png")} /></a>
  </div>
  <Fade bottom duration={1500}>
 <New/>
 </Fade>
 <Fade bottom duration={1500}>
 <h2 className=' grid__servic text-center'>OUR <span className="colorspan">Services</span> </h2>
 <Fade bottom duration={1500}>
 <Homemain4/>
 </Fade>
 </Fade>
 <Fade bottom duration={1500}>
 <Homemain5/>
 </Fade>
 <Fade bottom duration={1500}>
 <Homemain7/>
 </Fade>
 <Fade bottom duration={1500}>
 <Homemain8/>
 </Fade>
 <Fade bottom duration={1500}>
 <Footer/>
 </Fade>

</div>
  )

}
export default Home;