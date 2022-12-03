import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { HiOutlineCurrencyDollar } from 'react-icons/hi'
import { HiOutlineChatAlt2 } from 'react-icons/hi'

import stakeLogo from "assets/img/stakeLogo.jpg"
import person from "assets/img/person.png"

import styles from './styles.module.scss'

function UserHeader() {
    const [isBalanceOpen, setIsBalanceOpen] = useState(false)
    const [isUserWindowOpen, setIsUserWindowOpen] = useState(false)


    return (
        <div className={styles.headerWrapper}>
            <div className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.navigationContainer}>
                        <div>
                            <Link to='/'><img className={styles.logoImg} alt="Stake logo" src={stakeLogo} /></Link>
                        </div>
                        <div className={styles.balanceWrapper}>
                            <div className={styles.balance}>
                                <div className={styles.dropdown}>
                                    <div className={styles.wrapper}>
                                        <button className={styles.moneyWrapper} onClick={() => setIsBalanceOpen(!isBalanceOpen)}>
                                            <span className={styles.content}>
                                                <div className={styles.wrap}>
                                                    <div className={styles.currency}>
                                                        <div className={styles.currencyContent}>
                                                            <span className={styles.currencyContent}>
                                                                <span className={styles.currencyText}>0.000</span>
                                                            </span>
                                                            <span className={styles.iconWrap}>
                                                                <HiOutlineCurrencyDollar />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                {isBalanceOpen ?
                                                    <IoIosArrowUp style={{ marginLeft: '.5rem' }} />
                                                    :
                                                    <IoIosArrowDown style={{ marginLeft: '.5rem' }} />
                                                }
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button className={styles.walletButton}>
                                <span className={styles.walletButtonText}>
                                    Wallet
                                </span>
                            </button>
                        </div>
                        <div className={styles.userBtns}>
                            <div className={styles.dropdown}>
                                <button className={styles.userWindowButton}>
                                    <span className={styles.userWindowImgWrapper}>
                                        <img src={person} className={styles.imgPerson} />
                                    </span>
                                </button>
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