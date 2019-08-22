import Managerpage from './manager-page';

import {Router, Route,Redirect} from 'react-router';

const React = require('react');
const ReactDOM  = require('react-dom');

export default class Loginpage extends React.Component{
	
	constructor(props) {
   	super(props);
    	this.state = {username:'',
    		password:''};
    	this.handleUsernameChange = this.handleUsernameChange.bind(this);
    	this.handlePasswordChange = this.handlePasswordChange.bind(this);
 	}
 	
	render(){//form
		if(this.state.redirectToLogin) {
			return(
				<Redirect push to="/manager"/>
			);
		}
		else if(this.state.redirectToFirst) {
			return(
				<Redirect push to="/"/>
			);
		}
		else{	
			return( 
				<div>    
					<h1>Login</h1>
					<form>
  						<label>
    						<p>username:</p>
   					 	<input type = "text" value= {this.state.username} 
   					 		onChange={this.handleUsernameChange} name = "username" />
    					 	<p>password:</p>
      				 	<input type = "text" value= {this.state.password} 
   					 		onChange={this.handlePasswordChange} name = "password"/>
  						</label>
  						<p></p>
  						<input type = "submit" onClick = {this.handleLoginButton} value = "login" />
  						<input type = "submit" onClick={this.handleFirstButton } value = "cancel" />
					</form>				
				</div>		
			)		
		}
	}
	
	handleLoginButton= () => {
		//to loginpage
		this.setState(
			{redirectToLogin : true}
		);
	}
	
	handleFirstButton = () => {
		//to firstpage
		this.setState(
			{redirectToFirst : true}
		);
	}
	
	 handleUsernameChange(e) {
    	this.setState({username: e.target.value});
	}
	
	handlePasswordChange(e) {
    	this.setState({password: e.target.value});
	}
}