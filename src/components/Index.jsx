import React from 'react'
import { Link } from 'react-router-dom'

export default function Index() {
  return (
    <div className="container p-5 my-5 border">
        <h1>REACT SPRINGBOOT CRUD</h1>
        <h2>Using Bootstrap, JPA & MySQL.</h2>
        <p class="text-primary">Developed by Akshay Satpute</p>
        <Link to="/home' " class="btn btn-outline-primary">Continue</Link>
    </div>
  )
}
