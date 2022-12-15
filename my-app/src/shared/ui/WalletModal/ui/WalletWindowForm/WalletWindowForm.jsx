import React from 'react'
import { Formik, Form } from 'formik'
import { useNavigate } from 'react-router-dom'

import CustomInput from '../CustomInput/CustomInput'
import { depositSchema } from 'shared/schemas'

import styles from './styles.module.scss'

function WalletWindowForm({ setWalletWindow }) {
	const navigate = useNavigate()

	function onSubmit(values, actions) {
		localStorage.setItem('DepositRequest', Math.ceil(values.deposit))
		actions.resetForm()
		setWalletWindow(false)
		navigate('pay')
	}

	return (
		<Formik
			initialValues={{
				deposit: ''
			}}
			validationSchema={depositSchema}
			onSubmit={onSubmit}
		>
			{({ isSubmitting }) => (
				<Form className={styles.wrap}>
					<div className={styles.stacked} htmlFor='deposit'>
						<CustomInput label='Deposit' name='deposit' type='text' />
					</div>
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

export default WalletWindowForm
