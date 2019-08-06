import Button from './button';
import First_page from './first-page';
const React = require('react');
const ReactDOM  = require('react-dom');
//import './index.css';
//import App from './App';

class Post extends React.Component{
	
	render() {
    	return (
    		<First_page />
    	);
	}
}

ReactDOM.render(<Post />, document.getElementById('root'));

