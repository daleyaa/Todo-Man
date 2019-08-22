import Loginpage from './login-page';
import {Router, Route,Redirect} from 'react-router';

const React = require('react');
const ReactDOM  = require('react-dom');


export default class Signuppage extends React.Component{
	
	constructor(props) {
    	super(props);
    	this.state = {username:''};
   }
   
	render(){
		if(this.state.redirectToLogin) {
			return(
				<Redirect push to="/login"/>
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
					<h1>sign up</h1>
					<form>
  						<label>
    						<p>username:</p>
   					 	<input type="text" name="username" />
   		
    					 	<p>password:</p>
      				  	<input type="text"  name="password"/>
      				  	
      				 	<p>confirm password:</p>
      				  	<input type="text" name="confirm password"/>
      				  	
      				 	<p>gender:</p>
      				 	<form>
      						<select>
        							<option value=" "></option>
        							<option value="Male">Male</option>
        							<option value="Female">Female</option>
      						</select>
      				 	</form>			  
  						</label>
  						<p></p>
  						<input type="submit" onClick={this.handleLoginButton } value="sign up" />
  						<input type="submit" onClick={this.handleFirstButton } value="cancel" />
					</form>
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
	
	handleFirstButton = () => {
		//to firstpage
		this.setState(
			{redirectToFirst : true}
		);
	}
}
