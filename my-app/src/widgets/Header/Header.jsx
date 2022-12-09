import React from 'react'
import { Link } from 'react-router-dom'

import stakeLogo from 'assets/img/stakeLogo.jpg'

import styles from './styles.module.scss'

function Header({
	setShowRegModal,
	showRegModal,
	setShowSignInModal,
	showSignInModal
}) {
	return (
		<header>
			<div className={styles.headerWrapper}>
				<div>
					<Link to='/'>
						<img className={styles.logoImg} alt='Stake logo' src={stakeLogo} />
					</Link>
				</div>
				<div className={styles.btnField}>
					<button
						onClick={() => setShowSignInModal(!showSignInModal)}
						className={styles.signInBtn}
					>
						<span className={styles.signInBtnText}>Sign In</span>
					</button>
					<button
						onClick={() => setShowRegModal(!showRegModal)}
						className={styles.btnReg}
					>
						<span className={styles.btnText}>Register</span>
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
