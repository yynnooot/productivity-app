import { useState } from 'react';
import styles from './IndexCard.module.css'

// should have frontback button for now
const IndexCard = ({ id, front, back }) => {
	const [isFlipped, setIsFlipped] = useState(false)
	const handleFlip = () => {
		setIsFlipped(!isFlipped)
	}
	return (
		<div className={styles['index-card']} onClick={handleFlip}>
			{isFlipped ? back : front}
		</div>
	);
}

export default IndexCard;