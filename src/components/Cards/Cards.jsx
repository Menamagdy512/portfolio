import React from "react";
import'./Cards.css'
import book1 from "../../assets/images/book1.png";
import book3 from "../../assets/images/book3.png";
import book2 from "../../assets/images/book2.png";
import book4 from "../../assets/images/book4.png";
export default function Cards(){
    return (
        <div className="Containar">
        <section className="cards">
            <div className="topbook">
            <img src={book1} alt="" />
            <h3>
                Licentiate's Degree Specialized Translation In Chinese Language
            </h3>
            </div>
            <div className="bottombook">
            <img src={book2} alt="" />
            <h3>Faculty Of Al-Alsun Language - Ainshams University</h3>
            </div>
            <div className="topbook">
            <img src={book3} alt="" />
            <h3>Chinese And English (Second Language) Department Credit Hours</h3>
            </div>
            <div className="bottombook">
            <img src={book4} alt="" />
            <h3>Bachelors Of Certified Translation Gpa: 3.7</h3>
            </div>
        </section>
        </div>
    );
    }
