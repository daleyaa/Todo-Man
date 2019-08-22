const React = require('react');
const ReactDOM  = require('react-dom');

export default class Listtodo extends React.Component{
	
	constructor(props) {
		super(props);
    	this.state = {
    		year:0,
    		month:0,
    		day:0,
    		todo:["todo1","todo2","todo3"]
    	};
    	this.Notification = this.Notification.bind(this); 
 	}
 	
	render(){
		const todos = this.state.todo;
  		const listItems = todos.map((todo) =>	
   		<form>
				<input type="checkbox"onChange={this.checkIt} disable="false"/>
				<input type = "submit"onClick = {this.Notification} value = {todo} />
			</form>
  		);
  		
		return(
	 		<p>{listItems}</p>
		);
	}
	
	Notification(e){//for time notification	
		return (
    		this.state.year==0 && this.state.month==0&& 
			this.state.day==0 ?
				alert('Does not have a time'):
				alert('This should be done on the' +
				this.state.year +'/' + this.state.month +
				'/' + this.state.day)
    	)
    	e.preventDefault();
	}
	
	checkIt(el){//action for checkbox	
		el.checked?
      	el.disabled = false:
         el.disabled = true;
   }
   
}

