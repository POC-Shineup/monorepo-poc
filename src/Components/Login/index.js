import React, {Component,useState} from "react"
import "./styles.css";
import Button from "../../Components/forms/Buttons"

import {auth,SignInWithGoogle} from "../../firebase/utils"
import {withRouter} from "react-router-dom"
import FormInput from "./../forms/Buttons/FormInput"

const initialState = {
    email: "",
    password: ""
}


//class Login extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         ...initialState
    //     };

    //     this.handleChange = this.handleChange.bind(this);
    // }

    // handleChange(e){
    //     const {name, value} = e.target;

    //     this.setState({
    //         [name]: value
    //     })
    // }



const Login = props => {
 // Rework - FComponent
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const resetForm = () => {
               setEmail("");
            setPassword("")
    }

   const handleSubmit = async (e) => {
        e.preventDefault();
       // const {email, password} = this.state;  

        try{

            await auth.signInWithEmailAndPassword(email,password);
            // this.setState({
            //     ...initialState
            // })

        resetForm();
                props.history.push('/home')

        }catch(err){
            alert(err.message);
        }

    }


//render(){

     // const {email, password} = this.state;   
    return(
        <div className="login">
            <div className="wrapper">
                <h2> Login</h2>
                <div className="formWrap">
                    <form onSubmit={handleSubmit}> 
                    {/* {this.handleSubmit} */}

                       <FormInput
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        //onChange={this.handleChange}
                        handleChange={e => setEmail(e.target.value)}
                       />


                       <FormInput
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        //onChange={this.handleChange}
                        handleChange={e => setPassword(e.target.value)}
                       />

                       <Button type="submit">
                           Login
                       </Button>

                        <div className="socialSignin">
                            <div className="rows">
                                <Button onClick={SignInWithGoogle}>
                                    Sign in with Google
                                </Button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
    //}
}

export default withRouter (Login);