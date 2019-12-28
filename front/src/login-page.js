import {Redirect} from 'react-router';
import { Button, Form, Grid, Image, Message, Segment } from 'semantic-ui-react';
import b from './aaa.jpg';


const React = require('react');
const ReactDOM  = require('react-dom');

export default class Loginpage extends React.Component{
	
	constructor(props) {
   	super(props);
    	this.state = {username:'',
			password:''};
    	this.handleUsername = this.handleUsername.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
 	}
 	
	render(){//form
		if(this.state.redirectToManager) {
			return(
				<Redirect push to="/manager"/>
			);
		}
		else if(this.state.redirectToSignup) {
			return(
				<Redirect push to="/signup"/>
			);
		}
		else{
			return(

  				<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    				<Grid.Column style={{ maxWidth: 450 }}>
        				<Image  src={b} verticalAlign='middle'/>
      					<Form size='large'>
        					<Segment stacked>
			
								  <Form.Input fluid icon='user' iconPosition='left' placeholder='username' 
								  	onChange={this.handleUsername}/>
								  <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' 
								  	type='password' onChange={this.handlePassword}/>

          						<Button color='teal' onClick={this.handleLoginButton } fluid size='large'>
            						Login
          						</Button>
        					</Segment>
      					</Form>
      					<Message>
        					New to us? <a href='./signup'>Sign Up</a>
      					</Message>
  					</Grid.Column>
  				</Grid>
			)	
			
		}
	}

	handleLoginButton= (event) => {
		event.preventDefault()
		if(this.state.username && this.state.password){
			let data = {
				username : this.state.username,
				password : this.state.password
			};
			console.log("test");
			fetch('http://localhost:3001/auth/login',
			{
				method : 'POST',
				headers : {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			}).then((res) => {
				console.log(res);

				//to managerpage
				if(res.body.ok==true){
					this.setState(
					 	{redirectToManager : true}
					);
				}
			}).catch((err) => {
				console.log("Login failed" + err);
			});
		}
	}
	
	handleSignup = () => {
		//to signuppage
		this.setState(
			{redirectToSignup : true}
		);
	}
	
	handlePassword = (event) => {
		console.log("password");
		this.setState({
			username:this.state.username,
			password:event.target.value,
			passwordConfirm:this.state.passwordConfirm,
			gender:this.state.gender,
			tosChecked:this.state.tosChecked
		});
	}
	handleUsername = (event) => {
		console.log("usename");
		this.setState({
			username:event.target.value,
			password:this.state.password,
			passwordConfirm:this.state.passwordConfirm,
			gender:this.state.gender,
			tosChecked:this.state.tosChecked
		});
	}
	
}