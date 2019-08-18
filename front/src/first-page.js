import Button from'./button';
import {Router, Route} from 'react-router';
import { HashRouter } from 'react-router-dom';
import Login_page from './login-page';
import Signup_page from './signup-page';
const React = require('react');
const ReactDOM  = require('react-dom');

export default class First_page extends React.Component{
	
	render() {
    	return (
    		<div>		
    			<h1>Welcome!</h1>
    			<Button title="login"  onClick= {this.Login}/>
    			<Button title="sign up" onClick= {this.Signup}/>
			</div>	
		);
	}
	Login(){
	//for login-page
		const routes = (
			<HashRouter>
				<Router>
					<Route path = "/login_page" component = {Login_page}/>	
				</Router>
			</HashRouter>	
		);
		ReactDOM.render(<Login_page />, document.getElementById('root'));		
	}

	Signup(){
		//for signup-page
		const routes = (
			<HashRouter>
				<Router>
					<Route path = "/signup_page" component = {Signup_page}/>	
				</Router>
			</HashRouter>	
		);
		ReactDOM.render(<Signup_page />, document.getElementById('root'));
	}
}	