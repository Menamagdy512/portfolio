import React from 'react'
import'./Headers.css'

export default function Headers() {
  return (
    <div className='Containar'>
       <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Works</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Contact</a></li>
          <button>DOWNLOAD CV</button>
        </ul>
        </nav>
    </div>
  )
}
