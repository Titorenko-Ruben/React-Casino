import React from 'react'

import { Description, Discount, PlayBanner, StakeDrake } from 'shared/ui'

import styles from './styles.module.scss'

function Home({ showRegModal, setShowRegModal, isNavBarOpen }) {
	return (
		<div>
			<Discount
				showRegModal={showRegModal}
				setShowRegModal={setShowRegModal}
				isNavBarOpen={isNavBarOpen}
			/>
			<div
				className={
					isNavBarOpen
						? [styles.wrapper, styles.active].join(' ')
						: styles.wrapper
				}
			>
				<Description />
				<PlayBanner />
				<StakeDrake />
			</div>
		</div>
	)
}

export default Home
