import React, { useState, useEffect } from 'react'

import { ImArrowUp } from 'react-icons/im'
import { IoWalletSharp } from 'react-icons/io5'

import styles from './styles.module.scss'

function Rates({ abbreviation, officialRate, usd }) {
	return (
		<div className={styles.balanceInfo}>
			<div className={styles.balance}>{(officialRate / usd).toFixed(3)}</div>
			<div className={styles.typeCurrency}>{abbreviation}</div>
		</div>
	)
}

function BalanceWindow() {
	const [usd, setUsd] = useState()
	const [exchangeRate, setExchangeRate] = useState([])
	const API = `https://www.nbrb.by/api/exrates/rates?periodicity=0`

	useEffect(() => {
		fetch(API)
			.then((response) => {
				return response.json()
			})
			.then((res) => {
				setExchangeRate(res)
				res.forEach((item) => {
					if (item.Cur_Abbreviation === 'USD') {
						setUsd(item.Cur_OfficialRate)
					}
				})
			})
	}, [])

	return (
		<div className={styles.modalWindowWrapper}>
			<div className={styles.arrow}>
				<ImArrowUp />
			</div>
			<form className={styles.form}>
				<input className={styles.input} placeholder='Search currencies'></input>
			</form>
			<div className={styles.scroll}>
				<div className={styles.currencyWrapper}>
					<div className={styles.modalContent}>
						{exchangeRate.map((item) => {
							return (
								<Rates
									usd={usd}
									key={item.Cur_ID}
									abbreviation={item.Cur_Abbreviation}
									officialRate={item.Cur_OfficialRate}
								/>
							)
						})}
					</div>
				</div>
			</div>
			<div className={styles.buttomBlock}>
				<hr className={styles.separator}></hr>
				<div className={styles.walletSet}>
					<div className={styles.icon}>
						<IoWalletSharp />
					</div>
					<button className={styles.discrip}>Wallet Settings</button>
				</div>
			</div>
		</div>
	)
}

export default BalanceWindow
