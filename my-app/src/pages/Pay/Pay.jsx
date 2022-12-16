import { Store } from 'app/App'
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './styles.module.scss'

function Pay({ setDataBase, dataBase }) {
	const [store, setStore] = useContext(Store)
	const [cardInfo, setCardInfo] = useState({
		cardNumber: '',
		cardMonth: '',
		cardYear: '',
		cardHolder: '',
		cardCvv: ''
	})
	const [error, setError] = useState(false)
	const year = String(new Date().getFullYear()).substr(2)
	const sumOfBalance =
		+store.user.balance + +localStorage.getItem('DepositRequest')
	const navigate = useNavigate()

	function cardValidation() {
		if (
			cardInfo.cardNumber === '' ||
			typeof +cardInfo.cardNumber !== 'number' ||
			cardInfo.cardNumber.length !== 20
		) {
			console.log('error')
		} else if (
			cardInfo.cardMonth === '' ||
			cardInfo.cardYear === '' ||
			cardInfo.cardMonth.match(/[a-zA-Zа-яА-Я]/) ||
			cardInfo.cardYear.match(/[a-zA-Zа-яА-Я]/) ||
			cardInfo.cardMonth > 12 ||
			cardInfo.cardYear > year ||
			cardInfo.cardMonth < 0 ||
			cardInfo.cardYear < 0
		) {
			setError(true)
		} else if (
			cardInfo.cardHolder.match(/[0-9\\.,:]/) ||
			cardInfo.cardHolder === ''
		) {
			setError(true)
		} else if (
			cardInfo.cardCvv.match(/[a-zA-Zа-яА-Я]/) ||
			cardInfo.cardCvv.length < 2
		) {
			setError(true)
		} else {
			setError(false)
			setStore((prev) => {
				return {
					...prev,
					user: {
						...prev.user,
						balance: `${sumOfBalance}`,
						cardInfo: {
							number: cardInfo.cardNumber,
							month: cardInfo.cardMonth,
							year: cardInfo.cardYear,
							holder: cardInfo.cardHolder,
							cvv: cardInfo.cardCvv
						}
					}
				}
			})
			setDataBase((prev) => {
				return {
					...prev,
					users: dataBase.users.map((user) => {
						if (
							user.email === store.user.email &&
							user.password === store.user.password
						) {
							return {
								...store.user,
								balance: `${sumOfBalance}`,
								cardInfo: {
									number: cardInfo.cardNumber,
									month: cardInfo.cardMonth,
									year: cardInfo.cardYear,
									holder: cardInfo.cardHolder,
									cvv: cardInfo.cardCvv
								}
							}
						} else {
							return user
						}
					})
				}
			})
			localStorage.setItem('DepositRequest', 0)
			navigate('/')
			console.log('deposit')
		}
	}

	function ccFormat(value) {
		const v = value
			.replace(/\s+/g, '')
			.replace(/[^0-9]/gi, '')
			.substr(0, 16)
		const parts = []

		for (let i = 0; i < v.length; i += 4) {
			parts.push(v.substr(i, 4))
		}

		return parts.length > 1 ? parts.join(' ') : value
	}

	return (
		<div className={styles.conentWrapper}>
			<div className={styles.content}>
				<div className={styles.header}>
					<div className={styles.logoWrapper}>
						<div className={styles.logoText}>Stake</div>
					</div>
					<div className={styles.headerInfoWrapper}>
						<div className={styles.headerInfoText}>
							<div className={styles.wrap}>
								<div className={styles.headerInfoTitle}>Сompany:</div>
								<span className={styles.text}>Stake </span>
							</div>
							<br />
							<div className={styles.wrap}>
								<div className={styles.headerInfoTitle}>Amount of payment:</div>
								<span className={styles.text}>
									{`${localStorage.getItem('DepositRequest')}$`}
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.mainTitle}>Entering bank card details</div>
				<div className={styles.cardBlock}>
					<div className={styles.front}>
						<div className={styles.cardNumberField}>
							<span className={styles.cardText}>CARD NUMBER</span>
							<input
								type='text'
								className={
									error
										? [styles.inputCardNumber, styles.error].join(' ')
										: styles.inputCardNumber
								}
								placeholder='0000 0000 0000 0000'
								value={ccFormat(cardInfo.cardNumber)}
								onChange={(e) =>
									setCardInfo((prev) => ({
										...prev,
										cardNumber: e.target.value
									}))
								}
							/>
						</div>
						<div className={styles.cardExpire}>
							<span className={styles.cardExpireSpan}>
								<b className={styles.cardExpireText}>VALID THRU (MM / YY)</b>
							</span>
							<input
								type='text'
								className={
									error
										? [styles.inputExpireMonth, styles.error].join(' ')
										: styles.inputExpireMonth
								}
								placeholder='MM'
								maxLength='2'
								value={cardInfo.cardMonth}
								onChange={(e) =>
									setCardInfo((prev) => ({
										...prev,
										cardMonth: e.target.value
									}))
								}
							/>
							<span className={styles.inputSlash}>/</span>
							<input
								type='text'
								className={
									error
										? [styles.inputExpireYear, styles.error].join(' ')
										: styles.inputExpireYear
								}
								placeholder='YY'
								maxLength='2'
								value={cardInfo.cardYear}
								onChange={(e) =>
									setCardInfo((prev) => ({
										...prev,
										cardYear: e.target.value
									}))
								}
							/>
						</div>
						<div className={styles.cardHolderField}>
							<span className={styles.cardHolderText}>CARD HOLDER NAME</span>
							<input
								type='text'
								className={
									error
										? [styles.inputCardHolder, styles.error].join(' ')
										: styles.inputCardHolder
								}
								placeholder='SERGEY IVANOV'
								value={cardInfo.cardHolder}
								onChange={(e) =>
									setCardInfo((prev) => ({
										...prev,
										cardHolder: e.target.value
									}))
								}
							/>
						</div>
						<div className={styles.cardError}></div>
					</div>
					<div className={styles.back}>
						<div className={styles.cvcField}>
							<span>
								CVC2 /
								<br />
								CVV
							</span>
							<input
								type='text'
								className={
									error
										? [styles.cvvInput, styles.error].join(' ')
										: styles.cvvInput
								}
								placeholder='000'
								maxLength='3'
								value={cardInfo.cardCvv}
								onChange={(e) =>
									setCardInfo((prev) => ({
										...prev,
										cardCvv: e.target.value
									}))
								}
							/>
						</div>
					</div>
				</div>
				{error && (
					<div className={styles.errorText}>Please check your card details</div>
				)}
				<button className={styles.paymentBtn} onClick={cardValidation}>
					<span>Make a payment</span>
				</button>
			</div>
		</div>
	)
}

export default Pay
