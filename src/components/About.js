import React from 'react'
import {Link} from 'react-router-dom'
function About() {
  return (
    <div className='container mt-3'>
        <div className="card" style={{width: "70rem"}}>
    <div className="card-body mb-5  ml-2">
        <h3 className="card-title">Mohammed Adil</h3>
        
        <h6 className="card-subtitle mb-2 text-muted">@Ix.Irshad</h6>
        <br/>
        <p className="card-text">Hello guys, this is Adil and i am a student at MJCET, studying artificial intelligence and machine learning and also doing a side track for a full stack dev which i am opting as a profession.For more info and to contact me i am providing my github and codewars profile link.Thankyou</p>
        <Link to="https://github.com/irshxd" target='blank'  className="card-link">github</Link>
        <Link to="https://www.codewars.com/users/Irshad%20Mohd" className="card-link"  target='blank'>codewars</Link>
        </div>
        </div>
        </div>
  )
}

export default About
