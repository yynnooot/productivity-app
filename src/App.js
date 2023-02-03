import React from 'react'
import './App.module.css';
import Nav from './components/Nav';
import Quotes from './components/Quotes';
import MotivationalQuotes from './components/MotivationalQuotes';
import TodoList from './components/TodoList'
import IndexCards from './components/IndexCards'

function App() {
	return (
		<div className="App">
			<Nav />
			{/* <Quotes /> */}
			{/* <MotivationalQuotes /> */}
			<TodoList />
			<IndexCards />
		</div>
	);
}

export default App;
