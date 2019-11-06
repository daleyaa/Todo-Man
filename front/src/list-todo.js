import {Redirect} from 'react-router';

import{Button, Grid, Modal} from 'semantic-ui-react';

import { Dropdown, Menu } from 'semantic-ui-react'

import './App.css';
const React = require('react');
const ReactDOM  = require('react-dom');


export default class Listtodo extends React.Component{
	
	constructor(props) {
		super(props);
    	this.state = {
    		name_todo:'',
    		year:1375,
    		month:5,
			day:1,
			open:false,
    		todo:["todo1","todo2","todo3"]
    	};
    	this.Notification = this.Notification.bind(this); 
    	this.handleDeleteButton = this.handleDeleteButton.bind(this);
 	}
 	
	render(){
		if(this.state.redirectToTodo) {
			return(
				<Redirect push to="/add-todo"/>
			);
		}
		else{
			const Menus = [
  				{ key: 'Edit', text: 'Edit', value: 'Edit', onClick:this.handlenewTodoButton},
				{ key: 'Delete', text: 'Delete', value:this.state.name_todo, onClick:this.handleDeleteButton },
			]
			const { activeItem } = this.state;
			const { open } = this.state
			const todos = this.state.todo;
  			const listItems = todos.map((todo) =>	
   				<form>
   					<Grid columns={8}>
      					<Grid.Column verticalAlign='right'>
							<input type="checkbox"onChange={this.checkIt} disable="false"/>
						</Grid.Column>
						<Grid.Column verticalAlign='left'>
							<Menu vertical>
          						<Dropdown text={todo} pointing='left' className='link item'>
            						<Dropdown.Menu>
              							<Dropdown.Item onClick={this.handlenewTodoButton }>Edit</Dropdown.Item>
              							<Dropdown.Item onClick={this.handleDeleteButton }>Delete</Dropdown.Item>
			  							<Dropdown.Item onClick={this.show}>Time</Dropdown.Item>
			  							<Modal open={open} onClose={this.close}>
          									<Modal.Header>Todo time</Modal.Header>
          									<Modal.Content>{this.Notification()}</Modal.Content>
          									<Modal.Actions>
            									<Button negative onClick={this.close}>close</Button>
         									</Modal.Actions>
        								</Modal>
            						</Dropdown.Menu>
          						</Dropdown>
        					</Menu>	
						</Grid.Column>
					</Grid>	
				</form>
			);
			return(
	 			<p>{listItems}</p>
			);
		}
	}

	Notification(e){//for time notification	
		return (
    		this.state.year==0 && this.state.month==0&& 
			this.state.day==0 ?
				<p >No time </p>:
				<p >This todo must be done in {this.state.year}/{this.state.month }/{ this.state.day}</p>
    	)
    	e.preventDefault();
	}
		
	checkIt(el){//action for checkbox	
		el.checked?
      	el.disabled = false:
         el.disabled = true;
   }
   handlenewTodoButton= () => {
		//to todopage
		this.setState(
			{redirectToTodo: true}
		);
	}
	handleDeleteButton(e){
		//to delete
		this.setState(
			{name_todo:e.target.value}
		);
   
}
	show = ()=> this.setState({open: true })
  	close = () => this.setState({ open: false })
}

