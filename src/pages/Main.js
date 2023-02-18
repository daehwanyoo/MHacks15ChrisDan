import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Main = (props) => {
	const navigate = useNavigate();
	return (
		<>
			<h3>Select Language</h3>
			<ul>
				<li><button onClick={() => navigate('/lan/pt')}>Portuguese</button></li>
				<li><button onClick={() => navigate('/lan/kr')}>Korean</button></li>
			</ul>
		</>
	);
};

export default Main;