import './signIn.scss'
import React from "react";
import FormInput from "../../formInput/formInput";
import CustomButton from "../customButton/customButton";
import {signInWithGoogle} from "../../firebase/firebase.utils";


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({email: "", password: ""})
    }
    handleChange = (event) => {
        const {value, name} = event.target
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        label="Email"
                        handleChange={this.handleChange}
                        type="email"
                        value={this.state.email}
                        required/>
                    <FormInput
                        name="password"
                        label="Password"
                        handleChange={this.handleChange}
                        type="email"
                        value={this.state.password}
                        required/>
                    <div className="buttons">
                    <CustomButton type="submit">Sign in</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn