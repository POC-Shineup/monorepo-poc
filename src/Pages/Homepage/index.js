import React from 'react';
import "./styles.css"
import Navbar from '../../Components/layout/Navbar';


const Homepage = props => {
  return (
    <div className="homepage">
              <Navbar {...props}/>
        <h1 className="head">Home</h1>
    </div>
  );
};

export default Homepage;