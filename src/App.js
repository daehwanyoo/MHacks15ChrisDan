import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Game_pt from './pages/Game_pt'
import Game_kr from './pages/Game_kr'
import Game_kr_cross from './pages/games/Game_kr_cross'
import Game_pt_cross from './pages/games/Game_pt_cross'
import Game_kr_match from './pages/games/Game_kr_match'
import Game_pt_match from './pages/games/Game_pt_match'



const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Main />}></Route>
          <Route path="/lan/pt/*" element={<Game_pt/>}></Route>
          <Route path="/lan/pt/cross" element={<Game_pt_cross/>}></Route>
          <Route path="/lan/pt/match" element={<Game_pt_match/>}></Route>
          <Route path="/lan/kr/*" element={<Game_kr/>}></Route>
          <Route path="/lan/kr/cross" element={<Game_kr_cross/>}></Route>
          <Route path="/lan/kr/match" element={<Game_kr_match/>}></Route>   
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;