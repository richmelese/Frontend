import React from "react";
import Navbar from "../Components/Navbar";
import "../stayle/portsingle.css";
import { Footer } from "../Components/Footer";
const PortifolioSingle=()=>{
    return(
    <div>
      <Navbar></Navbar>
      <div className="portiolio"><p >Website Desing</p>
      <p className="red">web desing</p></div> 
      {/* <img src={require("../image/port.png")}/> */}
      <div className="img__grid">
      <div className="imgone">
         <img src={require("../image/port.png")}/>
        </div>
        </div> 
        <div className="grid__port">
          <div className="port1"><p>Lorem</p>
          <p className="portweb">client</p>
          </div>
          <div className="port1"><p>Service</p>
          <p className="portweb">Website</p>
          </div>
          <div className="port1"><p>16.7.2023</p>
          <p className="portweb">date</p>
          </div>
          <div className="port1"><a href="">Live Link</a>
          <p className="portweb">Website</p>
          </div>
        </div>
     <div className="paragraph ">
      <p className="about_project text-center">About the project</p>
      <p className="about_paragraph"> Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus vel hendrerit elementum. Morbi curabitur etiam nibh justo, lorem aliquet donec. Sed sit mi dignissim at ante massa mattis egestas.</p>
      <p className="about_paragraph"> Lorem ipsum dolor sit amet, consectetur adipiscing elit lobortis arcu enim urna adipiscing praesent velit viverra sit semper lorem eu cursus vel hendrerit elementum. Morbi curabitur etiam nibh justo, lorem aliquet donec</p>
     </div>
   <div className="orderd" >
      <ol type="1">
       <li><p> Lorem ipsum dolor sit amet, consectetur </p></li> 
       <li><p> Lorem ipsum dolor sit amet, consectetur </p></li> 
       <li><p> Lorem ipsum dolor sit amet, consectetur </p></li> 
       <li><p> Lorem ipsum dolor sit amet, consectetur </p></li> 
      </ol>
</div>
<div className="grid-img2">
<img src={require("../image/portimg.png")}/>
</div>
<div className="port_lorem">
  <p className="port_lorem_txt">Lorem ipsum dolor sit amet</p>
  <p className="port_txt"> Lorem ipsum dolor sit amet, adipiscing praesent velit viverra sit semper lorem eu cursus vels hendrerit elementum. Morbi curabitur etiam nibh justo, lorem aliquet donec. Sed sit mi dignissim at ante massa mattis egestas</p>
  <div className="unorderd">
  <ul>
    <li><p>Lorem ipsum dolor sit amet, adipiscing praesent</p></li>
    <li><p>Lorem ipsum dolor sit amet, adipiscing praesent</p></li>
    <li><p>Lorem ipsum dolor sit amet, adipiscing praesent</p></li>
    <li><p>Lorem ipsum dolor sit amet, adipiscing praesent</p></li>
    </ul>
  </div>
    <p className="port_txt3"> Lorem hendrerit elementum. Morbi curabitur etiam nibh justo, lorem aliquet donec. Sed sit mi dignissim at ante massa mattis egestas.</p>
  <div className="grid__flower">
   <div> <img src={require("../image/flower1.png")}/></div>
   <div className="grid__flower_row"> 
  <div><img src={require("../image/flower2.png")}/></div> 
   <di><img src={require("../image/flower4.png")}/></di>
   </div>
   <div> <img src={require("../image/flower3.png")}/></div>
   {/* <div><img src={require("../image/image11.png")}/></div> */}
   {/* <div><a href="" className="btn-port">Browse All Projects</a></div> */}
 
  </div>
   <div className="grid__second_img">
    <div className="two_row">
        <div className="second"><p >More Projects</p></div> 
      <div><img src={require("../image/image11.png")}/><p className="brand">Brand design</p><p className="secondbrand">Web Design</p></div> </div>
    <div className="empty"> 
    <div></div>
   <div><img src={require("../image/image22.png")}/><p className="brand">Graphic design</p><p className="secondbrand">Web Design</p></div></div> 
    <div className="two_row_button"> 
       <div><a href="" className="btn-port">Browse All Projects</a></div> 
   <div><img src={require("../image/image33.png")}/> <p className="brand">Brand design</p>
   <p className="secondbrand">Web Design</p></div></div> 
   </div>
</div>
 <Footer/>
    </div>
    );
}
export default PortifolioSingle;