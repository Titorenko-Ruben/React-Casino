import React from 'react'

import { GiPresent } from 'react-icons/gi'
import { BiBasketball } from 'react-icons/bi'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { BiReset, BiFootball } from 'react-icons/bi'
import { FaHandshake } from 'react-icons/fa'

import styles from './styles.module.scss'

const NavBar = () => {
	return (
		<div className={styles.navBarWrapper}>
			<div className={styles.header}>
				<div className={styles.style}>
					<button className={styles.hoverable}>
						<AiOutlineMenuUnfold
							className={styles.icon}
							style={{ color: 'white' }}
						/>
					</button>
				</div>
			</div>
			<div className={styles.scroll}>
				<div className={styles.scrollebleContent}>
					<div className={styles.hoverable}>
						<a>
							<span className={styles.contentLoader}>
								<BiBasketball
									className={styles.icon}
									style={{ color: 'white' }}
								/>
							</span>
						</a>
					</div>
					<div className={styles.hoverable}>
						<a>
							<span className={styles.contentLoader}>
								<GiPresent className={styles.icon} style={{ color: 'white' }} />
							</span>
						</a>
					</div>
					<div className={styles.hoverable}>
						<a>
							<span className={styles.contentLoader}>
								<FaHandshake
									className={styles.icon}
									style={{ color: 'white' }}
								/>
							</span>
						</a>
					</div>
					<div className={styles.lineWrapper}>
						<hr className={styles.separator} />
					</div>

					<div className={styles.hoverable}>
						<a>
							<span className={styles.contentLoader}>
								<BiReset className={styles.icon} style={{ color: 'white' }} />
							</span>
						</a>
					</div>
					{/* <div className={styles.hoverable}>
                        <a>
                            <span className={styles.contentLoader}>
                                <MdSportsBasketball className={styles.icon} style={{ color: "white" }} />
                            </span>
                        </a>
                    </div>
                    <div className={styles.hoverable}>
                        <a>
                            <span className={styles.contentLoader}>
                                <GiTennisBall className={styles.icon} style={{ color: "white" }} />
                            </span>
                        </a>
                    </div>
                    <div className={styles.hoverable}>
                        <a>
                            <span className={styles.contentLoader}>
                                <MdSportsHockey className={styles.icon} style={{ color: "white" }} />
                            </span>
                        </a>
                    </div> */}
				</div>
			</div>
		</div>
	)
}

export default NavBar
