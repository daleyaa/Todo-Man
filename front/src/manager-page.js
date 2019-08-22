import {Router, Route,Redirect} from 'react-router';

import Listtodo from './list-todo';
import Todopage from './todo-page';
import Loginpage from './login-page';
import Firstpage from './first-page';
import Button from './button';

import b from './b.jpg';
import c from './c.jpg';

const React = require('react');
const ReactDOM  = require('react-dom');

export default class Managerpage extends React.Component{
	
	constructor(props) {
		super(props);
    	this.state = {
    		username:"username",
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
				<div>
					<h1>Hi {this.state.username}!</h1>
					{this.profile()}
					<p></p>			
					<Listtodo/>
					<input type = "submit" onClick = {this.handlenewTodoButton}
						value = "New todo" />
					<input type = "submit" onClick = {this.handleLogoutButton}
				 		value = "log out" />
				</div>
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
	
	listTodo(){//list todo with checkbox
		const todos = this.state.todo;
  		const listItems = todos.map((todo) =>	
   		<form onsubmit ={this.Notification}>
				<input type="checkbox"onChange={this.checkIt} disable="false"/>
				<input type = "submit" value = {todo} />
			</form>   
  		);
		return(
	 		<p>{listItems}</p>
		);

	}
	
	profile(){//import image
 		return(
			<img src = {this.state.gender == "Female"? b:c}
			 	alt = {this.state.gender == "Female"? 
			 	"female":"male"} width="100" height="75"/>
		);		
 	}
}
