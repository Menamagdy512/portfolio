import React from "react";
import item from "../../assets/images/item.png";
import item1 from "../../assets/images/item1.png";
import Link from "../../assets/images/Link.png";
import Link1 from "../../assets/images/Link1.png";
import "./footer.css";
export default function Footer() {
  return (
    <div>
      <div className="footerss">
        <div className="main">
          <div className="hhh">
            <h3>Youssef Ali</h3>
          </div>
          <div className="middle">
            <h4>Newsletter</h4>
            <input type="email" placeholder="Submit your email" />
          </div>
          <div className="follow">
            <p>Follow Me</p>
            <img src={item} alt="" />
            <img src={Link} alt="" />
            <img src={Link1} alt="" />
            <img src={item1} alt="" />
          </div>
        </div>
          <p id="qqq">All rights reserved Code craft © 2024</p>
      </div>
    </div>
  );
}

