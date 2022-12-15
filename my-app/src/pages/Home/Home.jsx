import React from 'react'

import { Description, Discount, PlayBanner, StakeDrake } from 'shared/ui'

import styles from './styles.module.scss'

function Home({ showRegModal, setShowRegModal, isUserLoggedIn, store }) {
	return (
		<div>
			<Discount
				showRegModal={showRegModal}
				setShowRegModal={setShowRegModal}
				isUserLoggedIn={isUserLoggedIn}
				store={store}
			/>
			<div className={styles.wrapper}>
				<Description />
				<PlayBanner />
				<StakeDrake />
			</div>
		</div>
	)
}

export default Home
