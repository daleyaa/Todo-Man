import {Button,Icon } from 'semantic-ui-react';

const React = require('react');

export default class Buttonn extends React.Component  {
  render() {
		//created button
   	return (
      <div >
        <Button animated='fade' onClick= {this.props.onClick} color={this.props.Color} >
  
          <Button.Content visible>{this.props.title}</Button.Content>
          <Button.Content hidden> <Icon name={this.props.icons} /></Button.Content>
        </Button>
      </div>
		);	
	}
}
