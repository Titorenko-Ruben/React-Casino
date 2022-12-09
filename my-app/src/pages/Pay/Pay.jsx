import React, { useEffect } from 'react'

import styles from './styles.module.scss'

function Pay() {
	useEffect(() => {
		localStorage.setItem('isPagePayOpen', true)
	}, [])
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
									{localStorage.getItem('DepositRequest')}
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
								className={styles.inputCardNumber}
								placeholder='0000 0000 0000 0000'
							/>
						</div>
						<div className={styles.cardExpire}>
							<span className={styles.cardExpireSpan}>
								<b className={styles.cardExpireText}>VALID THRU (MM / YY)</b>
							</span>
							<input
								type='text'
								className={styles.inputExpireMonth}
								placeholder='MM'
							/>
							<span className={styles.inputSlash}>/</span>
							<input
								type='text'
								className={styles.inputExpireYear}
								placeholder='YY'
							/>
						</div>
						<div className={styles.cardHolderField}>
							<span className={styles.cardHolderText}>CARD HOLDER NAME</span>
							<input
								type='text'
								className={styles.inputCardHolder}
								placeholder='SERGEY IVANOV'
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
								className={styles.cvvInput}
								placeholder='000'
							/>
						</div>
						<div className={styles.cvcType}></div>
					</div>
				</div>
				<div className={styles.main}></div>
			</div>
		</div>
	)
}

export default Pay
