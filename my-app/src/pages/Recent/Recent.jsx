import { React, useState } from 'react'

import PromotionImg from 'assets/img/group-banner.png'
import styles from './styles.module.scss'

function Recent() {
	const [isDepositeActive, setIsDepositeActive] = useState(true)

	return (
		<div className={styles.scrollable}>
			<div className={styles.recentWrapper}>
				<div className={styles.titleWrapper}>
					<div className={styles.bg}></div>

					<div className={styles.central}>
						<div className={styles.pageTitle}>Resent</div>
						<div className={styles.pageLogo}></div>
						<img className={styles.imgBg} src={PromotionImg} alt='Promotion' />
					</div>
				</div>

				<div className={styles.bgWrapper}>
					<div className={styles.cardWrapper}>
						<div className={styles.mainTitle}>Resent</div>
						<div className={styles.contentWrapper}>
							<button
								className={
									isDepositeActive
										? styles.depositBtnActive
										: styles.depositBtnDisabled
								}
								onClick={() => setIsDepositeActive(true)}
							>
								<span className={styles.depositBtnText}>My Deposit</span>
							</button>
							<button
								className={
									isDepositeActive
										? styles.depositBtnDisabled
										: styles.depositBtnActive
								}
								onClick={() => setIsDepositeActive(false)}
							>
								<span className={styles.depositBtnText}>My Withdraw</span>
							</button>
							{/* <button
								className={
									isDepositeActive
										? styles.depositBtnDisabled
										: styles.depositBtnActive
								}
								onClick={() => setIsDepositeActive(false)}
							>
								<span className={styles.depositBtnText}>W</span>
							</button> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Recent
