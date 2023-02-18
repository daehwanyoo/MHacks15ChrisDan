import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Main from './pages/Main';
import Language from './pages/Language';
import NotFound from './pages/NotFound';
import Game_pt from './pages/Game_pt'
import Game_kr from './pages/Game_kr'


const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/lan/*" element={<Language />}></Route>
          <Route path="/lan/pt/*" element={<Game_pt/>}></Route>
          <Route path="/lan/kr/*" element={<Game_kr/>}></Route>   
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;