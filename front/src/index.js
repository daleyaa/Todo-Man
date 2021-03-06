import{BrowserRouter } from 'react-router-dom';
import {Route} from 'react-router';

import Firstpage from './first-page';
import Todopage from './todo-page';
import Managerpage from './manager-page';
import Loginpage from './login-page';
import Signuppage from './signup-page';
import MySidebar from './my-sidebar';
const React = require('react');
const ReactDOM  = require('react-dom');

class Index extends React.Component{//call first page
	
	render() {
    	return (
    		<div>
    			<Route  exact={true} path = '/' component = {Firstpage}/>
    			<Route path = '/login' component = {Loginpage}/>
    			<Route path = '/signup' component = {Signuppage}/>
    			<Route path = '/add-todo' component = {Todopage}/>
    			<Route path = '/manager' component = {Managerpage}/>
    		</div>

    	);
	}
}

ReactDOM.render(
	<BrowserRouter >
		<MySidebar content={<Index/>}/>
	</BrowserRouter >
	, document.getElementById('root'));

