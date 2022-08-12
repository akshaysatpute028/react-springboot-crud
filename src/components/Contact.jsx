import React from 'react'
import card from '../images/card.jpg'

export default function Contact() {
  return (
    <section className="container mt-3">
        <div className="myCard card">
            <img className="card-img-top" src={card} alt="Card image"/>
            <div className="card-body">
                <h4 className="card-title">Akshay Satpute</h4>
                <p className="myPosi card-text">Full Stack Developer</p>
                <a href="https://www.linkedin.com/in/akshay-satpute-365a86220/" className="btn btn-primary">Linked In </a>
                <a href="mailto:satputeakshay028@gmail.com" className="myBtn btn btn-success">Send Mail </a>
            </div>
        </div>
    </section>
  )
}
