import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const Main = (props) => {
	const navigate = useNavigate();
	return (
		<>
			<blockquote class="blockquote text-center">
 	 <p class="mb-0">Please select one of the 2 languages below:</p>
 	 </blockquote>
			<ul>
				<div class="text-center">
					<a href="/lan/pt" class="btn btn-primary" role="button">Portuguese</a>
				</div>
				<div class="text-center">
					<a href="/lan/kr" class="btn btn-primary" role="button">Korean</a>
				</div>
			</ul>
		</>
	);
};

export default Main;