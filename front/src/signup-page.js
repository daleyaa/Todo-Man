import Login_page from './login-page';
import {Router, Route} from 'react-router';
import { HashRouter } from 'react-router-dom';
const React = require('react');
const ReactDOM  = require('react-dom');


export default class Signup_page extends React.Component{
	constructor(props) {
    super(props);
    this.state = {username:''};
   }
	render(){
		return(
			<div>
				<h1>sign up</h1>
				<form>
  					<label>
    					<p>username:</p>
   					 <input type="text" name="username" />
   		
    					 <p>password:</p>
      				  <input type="text"  name="password"/>
      				 <p>confirm password:</p>
      				  <input type="text" name="confirm password"/>
      				 <p>gender:</p>
      				 <form>
      					<select>
        						<option value=" "></option>
        						<option value="Male">Male</option>
        						<option value="Female">Female</option>
      					</select>
      				 </form>			  
  					</label>
  					<p></p>
  					<input type="submit" onClick={this.Click } value="sign up" />
  					<input type="submit" value="cancel" />
				</form>
			</div>		

		);
			
	}
	Click(){
		const routes = (
			<HashRouter>
				<Router>
					<Route path = "/login_page" component = {Login_page}/>	
				</Router>
			</HashRouter>	
		);
		ReactDOM.render(<Login_page />, document.getElementById('root'));	
	}
	
}
