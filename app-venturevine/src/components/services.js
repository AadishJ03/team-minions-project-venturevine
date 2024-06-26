import React from 'react'
import './services.css'
function Services(props) {
  return (
    <div className="cards">
        <h1 className='card-h1'>{props.servicename}</h1>
        <img className="card-img"src={props.image}  height="100px"/>
        <p className='card-desc'>{props.description}</p>
        <button className='card-btn'>Explore Now</button>
    </div>
  )
}

export default Services