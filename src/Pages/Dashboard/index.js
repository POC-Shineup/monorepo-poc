import React from "react";
import "./styles.css";

import Navbar from "../../Components/layout/Navbar";

const Dashboard = props =>{

    console.log("props", props)
    return (
        <div>
        <Navbar {...props}/>
        <h1> Your Logged in {props.currentUser.displayName}!</h1>
        <p> Your mail id: {props.currentUser.email} </p>
        </div>
    );
};

export default Dashboard;