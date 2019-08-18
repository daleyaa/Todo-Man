import {Router, Route} from 'react-router';
import { HashRouter } from 'react-router-dom';
import Todo_page from './todo-page';
import Login_page from './login-page';
import First_page from './first-page';
import Button from './button';
import b from './b.jpg';
import c from './c.jpg';
const React = require('react');
const ReactDOM  = require('react-dom');
export default class Manager_page extends React.Component{
	
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
    	this.Notification = this.Notification.bind(this); 
 	}

 	render(){
 		
		return(
			<div>
				<h1>Hi {this.state.username}!</h1>
				{this.profile()}
				<p></p>			
				{this.listTodo()}
				<input type = "submit" onClick = {this.newTask}
					 value = "New task" />
				<input type = "submit" onClick = {this.Logout}
				 value = "log out" />
			</div>
		);		
	}
	
	newTask(){//button newTask
		const routes = (
			<HashRouter>
				<Router>
					<Route path = "/todo_page" 
						component = {Todo_page}/>	
				</Router>
			</HashRouter>	
		);
		ReactDOM.render(<Todo_page/>,document.getElementById('root'));
	}
	Logout(){//button logout
		const routes = (
			<HashRouter>
				<Router>
					<Route path = "/first_page" 
						component = {First_page}/>	
				</Router>
			</HashRouter>	
		);
		ReactDOM.render(<First_page/>, document.getElementById('root'));
	}
	
	Notification(e){//for time notification
			
		return (
    		this.state.year==0 && this.state.month==0&& 
			this.state.day==0 ?
				alert('Does not have a time'):
				alert('This should be done on the' +
				this.state.year +'/' + this.state.month +
				'/' + this.state.day)
    	)
    	e.preventDefault();
	}
	
	checkIt(el){//action for checkbox	
		el.checked?
      	el.disabled = false:
         el.disabled = true;
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
