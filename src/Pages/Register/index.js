import React from 'react';
import Navbar from '../../Components/layout/Navbar';
import Signup from "../../Components/Signup"

const Register = props => {
  return (

    <div className="registerpage">
        <Navbar/>
        
        <Signup />
        
    </div>
  );
};

export default Register; 