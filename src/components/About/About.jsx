import React from 'react'
import'./about.css'
import aboutimg from '../../assets/images/about-img.png'
import download from '../../assets/images/download.png'
import border from '../../assets/images/Border.png'
import background from '../../assets/images/Background.png'

export default function About() {
    return (
    <div className='box 'id='About' > 
        <div className='box1'>
        <div className='bigimg'>
            <img src= {aboutimg} alt="" />
        </div>
        <div className="im">
            <img src={download} alt="" />
        </div>
        <div className="bor">
            <img src={border} alt="" />
        </div>
        <div className="bak">
            <img src={background} alt="" />
        </div>
        </div>
        <div className="about">
                <h4>ABOUT ME</h4>
                <h1>I Develop System that Works</h1>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese
runt mollit anim id est laboru doloremque laudantium, totaeaque ipsa quae
ab illo inven tore veritatis et quasi architecto beatae vitae.
<br />
<br />
Oremque laudantium, totaeaque ipsa quae
</p>
<div className="info">
    <div>
    <p>Name</p>
    <p>Age</p>
    <p>Occupation</p>
    </div>
    <div>
        <p>James Smith</p>
        <p>29 Years</p>
        <p><span>SystemEngineer</span></p>
    </div>
    <div>
    <p>Phone</p>
    <p>Email</p>
    <p>Nationality</p>
    </div>
    <div>
        <p>+123 456 7890</p>
        <p>hello@thames.com</p>
        <p>Bangladeshi</p>
    </div>
</div>
<div className="sign">
<p ><span>Bruce Wayne </span> Software Architect, Google Inc.</p>
</div>
    </div>
    </div>
)
}
