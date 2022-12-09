import React from 'react'
import { Link } from 'react-router-dom'
import { BsXLg } from 'react-icons/bs'

import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

import styles from './styles.module.scss'
import General from './General/General'
import Security from './Security/Security'

function Settings() {
	return (
		<div>
			<div className={styles.wrapper}>
				<div className={styles.title}>
					<div className={styles.settings}>
						<SettingsRoundedIcon className={styles.settingsIcon}  fontSize="medium"/>
						<h1 className={styles.settingsTitle}>Settings</h1>
					</div>
					<Link to='/'>
						<BsXLg className={styles.exit} />
					</Link>
				</div>
				<div className={styles.contener}>
					<div className={styles.outerWrapper}>
						<div className={styles.nav}>
							<Link to='/settings'>
								<span className={styles.navText}>General</span>
							</Link>
							<Link to='/settings'>
								<span className={styles.navText}>Security</span>
							</Link>
						</div>
					</div>

					{/* <General /> */}
					<Security />
				</div>
			</div>
		</div>
	)
}

export default Settings