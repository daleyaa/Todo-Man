import {Redirect} from 'react-router';
import { Grid, Form , Button, GridRow} from 'semantic-ui-react';

import Listtodo from './list-todo';
import './App.css';
import b from './b.jpg';
import c from './c.jpg';

const React = require('react');
const ReactDOM  = require('react-dom');

export default class Managerpage extends React.Component{
	
	constructor(props) {
		super(props);
    	this.state = {
    		username:"user",
    		gender:"Female",
    		year:0,
    		month:0,
    		day:0,
    		todo:["todo1","todo2","todo3"]
    	};
    	this.profile = this.profile.bind(this); 
    	
 	}
 	
 	render(){
 		if(this.state.redirectToTodo) {
			return(
				<Redirect push to="/add-todo"/>
			);
		
		}
		else if(this.state.redirectToFirst) {
			return(
				<Redirect push to="/"/>
			);
		}
		else{
			return(
				<Form >
					<Grid columns={3} textAlign='center'>
						<GridRow >
							<Grid.Column></Grid.Column>
							<Grid.Column  >
								{this.profile()}
								<h1 class='main-font'>Hi {this.state.username}!</h1>	
							</Grid.Column>
							<Grid.Column   verticalAlign='center'>	
							</Grid.Column>
						</GridRow>
					</Grid>
					<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
   						<Grid.Column style={{ maxWidth: 450 }}>	
							<Listtodo/>
							<Button color='teal' onClick={this.handlenewTodoButton } fluid size='large'>
           						new todo
          					</Button>
     					</Grid.Column>
   					</Grid>
				</Form>
			);		
		}
	}
	
	handlenewTodoButton= () => {
		//to todopage
		this.setState(
			{redirectToTodo: true}
		);
	}
	
	handleLogoutButton= () => {
		//to firstpage
		this.setState(
			{redirectToFirst : true}
		);
	}

	profile(){//import image
 		return(
			<img verticalAlign='right' src = {this.state.gender == "Female"? b:c}
			 	alt = {this.state.gender == "Female"? 
			 	"female":"male"} width="200" height="150"/>
		);		
 	}

}
