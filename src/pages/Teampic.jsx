import React from 'react'
import "../stayle/team.css"
export const Teampic = () => {
  return (
    <div>
     <div className="grid__Team text-center">
              <div className="pic1"> <img src={require("../image/Photo5.png")}/><p className="name">David James</p><p className="work">web App</p></div>
              <div className="pic2"><img src={require("../image/Photo6.png")}/><p className="name">Max Oliver</p ><p className="work">web App</p></div>
              <div className="pic3"><img src={require("../image/Photo7.png")}/><p className="name"> Steven Hill</p><p className="work">web App</p></div>
              <div className="pic4"><img src={require("../image/Photo8.png")}/><p className="name">David James</p><p className="work">web App</p></div>
              <div className="pic5"><img src={require("../image/Photo4.png")}/><p className="name">David James</p><p className="work">web App</p></div>
              <div className="pic6"><img src={require("../image/Photo7.png")}/><p className="name">David James</p><p className="work">web App</p></div>
              </div>    
    </div>
  )
}
