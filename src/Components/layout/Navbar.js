import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark p-3">
            <Link className="navbar-brand" to="/">ShineUp</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">SignIn</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/">Link</Link>
                    </li> */}    
                </ul>
            </div>  
        </nav>
    )
}

export default Navbar
