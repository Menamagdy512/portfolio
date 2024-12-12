import React from 'react'
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import container from '../../assets/images/container.png'
import shape1 from'../../assets/images/shape1.png.png'
import shape2 from'../../assets/images/shape2.png.png'
import shape4 from'../../assets/images/shape4.png.png'
export default function Hero() {
return (
    <div className='Containar'>
    {/* Start home */}
    <div className="Homepage">
          <div className='content'>
          <h3>Hello I’m</h3>
          <h1>Youssef Ali</h1>
          <p>Chinese Instructor & Project managar</p>
        <button>SAY HELLO</button>
        </div>
        <div className="decor">
          <div className="decor1">
          <img src={shape1} alt="" />
          </div>
          <div className="decor2">
          <img src={shape1} alt="" />
          </div>
          <div className="decor3">
          <img src={shape2} alt="" />
          </div>
          <div className="decor4">
          <img src={shape4} alt="" />
          </div>
        </div>
        <div className='Homeimg'>
          <img src={container}alt="personal photo" />
        </div>
        <div className='socialimg'>
          <div>
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
          </div>
          <div>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
          <div>
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
          <div>
            <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
          </div>
        </div>
    </div>
        {/* End Home */}
    </div>
)
}
