import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineSetting } from 'react-icons/ai'
import { BsXLg } from 'react-icons/bs'

import { Header, Footer } from 'shared/ui'

import styles from './styles.module.scss'

function Settings() {
	return (
		<div>
			<Header />
			<div className={styles.wrapper}>
				<div className={styles.title}>
					<div className={styles.settings}>
						<AiOutlineSetting />
						<h1 className={styles.settingsTitle}>Settings</h1>
					</div>
					<Link to='/'>
						<BsXLg className={styles.exit} />
					</Link>
				</div>
				<div className={styles.contaner}>
					<div className={styles.outerWrapper}>
						<div className={styles.nav}>
							<Link to='/settings/general'>
								<span className={styles.navText}>General</span>
							</Link>
							<Link to='/settings/security'>
								<span className={styles.navText}>Security</span>
							</Link>
						</div>
					</div>
					<div className={styles.cardVariantDefault}>
						<div className={styles.section}>
							<h3 className={styles.sectionTitle}>Email</h3>
							<form>
								<input></input>
							</form>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
export default Settings
