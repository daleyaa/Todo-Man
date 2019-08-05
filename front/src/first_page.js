import Button from'./Button';
//import Page2 from './Login_page';
const React = require('react');
const ReactDOM  = require('react-dom');

export default class Page1 extends React.Component{
	render() {
    	return (
    	
    	<div>
    	<h1>Welcome!</h1>
    	<Button title="login"  onClick= {this.Login}/>
    	<Button title="sign up" onClick= {this.Signup}/>
			</div>
			
		);
	}
	/*Login(){
		
	
	}
	Signup(){}*/
}
	