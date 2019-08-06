import Button from'./button';
//import Page2 from './Login_page';
const React = require('react');
const ReactDOM  = require('react-dom');

export default class First_page extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			current : "Welcome!"	,
			current2:""
		}
	}

	render() {
    	return (
    	
    		<div>
    		
    			<h1>{this.state.current}</h1>
    			<p>{this.state.current2}</p>
    			<Button title="login"  onClick= {this.Login}/>
    			<Button title="sign up" onClick= {this.Signup}/>
			</div>
			
		);
	}
	Login=()=> {
		this.setState({
			current : ""	,
			current2 : "Welcome!"		
		})
	}
	/*Signup(){}*/
}
	