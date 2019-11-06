import React from 'react';
import {Button, Icon,  Menu, Segment ,Sidebar }from 'semantic-ui-react';
import {Redirect} from 'react-router';
export default class MySidebar extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			menuVisible: false
		};
	}
	render(){
		if (this.state.redirectToLogin) {
			return(
				<Redirect push to="/login"/>
			);
		}
		else if(this.state.redirectToSignup) {
			return(
				<Redirect push to="/signup"/>
			);
		}
		else if(this.state.redirectToManager) {
			return(
				<Redirect push to="/manager"/>
			);
		}
		else if(this.state.redirectToTodo) {
			return(
				<Redirect push to="/add-todo"/>
			);
		
		}
		else if(this.state.redirectToFirst) {
			return(
				<Redirect push to="/"/>
			);
		}
		else{
		return(
			<Sidebar.Pushable as={Segment}>
				<Sidebar 
					as={Menu}
					animation='push'
					color='teal'	
					icon='labeled'
			 		inverted
			 		vertical
			 		visible={this.state.menuVisible}
			 		width='thin'
				>
					<Menu.Item as='a' href='/login'>
						<Icon name ='sign-in'/>
						Login
					</Menu.Item>
					<Menu.Item as='a'href='/signup'>
						<Icon name ='signup' />
						
						Sign up
					</Menu.Item>
					<Menu.Item as='a' href='/manager'>
						<Icon name ='numbered list'/>
						Manager
					</Menu.Item>
					<Menu.Item as='a'href='/add-todo'>
						<Icon name ='tasks'/>
						Todo
					</Menu.Item>
					<Menu.Item as='a'href='/' >
						<Icon name ='sign out' />
						
						Log out
					</Menu.Item>
				</Sidebar>
				<Sidebar.Pusher>
					<Segment basic>
						<Button icon='sidebar' onClick={this.handleMenuButton} color='teal'/>
						{this.props.content}
					</Segment>
				</Sidebar.Pusher>
			</Sidebar.Pushable>	
		)
	}
}
	handleMenuButton = () => {
		
		this.setState({
			menuVisible : !this.state.menuVisible
		});
	}
}
