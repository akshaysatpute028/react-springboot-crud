import React from 'react'

export default function () {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
          <div className="container-fluid">
          <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/add-user">Add</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/search">Search</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/users">Users</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
     </nav>
    </div>
  )
}
