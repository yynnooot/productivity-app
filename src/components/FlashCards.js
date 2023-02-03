import { useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import FlashCard from './FlashCard'
import TextEditor from './TextEditor'
import Modal from './Modal'
import styles from './FlashCards.module.css'

const FlashCards = () => {
	const [cards, setCards] = useLocalStorage('flash-cards', [])
	const [activeIndex, setActiveIndex] = useState(0)
	const [isModal, setIsModal] = useState(false)
	const handlePrev = () => {
		setActiveIndex(activeIndex === 0 ? cards.length - 1 : activeIndex - 1)
	}

	const handleNext = () => {
		setActiveIndex(activeIndex === cards.length - 1 ? 0 : activeIndex + 1)
	}
	const handleCreateCard = (front, back) => {
		const card = {
			id: Date.now(),
			front,
			back
		}
		const newCards = [...cards, card]
		setCards(newCards)
		setIsModal(false)
	}
	const handleOpenEditorModal = () => {
		setIsModal(true)
	}

	const handleClose = () => {
		setIsModal(false)
	}

	return (
		<div className={styles['flash-cards']}>
			<div className={styles['header']}>
				<div>Flash Cards</div>
				<div onClick={handleOpenEditorModal} className={styles['add-button']}></div>
			</div>
			{/* <div className={styles['create-button']} onClick={handleOpenEditorModal}>Create New Card</div> */}
			<div className={styles['arrows']}>
				<div className={styles['prev']} onClick={handlePrev}>
					<i className={styles['arrow-prev']}></i>
					<div>PREVIOUS</div>
				</div>
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
						<FlashCard
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

export default FlashCards