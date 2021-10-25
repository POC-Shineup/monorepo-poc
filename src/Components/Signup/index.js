import React , {Component,useState} from "react";
import Button from "../forms/Buttons";
import FormInput from "../forms/Buttons/FormInput";
import './styles.css';

import {withRouter} from "react-router-dom"
import {auth, handleUserProfile} from "./../../firebase/utils"





   

const Signup = (props) => {


     const [displayName, setDisplayName] = useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [confirmPassword, setConfirmPassword] = useState("");
     const [errors, setErrors] = useState([]);

    const reset = () => {
        setDisplayName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setErrors([])
    }

    const handleFormSubmit = async (e) => {
        console.log("password", password, confirmPassword)
            e.preventDefault();
            
            if(password !== confirmPassword){
                const error = [`Passwords don't match`];
                
                setErrors(error);
                return;
            }

            try{
                const {user} = await auth.createUserWithEmailAndPassword(email,password);

                await handleUserProfile(user,{displayName})

                reset();
                props.history.push('/home')
            }catch(err){
                
            }
            
    }



  // render(){

       // const {displayName, email, password, confirmPassword, errors} = this.state;
   
    return(
        
        <div className="signup">
            <div className="wrapper">
                <h2>
                    Sign up
                </h2>
                <div className="formWrap">

                {errors && errors.length > 0 && (
                    <ul>
                        {errors.map((err, index) => {
                           return <li key={index}> {err} </li>
                        })}
                    </ul>
                )}


                <form onSubmit={handleFormSubmit}>
                    <FormInput 
                        type="text"
                        name= "displayName"
                        value={displayName}
                        placeholder="Name"
                        //onChange={this.handleChange}
                        handleChange={e => setDisplayName(e.target.value)}
                    />

                    <FormInput 
                        type="email"
                        name= "email"
                        value={email}
                        placeholder="Email"
                        //onChange={this.handleChange}
                        handleChange={e => setEmail(e.target.value)}
                    />

                    <FormInput 
                        type="password"
                        name= "password"
                        value={password}
                        placeholder="Password"
                        //onChange={this.handleChange}
                        handleChange={e => setPassword(e.target.value)}
                    />

                    <FormInput 
                        type="password"
                        name= "confirmPassword"
                        value={confirmPassword}
                        placeholder="Confirm password"
                        //onChange={this.handleChange}
                        handleChange={e => setConfirmPassword(e.target.value)}
                    />

                    <Button type="submit" >
                        Register
                    </Button>
                </form>
                </div>
            </div>
        </div>
    )
   //  }
}

export default withRouter(Signup);