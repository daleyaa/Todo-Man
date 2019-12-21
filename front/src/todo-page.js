import './App.css';
import { Redirect} from 'react-router';
import { Grid, Form , Segment, Button} from 'semantic-ui-react';

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

  				<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
  					<Grid.Column style={{ maxWidth: 450 }}>
 						<h1 class='main-font' textAlign='center'>new Todo</h1> 
						<Form size='large'>

	  						<Segment stacked>
								<Form.Input fluid icon='tasks' iconPosition='left' placeholder='Todo' />
								<Form.Input fluid icon='calendar alternate' iconPosition='left' placeholder='Year'/>
								<Form.Input fluid icon='calendar alternate outline' iconPosition='left' placeholder='Month' />
								<Form.Input fluid icon='calendar' iconPosition='left' placeholder='Day' />
		

								<Button color='teal' onClick={this.handleSaveButton } fluid size='large'>
		  							save
								</Button>
	  						</Segment>
						</Form>
 					</Grid.Column>
				</Grid>
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
		
	handleSaveButton= () => {//to managerpage
		this.setState(
			{redirectToManager : true}
		);
	}
}