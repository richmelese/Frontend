import React from 'react'
import "../stayle/homemain5.css"
export const Homemain5 = () => {
  return (
    <div>
           <div className="grid_home__content">
       
           <div className='grid__item text-center'><p className='paragraph__work'>We Work to Craft Solid Products  </p>
           <p>& <span className='project text-center'>Project</span> For You</p></div> 
    <div className="home-img1"> <img src={require("../image/image11.png")} />
 <p className="web1">Website desing</p>
    <p className="web-design1">web desing</p> <a href='/Work'><img className='web-img' src={require("../image/bluebg.png")} /></a></div>
    <div className="home-img2"><img src={require("../image/image22.png")} /><p className="web2">Branding Desing</p>
    <p className="web-design2">web desing</p></div>
    <div className="home-img3"><img src={require("../image/image33.png")} /><p className="web3">Desing Strategy</p>
    <p className="web-design3">web desing</p></div>
    <div className="home-img4"><img src={require("../image/image44.png")} /> <p className="web4">Different Website</p>
    <p className="web-design4">web desing</p>
  </div>
    <div className="home-img5"><img src={require("../image/image55.png")} /><p className="web5">Build Website</p>
    <p className="web-design5">web desing</p></div>
    <div className="whitecircle"><a href='#'className='txtlink'><p className="txt ">See All Project
    <img src={require("../image/Icon.png")} /></p></a>
    </div>
    </div>
    </div>
  )
}
