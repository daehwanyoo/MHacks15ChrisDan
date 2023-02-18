import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Game_kr = (props) => {
	const navigate = useNavigate();
	return (
		<>
		<blockquote class="blockquote text-center">
 	 <p class="mb-0">Please select one of the 2 games below:</p>
 	 </blockquote>
	  <ul>
				<div class="text-center">
					<a href="/lan/kr/cross" class="btn btn-primary" role="button">Crossword Game</a>
				</div>
				<div class="text-center">
					<a href="/lan/kr/matching" class="btn btn-primary" role="button">Matching Game</a>
				</div>
				<div class="col border-end  d-flex justify-content-center align-items-center">
					<a href="/" class="btn btn-primary" role="button">return to menu</a>
				</div>
			</ul>
		</>
	);
};

export default Game_kr;