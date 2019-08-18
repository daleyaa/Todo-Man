const React = require('react');

export default class Button extends React.Component  {
	
	render() {
		/*created button*/
   	return (
    		<div>
				<button onClick= {this.props.onClick}>
      			{this.props.title}
   			</button>			
			</div>
		);	
	}
	
}
