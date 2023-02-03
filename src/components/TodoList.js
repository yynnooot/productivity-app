import { useReducer, useEffect } from 'react'
import TodoListItem from './TodoListItem'

import styles from './TodoList.module.css'
import TodoInputForm from './TodoInputForm'

const reducer = (state, action) => {
	switch (action.type) {
		case 'add':
			return [...state, action.payload]
		case 'delete':
			return state.filter(todo => todo.id !== action.payload)
		case 'edit':
			return state.map(todo => {
				if (todo.id === action.payload.id) {
					todo.text = action.payload.text
				}
				return todo
			})
		case 'toggle':
			return state.map(todo => {
				if (todo.id === action.payload) {
					return { ...todo, isComplete: !todo.isComplete }
				}
				return todo
			})
		default:
			return state
	}
}
const initialState = []

const TodoList = () => {

	const [todos, dispatch] = useReducer(reducer, initialState)

	const handleAddTodo = (text) => {
		const todo = {
			id: Date.now(),
			text,
			isComplete: false
		}
		dispatch({
			type: 'add',
			payload: todo
		})
	}

	const handleDeleteTodo = (id) => {
		dispatch({
			type: 'delete',
			payload: id
		})
	}
	const handleEditTodo = (id, text) => {
		dispatch({
			type: 'edit',
			payload: {
				id,
				text
			}
		})
	}
	const handleToggleComplete = (id) => {
		dispatch({
			type: 'toggle',
			payload: id
		})
	}


	return (
		<div className={styles['todo-list']}>
			<div className={styles['header']}>Add Today's Goals</div>
			<div className={styles['input-row']}>
				<TodoInputForm onAdd={handleAddTodo} />
			</div>
			<div className={styles['todo-list-items']}>
				{todos.map((todo) => {
					return (
						<TodoListItem
							key={todo.id}
							id={todo.id}
							text={todo.text}
							isComplete={todo.isComplete}
							onEdit={handleEditTodo}
							onDelete={handleDeleteTodo}
							onToggle={handleToggleComplete}
						/>
					)
				})}
			</div>
		</div>
	)
}

export default TodoList