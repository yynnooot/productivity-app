import { useState, useEffect } from 'react'
import DropdownMenu from './DropdownMenu'
import styles from './Nav.module.css'

const NavBar = () => {
	const [isDropdown, setIsDropdown] = useState(true)
	return (
		<div className={styles.nav} >
			<div className={styles['header']}>Productivity App - Get Things Done</div>
			<div
				className={styles['dropdown']}
				onMouseOver={() => setIsDropdown(true)}
				onMouseLeave={() => setIsDropdown(false)}
			>
				<div className={styles['dropdown-label']}>Dropdown</div>
				{isDropdown && <DropdownMenu menuItems={['item1', 'item2', 'item3']} />}
			</div>
		</div >
	)
}

export default NavBar;