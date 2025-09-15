import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
  <>
  {/* Header */}
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand" to="#">
        📚 Book Management Library
     </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              Home
           </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link active" to="about-us">
              About Us
           </Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" to="add-book">
              Add Books
           </Link>
          </li>
           <li className="nav-item">
            <Link className="nav-link" to="book-list">
             Book List
           </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="contact-us">
              Contact Us
           </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</>

  )
}
