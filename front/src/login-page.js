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
    	this.handleUsernameChange = this.handleUsernameChange.bind(this);
    	this.handlePasswordChange = this.handlePasswordChange.bind(this);
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
			
          						<Form.Input fluid icon='user' iconPosition='left' placeholder='username' />
          						<Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'/>

          						<Button color='teal' onClick={this.handleManagerButton } fluid size='large'>
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

	handleManagerButton= () => {
		//to managerpage
		this.setState(
			{redirectToManager : true}
		);
	}
	
	handleSignup = () => {
		//to signuppage
		this.setState(
			{redirectToSignup : true}
		);
	}
	
	 handleUsernameChange(e) {
    	this.setState({username: e.target.value});
	}
	
	handlePasswordChange(e) {
    	this.setState({password: e.target.value});
	}
}