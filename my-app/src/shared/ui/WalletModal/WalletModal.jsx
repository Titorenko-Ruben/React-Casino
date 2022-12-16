import React, { useState } from 'react'
import { IoIosClose } from 'react-icons/io'
import { IoWalletSharp } from 'react-icons/io5'
import { WalletDepositForm } from './ui/WalletDepositModal/WalletDepositForm'

import styles from './styles.module.scss'
import { WalletWithdrawForm } from './ui/WalletWithdrawModal/WalletWirhdrawForm'

function WalletModal({ showWalletModal, setShowWalletModal }) {
	const [isDepositeActive, setIsDepositeActive] = useState(true)

	return (
		<>
			{showWalletModal && (
				<div className={styles.modalWindow}>
					<div
						className={styles.overlay}
						onClick={() => setShowWalletModal(!showWalletModal)}
					></div>
					<div className={styles.window} onClick={(e) => e.stopPropagation()}>
						<div className={styles.header}>
							<div className={styles.walletTextWrapper}>
								<IoWalletSharp className={styles.walletIcon} />
								<div className={styles.walletText}>Wallet</div>
							</div>
							<button
								onClick={() => setShowWalletModal(!showWalletModal)}
								className={styles.closeBtn}
							>
								<IoIosClose className={styles.closeIcon} />
							</button>
						</div>
						<div className={styles.content}>
							<div className={styles.centerWrapper}>
								<div className={styles.tabsWrapper}>
									<div className={styles.slider}>
										<div className={styles.contentWrapper}>
											<button
												className={
													isDepositeActive
														? styles.walletBtnActive
														: styles.walletBtnDisabled
												}
												onClick={() => setIsDepositeActive(true)}
											>
												<span className={styles.walletBtnText}>Deposit</span>
											</button>
											<button
												className={
													isDepositeActive
														? styles.walletBtnDisabled
														: styles.walletBtnActive
												}
												onClick={() => setIsDepositeActive(false)}
											>
												<span className={styles.walletBtnText}>Withdraw</span>
											</button>
										</div>
									</div>
								</div>
							</div>
							{isDepositeActive ? (
								<WalletDepositForm setWalletWindow={setShowWalletModal} />
							) : (
								<WalletWithdrawForm setWalletWindow={setShowWalletModal} />
							)}
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default WalletModal
