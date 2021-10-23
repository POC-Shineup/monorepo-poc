import React from "react"
import "./styles.css";
import Login from "../../Components/Login"
import Navbar from "../../Components/layout/Navbar";
const Signin = props => {
    return(
        <div>
            <Navbar {...props}/>
             <Login />
        </div>
     
    )
}

export default Signin;