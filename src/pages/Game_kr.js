import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Game_kr = (props) => {
	const navigate = useNavigate();
	return (
		<>
			<h3>Please select one of the 2 games below:</h3>
			<ul>
				<li><button onClick={() => navigate('/lan/kr/cross')}>Crossword Game</button></li>
				<li><button onClick={() => navigate('/lan/kr/matching')}>Matching Game</button></li>
                <li><button onClick={() => navigate('/')}>return to menu</button></li>
			</ul>
		</>
	);
};

export default Game_kr;