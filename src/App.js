import React from 'react'
import './App.module.css';
import Nav from './components/Nav';
import Quotes from './components/Quotes';
import MotivationalQuotes from './components/MotivationalQuotes';
import TodoList from './components/TodoList'
import FlashCards from './components/FlashCards'

function App() {
	return (
		<div className="App">
			<Nav />
			{/* <Quotes /> */}
			{/* <MotivationalQuotes /> */}
			<TodoList />
			<FlashCards />
		</div>
	);
}

export default App;
