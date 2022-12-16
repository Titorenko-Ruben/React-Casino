import React, { useContext } from 'react'
import { IoLogoTwitch } from 'react-icons/io'
import { AiOutlineGoogle } from 'react-icons/ai'
import { CgFacebook } from 'react-icons/cg'
import { MdWavingHand } from 'react-icons/md'

import styles from './styles.module.scss'

import welcomeTopImg from 'assets/img/sweeps-welcome-top-en.png'
import { Store } from 'app/App'

function Discount({ showRegModal, setShowRegModal, isUserLoggedIn }) {
	const [store] = useContext(Store)
	return (
		<>
			{isUserLoggedIn ? (
				<div className={styles.wrapper}>
					<div className={styles.mainRegister}>
						<div className={styles.contener}>
							<h1 className={styles.title}>
								{`Welcome back, ${store.user.username} `}
								<MdWavingHand />
							</h1>
							<button className={styles.mainBtn}>
								<span> Go to sport bettings </span>
							</button>
						</div>
					</div>
					<div className={styles.mainImg}>
						<img alt='Welcome top img' src={welcomeTopImg} />
					</div>
				</div>
			) : (
				<div className={styles.wrapper}>
					<div className={styles.mainRegister}>
						<div className={styles.contener}>
							<h1 className={styles.title}>Play Smarter</h1>
							<button
								className={styles.mainBtn}
								onClick={() => setShowRegModal(!showRegModal)}
							>
								<span> Register instanly</span>
							</button>
							<div className={styles.authWrapper}>
								<div className={styles.orContent}>
									<span className={styles.orText}>OR</span>
								</div>
							</div>
							<div className={styles.networks}>
								<button className={styles.socialNetworks}>
									<CgFacebook />
								</button>
								<button className={styles.socialNetworks}>
									<AiOutlineGoogle />
								</button>
								<button className={styles.socialNetworks}>
									<IoLogoTwitch />
								</button>
							</div>
						</div>
					</div>
					<div className={styles.mainImg}>
						<img alt='Welcome top img' src={welcomeTopImg} />
					</div>
				</div>
			)}
		</>
	)
}

export default Discount
