import React from 'react';
import { Link } from 'react-router-dom';

const Main = (props) => {
	return (
		<>
			<h3>Main page</h3>
			<ul>
				<Link to="/lan/pt"><li>portuguese </li></Link>
				<Link to="/lan/kr"><li>korean</li></Link>
			</ul>
		</>
	);
};

export default Main;