import { useState } from 'react'
import styles from './TodoListItem.module.css'

const TodoListItem = (props) => {
	const [isEditing, setIsEditing] = useState(false)
	const [todoText, setTodoText] = useState(props.text)

	const handleTextClick = () => {
		if (isEditing) return
		setIsEditing(true)
	}

	const handleEditOnBlur = () => {
		if (props.text !== todoText) {
			props.onEdit(props.id, todoText)
		}
		setIsEditing(false)
	}

	return (
		<div className={styles['todo-list-item']}>
			<input
				type="checkbox"
				className={styles.checkbox}
				checked={props.isComplete}
				onChange={() => props.onToggle(props.id)}
			/>
			<input
				className={styles[isEditing ? 'todo-list-text-editing' : 'todo-list-text']}
				type="text"
				value={todoText}
				onClick={() => handleTextClick(!isEditing)}
				onBlur={() => handleEditOnBlur()}
				onChange={(e) => setTodoText(e.target.value)}
			/>
			<button className={styles['delete-button']} onClick={() => props.onDelete(props.id)} alt="delete-todo" />
		</div>
	)
}

export default TodoListItem