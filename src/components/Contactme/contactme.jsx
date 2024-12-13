import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './contactme.css'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
export default function contactme() {
return (
    <div className='Contact'id='Contact'>
        <div className='head'>
            <h4>Contact Me</h4>
            <h1>Let’s Start A New Project</h1>
        </div>
    <div className="contantt" >
        <div className='leftside'>
            <div className='location'>
            
        <FontAwesomeIcon icon={faLocationDot} className='loc'/>
            <p>Location <br />20 Bordeshi, London, Usa</p>
            </div>
            <div className="phone">
            <FontAwesomeIcon icon={faPhone} className='pho' />
            <p>Phone <br />+123 456 7890</p>
            </div>
            <div className="email">
            <FontAwesomeIcon icon={faEnvelope} className='ema'/>
            <p>Email <br /> hello@thames.com</p>
            </div>
        </div>
        <div className="rightside">
            <form action="post">
                <div>
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Email' />
                </div>
                <div>
                <input type="number" placeholder=' Your Phone' />
                <input type="text" placeholder='Your subject' />
                </div>
                <div>
                    <input type="comment" placeholder='Start writing message here' id='rrr'/>
                </div>
                    <input type="Submit" value="Submit Now"id='vvv'  />
            </form>
    </div>
    </div>
    </div>
)
}
