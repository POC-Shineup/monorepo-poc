import React , {Component,useState} from "react";
import Button from "../forms/Buttons";
import FormInput from "../forms/Buttons/FormInput";
import './styles.css';

import {auth, handleUserProfile} from "./../../firebase/utils"



const initialState = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
    errors:[]
}

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ...initialState
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        console.log(e.target)
        const {name,value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = async (e) => {
        e.preventDefault();
          const {displayName, email, password, confirmPassword} = this.state;
             if(password !== confirmPassword){
                const error = [`Passwords don't match`];
                this.setState({
                    errors: error
                })
                return;
            }
            try{
                const {user} = await auth.createUserWithEmailAndPassword(email,password);

                await handleUserProfile(user,{displayName})

                this.setState({
                    ...initialState
                });

            }catch(err){
            alert(err.message);            }
            }       

// const Signup = () => {

// // Need rework on func component
//     const [userDetail, setUserDetail] = useState({ displayName: "", email: "", password: "", confirmPassword: "", errors:[] });

//     const {displayName, email, password, confirmPassword,errors} = userDetail;


//     const handleChange = (e) => {
//          const {name, value} = e.target;
        
//          setUserDetail({...e,
//              [name]: value
//          })
//          console.log("user",userDetail)

//     }

//     const handleFormSubmit = async (e) => {
//         console.log("password", password, confirmPassword)
//             e.preventDefault();
            
//             if(password !== confirmPassword){
//                 const error = [`Passwords don't match`];
//                 setUserDetail({
//                     errors: error
//                 })
                
//             }

//             try{
//                 const {user} = await auth.createUserWithEmailAndPassword(email,password);

//                 await handleUserProfile(user,{displayName})

//                 setUserDetail({
//                     ...userDetail
//                 });
//                 console.log("userdetail",userDetail)
//             }catch(err){
                
//             }
            
//     }



   render(){

        const {displayName, email, password, confirmPassword, errors} = this.state;
   
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


                <form onSubmit={this.handleFormSubmit}>
                    <FormInput 
                        type="text"
                        name= "displayName"
                        value={displayName}
                        placeholder="Name"
                        onChange={this.handleChange}
                    />

                    <FormInput 
                        type="email"
                        name= "email"
                        value={email}
                        placeholder="Email"
                        onChange={this.handleChange}
                    />

                    <FormInput 
                        type="password"
                        name= "password"
                        value={password}
                        placeholder="Password"
                        onChange={this.handleChange}
                    />

                    <FormInput 
                        type="password"
                        name= "confirmPassword"
                        value={confirmPassword}
                        placeholder="Confirm password"
                        onChange={this.handleChange}
                    />

                    <Button type="submit" >
                        Register
                    </Button>
                </form>
                </div>
            </div>
        </div>
    )
     }
}

export default Signup;