import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const Main = (props) => {
	const navigate = useNavigate();
	return (
		<>
			<h3>Select Language</h3>
			<ul>
			<a href="/lan/pt" class="btn btn-info" role="button">Portuguese</a>
			<li/>
			<a href="/lan/kr" class="btn btn-info" role="button">Korean</a>
				
			</ul>
		</>
	);
};

export default Main;