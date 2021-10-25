import React from 'react'
import {Link,Route,Redirect} from 'react-router-dom'
import {auth} from "./../../firebase/utils"

import {connect} from "react-redux";



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
                        <Link className="nav-link" to="/dashboard">My Account</Link>
                    </li>
                        <li className="nav-item">                    
                        <span className="nav-link" onClick={() => auth.signOut()}>Logout</span> 
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

const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
});

export default connect(mapStateToProps, null)(Navbar);
