import React, { Fragment, useEffect, useState } from 'react';
import { Route,Switch, Redirect } from "react-router-dom";

import {auth,handleUserProfile} from "./firebase/utils"

import Navbar from "./Components/layout/Navbar";
import Homepage from "./Pages/Homepage"
import Register from "./Pages/Register";
import Signin from "./Pages/Signin";
import "./index.css"
import Dashboard from "./Pages/Dashboard"

import {connect} from "react-redux"
import {setCurrentUser} from './Components/redux/User/user.actions';
import WithAuth from "./hoc/withAuth";

const App = props => {

 // const [currentUser, setCurrentUser] = useState(null);

  // const authListner = () => {
  //   return null
  // };

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

    const {setCurrentUser} = props
   const authListner = auth.onAuthStateChanged(async (userAuth) =>{
      if(userAuth){
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
          })
        })
      }
      else{
        setCurrentUser(userAuth);
      }
    })
    return () => {
      authListner();
    }
  },[])



  console.log("currentUser", props.currentUser);

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
              <Homepage />
          )} />
          
          <Route  path="/register" exact render={() =>  (
              <Register  />
          )} />

          <Route path="/signin" exact render={() =>  (
              <Signin  />
          )} />

          
          <Route path="/dashboard" exact render={() => (
            <WithAuth>
              <Dashboard currentUser={props.currentUser} />
            </WithAuth>
          )} />

      </div>
      </Fragment>
      </Switch>


       
    </div>
  );
}

const mapStateToProps = ({user}) =>({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
