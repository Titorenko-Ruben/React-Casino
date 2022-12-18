import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { GiPresent, GiTennisBall, GiSoccerBall } from 'react-icons/gi'
import { IoIosBasketball, IoIosMicrophone } from 'react-icons/io'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { BiReset } from 'react-icons/bi'
import { FaHandshake } from 'react-icons/fa'

import styles from './styles.module.scss'

function NavBar({ setIsNavBarOpen, isNavBarOpen }) {
	const location = useLocation()
	return (
		<div
			className={
				isNavBarOpen
					? [styles.navBarWrapper]
					: [styles.navBarWrapper, styles.active].join(' ')
			}
		>
			<div className={styles.header}>
				<div className={styles.style}>
					<button
						onClick={() => setIsNavBarOpen(true)}
						className={styles.hoverable}
					>
						<AiOutlineMenuUnfold
							className={styles.icon}
							style={{ color: 'white' }}
						/>
					</button>
				</div>
			</div>
			<div className={styles.scroll}>
				<div className={styles.scrollebleContent}>
					<Link to='/sports'>
						<div
							className={
								location.pathname === '/sports'
									? styles.hoverableActive
									: styles.hoverable
							}
						>
							<span className={styles.contentLoader}>
								<GiSoccerBall
									className={styles.icon}
									style={{ color: 'white' }}
								/>
							</span>
						</div>
					</Link>
					<Link to='/promotions'>
						<div
							className={
								location.pathname === '/promotions'
									? styles.hoverableActive
									: styles.hoverable
							}
						>
							<span className={styles.contentLoader}>
								<GiPresent className={styles.icon} style={{ color: 'white' }} />
							</span>
						</div>
					</Link>
					<Link to='/sponsorships'>
						<div
							className={
								location.pathname === '/sponsorships'
									? styles.hoverableActive
									: styles.hoverable
							}
						>
							<span className={styles.contentLoader}>
								<FaHandshake
									className={styles.icon}
									style={{ color: 'white' }}
								/>
							</span>
						</div>
					</Link>
					<div className={styles.lineWrapper}>
						<hr className={styles.separator} />
					</div>
					<div className={styles.hoverable}>
						<Link>
							<span className={styles.contentLoader}>
								<BiReset className={styles.icon} style={{ color: 'white' }} />
							</span>
						</Link>
					</div>
					{location.pathname === '/sports' && (
						<>
							<div className={styles.lineWrapper}>
								<hr className={styles.separator} />
							</div>
							<div className={styles.hoverable}>
								<Link>
									<span className={styles.contentLoader}>
										<IoIosBasketball
											className={styles.icon}
											style={{ color: 'white' }}
										/>
									</span>
								</Link>
							</div>
							<div className={styles.hoverable}>
								<Link>
									<span className={styles.contentLoader}>
										<GiTennisBall
											className={styles.icon}
											style={{ color: 'white' }}
										/>
									</span>
								</Link>
							</div>
							<div className={styles.hoverable}>
								<Link>
									<span className={styles.contentLoader}>
										<GiSoccerBall
											className={styles.icon}
											style={{ color: 'white' }}
										/>
									</span>
								</Link>
							</div>
						</>
					)}
					{location.pathname === '/sponsorships' && (
						<>
							<div className={styles.lineWrapper}>
								<hr className={styles.separator} />
							</div>
							<div className={styles.hoverable}>
								<Link>
									<span className={styles.contentLoader}>
										<IoIosMicrophone
											className={styles.icon}
											style={{ color: 'white' }}
										/>
									</span>
								</Link>
							</div>
							<div className={styles.hoverable}>
								<Link style={{ textDecoration: 'none' }}>
									<span className={styles.contentText}>Eveton</span>
								</Link>
							</div>
							<div className={styles.hoverable}>
								<Link style={{ textDecoration: 'none' }}>
									<span className={styles.contentText}>Watford</span>
								</Link>
							</div>
							<div className={styles.hoverable}>
								<Link style={{ textDecoration: 'none' }}>
									<span className={styles.contentText}>UFC</span>
								</Link>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	)
}

export default NavBar
