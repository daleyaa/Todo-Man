import Button from './Button';
import Page1 from './first_page';
const React = require('react');
const ReactDOM  = require('react-dom');
//import './index.css';
//import App from './App';
class Post extends React.Component{
	render() {
    	return (
    		<Page1 />
    	);
	}
}

ReactDOM.render(<Post />, document.getElementById('root'));

