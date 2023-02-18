import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Game_kr = (props) => {
	const navigate = useNavigate();
	return (
		<>
			<h3>Please select one of the 2 games below:</h3>
			<ul>
				<li><button onClick={() => navigate('/lan/kr/matching')}>Crossword Game</button></li>
				<li><button onClick={() => navigate('/lan/kr/cross')}>Matching Game</button></li>
				<li><button onClick={() => navigate('/lan/')>Return to Menu</button></li>
			</ul>
		</>
	);
};

export default Game_kr;