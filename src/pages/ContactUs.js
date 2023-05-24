import React from "react";
import Navbar from "../Components/Navbar";
import"../stayle/contact.css";
import { Footer } from "../Components/Footer";
import { FaFacebook,FaTelegram,FaTwitter,FaInstagram } from 'react-icons/fa';
import Appacordino from "./Appacordino";
import Fade from "react-reveal/Fade";
import Navmenu from"./Navmenu";
const ContactUs=()=>{
    return(
<div>
   
<Navmenu/>
<Fade bottom duration={1500}>
    <div className="Team">
<p>Contact Us</p>
</div>
<div><p className="team1">We specialise in building and managing dedicated teams of software engineers and provide project-based software development</p></div>
</Fade>
<Fade bottom duration={1500}>
<div className="grid__contact">
    <div className="lets"><p className="contact_text">Let’s talk </p>
    <p className="contact_text2">Send us an email or start a conversation by filling the form below.</p>
   
    </div>
  
    <div className="subdiv1">
        
       <label className="formcolor">FullName </label><br></br>
          <input type="text" id="fname" name="firstname" placeholder="Your Name.." className="formbox" required></input> <br></br>
         <label className="formcolor">email</label> <br></br>
          <input type="text" id="fname" name="firstname" placeholder="example@gmail.com.." className="formbox" required></input>
         
          </div>
          <div className="subdiv2">
           
         <label className="formcolor">Phone</label> <br></br>
          <input type="text" id="fname" name="firstname" placeholder="Your Phone no." className="formbox" required></input><br></br>
          <label className="formcolor">Subject</label> <br></br>
          <input type="text" id="fname" name="firstname" placeholder="Your Subject." className="formbox" required></input><br></br>
         
         </div>

  
    <div></div>
    <div>
        <form>
   <label className="formcolortext" >Leave us a message</label><br></br>
         <textarea id="subject" name="subject" placeholder="Write something.."className="txtarea" required></textarea><br></br>
        <input type="submit" value="Send Message" className="submit"></input>
        </form>
    </div>
    <div></div>
    <div className="follow">
        <hr></hr>
        <p>Follow Us</p>
        <ul className="contact-social">
        <li><a href='#'><FaFacebook className='icon facebook'/></a></li>
        <li> <a href='#'><FaInstagram className='icon telegram'/></a></li>
        <li> <a href='#'><FaTelegram className='icon instagram'/></a></li>
        <li> <a href='#'><FaTwitter className='icon twitter'/></a></li>
            </ul>  
    </div> 
</div>
</Fade>
<Fade bottom duration={1500}>
<Appacordino/>
 </Fade>
 <Fade bottom duration={1500}>
<div><Footer/></div>
</Fade>

</div>

    );
}
export default ContactUs;