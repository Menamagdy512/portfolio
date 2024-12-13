import React from 'react'
import'./Headers.css'

export default function Headers() {
  return (
    <div className='Containar'>
       <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Works">Works</a></li>
          <li><a href="#Service">Service</a></li>
          <li><a href="#Contact">Contact</a></li>
          <button>DOWNLOAD CV</button>
        </ul>
        </nav>
    </div>
  )
}
