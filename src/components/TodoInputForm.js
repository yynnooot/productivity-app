import { useState } from 'react'
import styles from './TodoInputForm.module.css'

const TodoInputForm = ({ onAdd }) => {

	const [text, setText] = useState('')

	const handleAdd = () => {
		if (!text) return
		onAdd(text)
		setText('')
	}

	const handleEnter = (e) => {
		console.log('e.key', e.keyCode)
		if (e.key === 'Enter') {

			handleAdd()
		}
	}


	return (
		<div className={styles['input-form']}>
			<input
				type="text"
				value={text}
				className="input"
				onChange={e => setText(e.target.value)}
				onKeyDown={handleEnter}
			/>
			<button onClick={() => handleAdd(text)}>Add</button>
		</div>
	)
}

export default TodoInputForm