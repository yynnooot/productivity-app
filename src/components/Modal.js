import ReactDom from 'react-dom'
import styles from './Modal.module.css'

const Modal = ({ onClose, children }) => {
	return (
		ReactDom.createPortal(
			<>
				<div className={styles.modal}>
					{children}
				</div>
			</>,
			document.getElementById('modal-root')
		)

	)
}

export default Modal;