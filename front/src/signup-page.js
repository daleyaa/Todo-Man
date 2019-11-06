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
    	this.state = {username:''};
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
								<Form.Input fluid icon='user' iconPosition='left' placeholder='username' />
								<Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'/>
								<Form.Input fluid icon='lock' iconPosition='left' placeholder='Confirm Password' type='password'/>
								<Form.Field required>
    								<Select  placeholder='gender' options={gender} />
    							</Form.Field>
    				
    							<Form.Field required>
      								<Checkbox label='I agree to the Terms and Conditions' />
    							</Form.Field>
								<Button color='teal' onClick={this.handleManagerButton } fluid size='large'>
		  							Sign up
								</Button>
	  						</Segment>
						</Form>
	
  					</Grid.Column>
				</Grid>
    				
			);
		}
	}
	
	handleManagerButton = () => {
		//to managerpage
		this.setState(
			{redirectToManager : true}
		);
	}
	
	handleFirstButton = () => {
		//to firstpage
		this.setState(
			{redirectToFirst : true}
		);
	}
}
