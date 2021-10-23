import React from 'react'
import {Link} from 'react-router-dom'
import {auth} from "./../../firebase/utils"
const Navbar = props => {

    const {currentUser} = props;

    console.log("propsnav", currentUser);


    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark p-3">
            <Link className="navbar-brand" to="/home">ShineUp</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
               
                {currentUser && 
                    <ul className="navbar-nav ml-auto"> 
                        <li className="nav-item">
                        <Link className="nav-link" to="/signin" onClick={() => auth.signOut()}>Logout</Link> 
                    </li>
                    </ul>
                }

               {!currentUser && <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/signin">SignIn</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="/">Link</Link>
                    </li> */}    
                </ul>}
            </div>  
        </nav>
    )
}

Navbar.defaultProps = {
    currentUser: null
}

export default Navbar
