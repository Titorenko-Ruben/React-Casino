import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowDown, IoIosArrowUp, IoIosPaper } from 'react-icons/io'
import { IoWalletSharp, IoSettingsSharp, IoLogOutSharp } from 'react-icons/io5'
import { HiOutlineCurrencyDollar, HiOutlineChatAlt2 } from 'react-icons/hi'
import { ImArrowUp } from 'react-icons/im'

import stakeLogo from 'assets/img/stakeLogo.jpg'
import person from 'assets/img/person.png'
import vault from 'assets/icons/vault.svg'

import { Store } from 'app/App'
import { BalanceWindow } from 'shared/ui'

import styles from './styles.module.scss'

function UserHeader({ setShowWalletModal, showWalletModal }) {
	const [store, setStore] = useContext(Store)
	const [showBalanceModal, setShowBalanceModal] = useState(false)
	const [isUserWindowOpen, setIsUserWindowOpen] = useState(false)
	const navigate = useNavigate()
	function logout() {
		setStore({
			user: {
				balance: '',
				email: '',
				username: '',
				day: '',
				month: '',
				year: '',
				password: '',
				cardInfo: {
					number: '',
					month: '',
					year: '',
					holder: '',
					cvv: ''
				}
			},
			isUserLoggedIn: false
		})
	}

	return (
		<div className={styles.headerWrapper}>
			<div className={styles.header}>
				<div className={styles.container}>
					<div className={styles.navigationContainer}>
						<div>
							<Link to='/'>
								<img
									className={styles.logoImg}
									alt='Stake logo'
									src={stakeLogo}
								/>
							</Link>
						</div>
						<div className={styles.balanceWrapper}>
							<div className={styles.balance}>
								<div className={styles.dropdown}>
									<div className={styles.wrapper}>
										<button
											className={styles.moneyWrapper}
											onClick={() => setShowBalanceModal(!showBalanceModal)}
										>
											<span className={styles.content}>
												<div className={styles.wrap}>
													<div className={styles.currency}>
														<div className={styles.currencyContent}>
															<span className={styles.currencyContent}>
																<span className={styles.currencyText}>
																	{store.user.balance
																		? store.user.balance
																		: '0.000'}
																</span>
															</span>
															<span className={styles.iconWrap}>
																<HiOutlineCurrencyDollar />
															</span>
														</div>
													</div>
												</div>
												{showBalanceModal ? (
													<IoIosArrowUp style={{ marginLeft: '.5rem' }} />
												) : (
													<IoIosArrowDown style={{ marginLeft: '.5rem' }} />
												)}
											</span>
										</button>
										{showBalanceModal && <BalanceWindow />}
									</div>
								</div>
							</div>
							<button
								className={styles.walletButton}
								onClick={() => setShowWalletModal(!showWalletModal)}
							>
								<span className={styles.walletButtonText}>Wallet</span>
							</button>
						</div>
						<div className={styles.userBtns}>
							<div className={styles.dropdown}>
								<button
									className={styles.userWindowButton}
									onClick={() => setIsUserWindowOpen(!isUserWindowOpen)}
								>
									<span className={styles.userWindowImgWrapper}>
										<img
											src={person}
											className={styles.imgPerson}
											alt='person'
										/>
									</span>
								</button>
								{isUserWindowOpen && (
									<div className={styles.userToolWindowWraper}>
										<ImArrowUp className={styles.arrowIcon} />
										<div className={styles.userToolWindow}>
											<button
												className={styles.userTool}
												onClick={() => setShowWalletModal(true)}
											>
												<IoWalletSharp className={styles.userToolIcon} />
												<div className={styles.userToolText}>Wallet</div>
											</button>
											<button
												className={styles.userTool}
												onClick={() => {
													navigate('/vault')
												}}
											>
												<img
													src={vault}
													className={styles.userToolIcon}
													alt='Vault'
												/>
												<div className={styles.userToolText}>Vault</div>
											</button>
											<button
												className={styles.userTool}
												onClick={() => {
													navigate('/transactions')
												}}
											>
												<IoIosPaper className={styles.userToolIcon} />
												<div className={styles.userToolText}>Transactions</div>
											</button>
											<button
												className={styles.userTool}
												onClick={() => {
													navigate('/settings')
												}}
											>
												<IoSettingsSharp className={styles.userToolIcon} />
												<div className={styles.userToolText}>Settings</div>
											</button>
											<button
												className={styles.userTool}
												onClick={() => logout()}
											>
												<IoLogOutSharp className={styles.userToolIcon} />
												<div className={styles.userToolText}>Logout</div>
											</button>
										</div>
									</div>
								)}
							</div>
							<div className={styles.dropdown}>
								<button className={styles.userWindowButton}>
									<span className={styles.userWindowImgWrapper}>
										<HiOutlineChatAlt2 className={styles.imgPerson} />
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserHeader
