import a from './aaa.jpg';
import {Button,Segment, Grid, Select, Checkbox, Form} from 'semantic-ui-react';
import {Redirect} from 'react-router';

const React = require('react');
const gender = [
  { key: 'male', value: 'male', text: 'Male' },
  { key: 'female', value: 'female', text: 'Female' }
]
export default class Signuppage extends React.Component{
	
	constructor(props) {
    	super(props);
		this.state = {
			username:'',
			password:'',
			passwordConfirm:'',
			gender:'',
			tosChecked:false
		};
		this.handleUsername = this.handleUsername.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handlePasswordConfirm = this.handlePasswordConfirm.bind(this);
		this.handleGender = this.handleGender.bind(this);
		this.handleTosChecked = this.handleTosChecked.bind(this);
   } 
	render(){
		if(this.state.redirectToManager) {
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
  				<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
  					<Grid.Column style={{ maxWidth: 450 }}> 
					  <img src={a} class='img'/>
						<Form size='large'>
	  						<Segment stacked>
								<Form.Input fluid icon='user' iconPosition='left' placeholder='username'	
									 onChange={this.handleUsername}  />
								<Form.Input fluid icon='lock' iconPosition='left' placeholder='Password'
									 type='password' onChange={this.handlePassword}/>
								<Form.Input fluid icon='lock' iconPosition='left' placeholder='Confirm Password' 
									type='password' onChange={this.handlePasswordConfirm}/>
								<Form.Field required>
    								<Select  placeholder='gender' options={gender} onChange={this.handleGender} />
    							</Form.Field>
    				
    							<Form.Field required>
									  <input type="checkbox" name="tos"
									    onChange={this.handleTosChecked}/>
    							</Form.Field>
								<Button color='teal' onClick={this.handleSignupButton } fluid size='large'>
		  							Sign up
								</Button>
	  						</Segment>
						</Form>
	
  					</Grid.Column>
				</Grid>
    				
			);
		}
	}
	handleTosChecked = (event) => {
		this.setState({
			username:this.state.username,
			password:this.state.password,
			passwordConfirm:this.state.passwordConfirm,
			tosChecked:event.target.checked ?true : false
		});
	}
	handlePasswordConfirm = (event) => {
		this.setState({
			username:this.state.username,
			password:this.state.password,
			passwordConfirm:event.target.value,
			gender:this.state.gender,
			tosChecked:this.state.tosChecked
		});
	}
	handleGender = (event) => {
		this.setState({
			username:this.state.username,
			password:this.state.password,
			passwordConfirm:this.state.passwordConfirm,
			gender:event.target.innerText == "Male" ? 0 : 1,
			tosChecked:this.state.tosChecked
		});
	}
	handlePassword = (event) => {
		this.setState({
			username:this.state.username,
			password:event.target.value,
			passwordConfirm:this.state.passwordConfirm,
			gender:this.state.gender,
			tosChecked:this.state.tosChecked
		});
	}
	handleUsername = (event) => {
		this.setState({
			username:event.target.value,
			password:this.state.password,
			passwordConfirm:this.state.passwordConfirm,
			gender:this.state.gender,
			tosChecked:this.state.tosChecked
		});
	}


	
	handleSignupButton = (event) => {
		//to managerpage
		/*this.setState(
			{redirectToManager : true}
		);*/
		event.preventDefault();
		console.log(this.state);
		let data = {
			username: this.state.username,
			password: this.state.password,
			gender: this.state.gender
		};
		if(this.state.username && this.state.password){
			if(this.state.password === this.state.passwordConfirm){
				if(this.state.tosChecked){
					fetch('http://localhost:3001/auth/signup',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(data)
					}).then((res) => {
						console.log(res);
					});
				}
			}
		}


	}
	
	handleFirstButton = () => {
		//to firstpage
		this.setState(
			{redirectToFirst : true}
		);
	}
}
