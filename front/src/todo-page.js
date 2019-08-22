import Managerpage from './manager-page';
import {Router, Route, Redirect} from 'react-router';

const React = require('react');
const ReactDOM  = require('react-dom');

export default class Todopage extends React.Component{
	
	constructor(props) {
		super(props);
    	this.state = {
    		todo:'',
    		year:'',
    		month: '',
    		Day:''
    	};
    	this.handleTodoChange = this.handleTodoChange.bind(this);
    	this.handleYearChange = this.handleYearChange.bind(this);
    	this.handleMonthChange = this.handleMonthChange.bind(this);
    	this.handleDayChange = this.handleDayChange.bind(this);
 	}
 	
	render(){
		if(this.state.redirectToManager) {
			return(
				<Redirect push to="/manager"/>
			);
		}
		else{
			return(
				<div>
					<form>
  						<label>
    						<p>New todo:</p>
   					 	<input type = "text" 
   					 		value= {this.state.todo} onChange=
   					 		{this.handleTodoChange} name = "NewTodo" />
    						<p>Year:</p>
   					 	<input type = "text" 
   					 		value= {this.state.year} onChange=
   					 		{this.handleYearChange} name = "Year" />
   					 	<p>Month:</p>
   					 	<input type = "text" 
   					 		value= {this.state.month} onChange=
   					 		{this.handleMonthChange} name = "month" />
   					 	<p>Day:</p>
   					 	<input type = "text" 
   					 		value= {this.state.day} onChange=
   					 		{this.handleDayChange} name = "Day" />
  						</label>
  						<p></p>
  						<input type = "submit" onClick = 
  							{this.handelBackButton} value = "save" />
  						<input type = "submit" onClick = 
  							{this.handelBackButton} value = "cancel" />
					</form>
				</div>
			)
		}
	}
	
	handleYearChange(e) {	//setstate for change year	 	
    	this.setState({ year: e.target.value});
	}
		
	handleMonthChange(e) {	//setstate for change month 	
    	this.setState({ month: e.target.value});
	}
		
	handleDayChange(e) {		 //setstate for change day
    	this.setState({ day: e.target.value});
	}
		
	handleTodoChange(e) {	//setstate for change todo	
    	this.setState({ todo: e.target.value});
	}
		
	handelBackButton= () => {//to managerpage
		this.setState(
			{redirectToManager : true}
		);
	}
}