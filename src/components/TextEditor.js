import { useState } from 'react'
import styles from './TextEditor.module.css'

const TextEditor = (props) => {

	const [front, setFront] = useState('')
	const [back, setBack] = useState('')

	const handleSetFront = (e) => {
		setFront(e.target.value)
	}
	const handleSetBack = (e) => {
		setBack(e.target.value)
	}
	return (
		<div className={styles['text-editor']}>
			<div className={styles['topic-section']}>
				<label htmlFor="new-topic">Add Question/Topic</label>
				<textarea
					id="new-topic"
					name="front"
					className={styles['textarea-topic']}
					onChange={handleSetFront}>
					{front}
				</textarea>
			</div>
			<div className={styles['answer-section']}>
				<label htmlFor="new-answer">Add Answer</label>
				<textarea id="new-answer" name="back" className={styles['textarea-answer']} onChange={handleSetBack}>{back}</textarea>
			</div>
			<div className={styles.buttons}>
				<button onClick={() => props.onCreate(front, back)}>ADD</button>
				<button onClick={props.onClose}>CANCEL</button>

			</div>

		</div>
	)
}

export default TextEditor;