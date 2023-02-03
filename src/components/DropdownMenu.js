import styles from './DropdownMenu.module.css'

const DropdownMenu = (props) => {
	return (
		<div className={styles.menu}>
			{props.menuItems.map((item, i) => {
				return (
					<div className={styles.item} key={i}>{item}</div>
				)
			})}
		</div>
	)
}

export default DropdownMenu;