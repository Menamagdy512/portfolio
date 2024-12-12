import React from "react";
import './Myskills.css'
import Group20 from '../../assets/images/Group 20.png'
import Group21 from '../../assets/images/Group 21.png'
import Group22 from '../../assets/images/Group 22.png'
import Group23 from '../../assets/images/Group 23.png'
import Group24 from '../../assets/images/Group 24.png'
import Group25 from '../../assets/images/Group 25.png'
export default function Myskills() {
  return (
    <div className="skills">
      <div id="ffff">
        <h1> My Skills</h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus Sed ut perspiciatis unde
          omnis iste natus kobita tumi sopno charini hoye khbor nio na sit
          voluptatem accusantium dolore.
        </p>
      </div>
      <div className="imagess">
       <div>
        <img src={Group21} alt="" />
        <img src={Group22} alt="" />
         <img src={Group20} alt="" />
        </div>
        <div>
        <img src= {Group23} alt="" />
        <img src= {Group24} alt="" />
        <img src={Group25} alt="" />
        </div>
      </div>
    </div>
  );
}
