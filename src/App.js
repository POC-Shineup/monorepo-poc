import React, { Fragment, useEffect, useState } from 'react';
import { Route,Switch, Redirect } from "react-router-dom";

import {auth,handleUserProfile} from "./firebase/utils"

import Navbar from "./Components/layout/Navbar";
import Homepage from "./Pages/Homepage"
import Register from "./Pages/Register";
import Signin from "./Pages/Signin";
import "./index.css"
import userEvent from '@testing-library/user-event';


function App() {

  const [currentUser, setCurrentUser] = useState(null);

  const authListner = () => {
    return null
  };

  // for basic sigining in
  // useEffect(() => {
  //     authListner(auth.onAuthStateChanged(userAuth => {
  //       if(!userAuth) {
  //         return setCurrentUser(null);
  //       };
  //       setCurrentUser({userAuth});
  //     }))
  //     return authListner();
  // },[]);


  useEffect(() => {
    authListner(auth.onAuthStateChanged(async (userAuth) =>{
      if(userAuth){
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            currentUser:{
              id:snapshot.id,
              ...snapshot.data()
            }
          })
        })
      }
      else{
        setCurrentUser(null);
      }
    }))
  },[])



  console.log("currentUser", currentUser)

  return (
    <div className="App">

      <Switch>
          <Fragment>
      {/* <Route path="/"  render={() => {
        <Navbar currentUser={currentUser}/>
      }}
      /> */}
      <div className="main">
          <Route  path="/home" exact render={() => (
              <Homepage currentUser={currentUser} />
          )} />
          
          <Route  path="/register" exact render={() => currentUser ? <Redirect to="/home" /> : (
              <Register currentUser={currentUser} />
          )} />

          <Route path="/signin" exact render={() => currentUser ? <Redirect to="/home" /> : (
              <Signin currentUser={currentUser} />
          )} />

      </div>
      </Fragment>
      </Switch>


       
    </div>
  );
}

export default App;
