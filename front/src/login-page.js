import Manager_page from './manager-page';
import {Router, Route} from 'react-router';
import { HashRouter } from 'react-router-dom';
const React = require('react');
const ReactDOM  = require('react-dom');

export default class Login_page extends React.Component{
	constructor(props) {
   	super(props);
    	this.state = {username:''};
    	this.handleChange = this.handleChange.bind(this);
 	}
 	
	render(){//form
		return( 
			<div>    
				<h1>Login</h1>
				<form>
  					<label>
    					<p>username:</p>
   					 <input type = "text" value= {this.state.username} 
   					 		onChange={this.handleChange} name = "username" />
    					 <p>password:</p>
      				 <input type = "text" name = "password"/>
  					</label>
  					<p></p>
  					<input type = "submit" onClick = {this.Click} value = "login" />
  					<input type = "submit" value = "cancel" />
					</form>				
				</div>		
		)
			
	}
	Click(){ //for router
		const routes = (
			<HashRouter>
				<Router>
					<Route path = "/manager_page" component = {Manager_page}/>	
				</Router>
			</HashRouter>	
		);
		ReactDOM.render(<Manager_page/>,
			document.getElementById('root'));
	
	}
	 handleChange(e) {
    	this.setState({username: e.target.value});
	}
	
}