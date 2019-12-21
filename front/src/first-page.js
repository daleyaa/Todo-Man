import {Grid,Button } from 'semantic-ui-react';
import { Redirect} from 'react-router';
import './App.css';
import v from './v.jpg';
import w from './w.jpg';
const React = require('react');

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
					<Grid textAlign='right' verticalAlign='right' >
						<Grid.Row >
							<Grid.Column>
								<Button color='teal' onClick={this.handleLoginButton }>
            						Login
          						</Button>
		  						<Button color='gray' onClick={this.handleSignupButton } >
            						Sign up
          						</Button>
							</Grid.Column>
						</Grid.Row>
					</Grid>
					<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
					
						<Grid.Column style={{ maxWidth: 450 }}>
							<h1 class='main-font img' textAlign='center'>Welcome!</h1>
    					</Grid.Column>
							
					</Grid>
					<table>
						<tr>
							<th>
								<img verticalAlign='right' class = 'img' src={w}    width="500" height="300"/>
							</th>
							<th class='element-font'>
								<h1 class='title-color'>Don't forget your todo</h1>
								<br/>
								Keep track of your daily todos and do not involve your mind in remembering them.
								 Then just focus on doing them
							</th>
							
						</tr>
						<br/><br/><br/><br/><br/><br/>
						<tr>
							<th class='element-font'>
							
								<h1 class='title-color'>Enjoy the life</h1>
								<br/>
								You can record and manage your daily todos.
								Do all your work in a timely and orderly way and enjoy life.
							</th>
							<th>
								<img verticalAlign='right' class = 'img' src={v}    width="500" height="300"/>
							</th>
							
							
						</tr>
						
					</table>
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