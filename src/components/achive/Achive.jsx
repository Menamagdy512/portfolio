import React from "react";
import "./achive.css";
import edu from '../../assets/images/edu.png'
import medal1 from '../../assets/images/medal1.png'
export default function Achive() {
  return (
    <div className="achive">
      <div className="image">
        <img src={edu} alt="" />
        </div>
      <div className="edu">
        <div >
        <h4>Education</h4>
        <h1>My Achievements</h1>
        <p id="eee">
        <span> Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini hoye
        khbor nio na sit voluptatem accusantium dolore.</span>
        </p>
        </div>
      <div className="myach">
        <div >
          <img src={medal1} alt="" />
          <h2>Masters in Computer Science</h2>
          <h5>
          New York University ( 2012 - 2016 )
          </h5>
          <p>
          Ludantium totam rem aperia meaque ipsa quae ab illo inven
tore veritatis et quasi architecto beatae vitae.
          </p>
        </div>
        <div>
          <img src={medal1} alt="" />
          <h2><span>Bachelor in Computer Engineering</span></h2>
          <h5>
          Dhaka University ( 2008 - 2011 )
          </h5>
          <p>
          Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.
          </p>
        </div>
        <div>
          <img src={medal1} alt="" />
          <h2>Diploma in Graphic Design</h2>
          <h5>
          Bangla College ( 2006 - 2008 )
          </h5>
          <p>
          Ludantium totam rem aperia meaque ipsa quae ab illo inven tore veritatis et quasi architecto beatae vitae.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
