import Button from'./button';
import Loginpage from './login-page';
import Signuppage from './signup-page';

import { Router, Route,Redirect} from 'react-router';

const React = require('react');
const ReactDOM  = require('react-dom');

export default class Firstpage extends React.Component{
	
	constructor(){
		super();
		this.state = {};	
	}
	
	render() {
		if (this.state.redirectToLogin) {
			return(
				<Redirect push to="/login"/>
			);
		}
		else if(this.state.redirectToSignup) {
			return(
				<Redirect push to="/signup"/>
			);
		}
		else{
    		return (
    			<div>		
    				<h1>Welcome!</h1>
    				<Button title="login"  onClick={this.handleLoginButton}/>
    				<Button title="sign up"  onClick={this.handleSignupButton}/>
				</div>
			);
		}
	}
	
	handleLoginButton = () => {
		//to loginpage
		this.setState(
			{redirectToLogin : true}
		);
	}
	
	handleSignupButton = () => {
		//to signuppage
		this.setState(
			{redirectToSignup : true}
		);
	}
}	