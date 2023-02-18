import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Game_pt = (props) => {
	const navigate = useNavigate();
	return (
		<>
			<h3>Please select one of the 2 games below:</h3>
			<ul>
				<li><button onClick={() => navigate('/lan/pt/cross')}>Crossword Game</button></li>
				<li><button onClick={() => navigate('/lan/pt/matching')}>Matching Game</button></li>
				<li><button onClick={() => navigate('/lan/')}>return to menu</button></li>
			</ul>
		</>
	);
};

export default Game_pt;