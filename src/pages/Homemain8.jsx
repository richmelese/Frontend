import React from 'react'
import "../stayle/homemain8.css"
import 'bootstrap/dist/css/bootstrap.min.css';
export const Homemain8 = () => {
  return (
    <div>
       
         <div className="grid-teamsection">
         <p className='team '> Team</p>
                <div></div>
                 <div className="img-img1"> <img src={require("../image/Photo5.png")}/>  </div>
                 <div></div>
                 <div className="img-img2"><img src={require("../image/Photo8.png")}/>  </div>
                
                 <div className="img-img3"> <img src={require("../image/Photo6.png")}/> </div>
                <div></div>
                 <div className="img-img4"> <img src={require("../image/Photo7.png")}/>
             
                 </div>
                 <div></div>
                 {/* <a href="/Team" className="btn-primary text-center">Meet our Team <img src={require("../image/Icon.png")} /></a> */}
                   </div> 
                   
    </div>
  )
}
