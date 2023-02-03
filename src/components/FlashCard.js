import { useState } from 'react';
import styles from './FlashCard.module.css'

// should have frontback button for now
const FlashCard = ({ id, front, back }) => {
	const [isFlipped, setIsFlipped] = useState(false)
	const handleFlip = () => {
		setIsFlipped(!isFlipped)
	}
	return (
		<div className={styles['flash-card']} onClick={handleFlip}>
			{isFlipped ? back : front}
		</div>
	);
}

export default FlashCard;