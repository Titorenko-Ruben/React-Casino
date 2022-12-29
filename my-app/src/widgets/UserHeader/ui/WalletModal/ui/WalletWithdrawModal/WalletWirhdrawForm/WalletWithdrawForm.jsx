import React, { useContext, useState } from 'react'
import { Formik, Form } from 'formik'
import { useNavigate } from 'react-router-dom'

import { CustomInput } from '../CustomInput'
import { withdrawSchema } from 'shared/validations/common'
import { Store } from 'app/App'

import styles from './styles.module.scss'

function WalletWithdrawForm({ hideModal }) {
	const [store] = useContext(Store)
	const [error, setError] = useState(false)
	const navigate = useNavigate()

	function onSubmit(values, actions) {
		if (Math.ceil(values.withdraw) > store.user.balance) {
			setError(true)
		} else {
			setError(false)
			localStorage.setItem('WithdrawRequest', Math.ceil(values.withdraw))
			actions.resetForm()
			hideModal()
			navigate('withdraw')
		}
	}

	return (
		<Formik
			initialValues={{
				withdraw: ''
			}}
			validationSchema={withdrawSchema}
			onSubmit={onSubmit}
		>
			{({ isSubmitting }) => (
				<Form className={styles.wrap}>
					<div className={styles.stacked} htmlFor='withdraw'>
						<CustomInput label='Withdraw' name='withdraw' type='text' />
					</div>
					{error && (
						<div className={styles.error}>
							Please, enter an amount less than or equal to your balance
						</div>
					)}
					<button
						disabled={isSubmitting}
						className={styles.formBtn}
						type='submit'
					>
						Continue
					</button>
				</Form>
			)}
		</Formik>
	)
}

export default WalletWithdrawForm
