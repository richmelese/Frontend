import React from 'react'
 import "../stayle/homemain2.css"

export const Homemain2 = () => {
  return (
    <div className="grid__image">\   
    <div className="p2"><img src={require("../image/p2.png")} /></div>
    <div className="p1"><img src={require("../image/p1.png")} /> </div>
    <div className="p3"><a href='/Team'><p className="meet1">Meet the team</p><img src={require("../image/p3.png")} /></a></div>
   </div>
  )
}
