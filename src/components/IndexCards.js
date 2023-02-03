import { useReducer, useState, useEffect } from 'react'
import IndexCard from './IndexCard'
import TextEditor from './TextEditor'
import Modal from './Modal'
import styles from './IndexCards.module.css'

const reducer = (state, action) => {
	switch (action.type) {
		case 'add':
			console.log("SHOULD BE CREATING:", action.payload)
			return [...state, action.payload]
		case 'remove':
			return state
		default:
			return state
	}
}

const initialState = [
	{
		id: '1',
		front: 'front of card 1',
		back: 'back of card 1'
	},
	{
		id: '2',
		front: 'front of card 2',
		back: 'back of card 2'
	},
	{
		id: '3',
		front: 'front of card 3',
		back: 'back of 3'
	}
]
const IndexCards = () => {
	const [cards, dispatch] = useReducer(reducer, initialState)
	const [activeIndex, setActiveIndex] = useState(0)
	const [isModal, setIsModal] = useState(false)
	const handlePrev = () => {
		setActiveIndex(activeIndex === 0 ? cards.length - 1 : activeIndex - 1)
	}

	const handleNext = () => {
		setActiveIndex(activeIndex === cards.length - 1 ? 0 : activeIndex + 1)
	}
	const handleCreateCard = (front, back) => {
		const todo = {
			id: Date.now(),
			front,
			back
		}
		dispatch({
			type: 'add',
			payload: todo
		})
		setIsModal(false)
	}
	const handleOpenEditorModal = () => {
		console.log('OPEN MODAL')
		setIsModal(true)
	}

	const handleClose = () => {
		setIsModal(false)
	}

	return (
		<div className={styles['index-cards']}>
			<div className={styles['header']}>Index Cards</div>
			<div className={styles['create-button']} onClick={handleOpenEditorModal}>Create New Card</div>
			<div className={styles['arrows']}>
				<div className={styles['prev']} onClick={handlePrev}>
					<i className={styles['arrow-prev']}></i>
					<div>PREVIOUS</div>
				</div>
				{/* <div className={styles['arrow-next']} onClick={handleNext}>NEXT</div> */}
				<div className={styles['next']} onClick={handleNext}>
					<div>NEXT</div>
					<div className={styles['arrow-next']}></div>
				</div>
			</div>
			<div
				className={styles['window']}
				style={{ transform: `translateX(-${activeIndex * 100}%)` }}
			>
				{cards.map(card => {
					return (
						<IndexCard
							key={card.id}
							id={card.id}
							front={card.front}
							back={card.back}
						/>
					)
				})}
			</div>
			{
				isModal
				&&
				<Modal onClose={handleClose}>
					<TextEditor onClose={handleClose} onCreate={handleCreateCard} />
				</Modal>
			}
		</div >
	)
}

export default IndexCards