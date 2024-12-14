import React from "react";
import "./exprience.css";
import image from '../../assets/images/image.png'
import Vector from "../../assets/images/Vector.png";

export default function Exprience() {
  return (
    <div className="work" id="Works">
      <div className="image">
        <img src={image} alt="" />
        </div>
      <div className="exprience">
        <div className="title">
        <h4>Work Experience</h4>
        <h1>My Experience</h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini
          hoye khbor nio na sit voluptatem.
        </p>
        </div>
      <div className="myex">
        <div>
          <img src={Vector} alt="" />
          <div className="ppp">
          <h2><span>Senior System Engineer</span></h2>
          <h5>
            eThemeStudio( 2018 - Running )
          </h5>
          <p>
            Ludantium totam rem aperia meaque ipsa quae ab illo inven tore
            veritatis et quasi architecto beatae et vitae ullam molesti quae
            quasi.
          </p>
          </div>
        </div>

        <div>
          <img src={Vector} alt="" />
          <div className="ppp">
          <h2>Data Architect</h2>
          <h5>
          Easy Computers ( 2015 - 2018 )
          </h5>
          <p>
            Ludantium totam rem aperia meaque ipsa quae ab illo inven tore
            veritatis et quasi architecto beatae et vitae ullam molesti quae
            quasi.
          </p>
          </div>
        </div>
        <div>
          <img src={Vector} alt="" />
          <h2>Web Developer</h2>
          <h5>
          Bangla College ( 2012 - 2015 )
          </h5>
          <p>
            Ludantium totam rem aperia meaque ipsa quae ab illo inven tore
            veritatis et quasi architecto beatae et vitae ullam molesti quae
            quasi.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
