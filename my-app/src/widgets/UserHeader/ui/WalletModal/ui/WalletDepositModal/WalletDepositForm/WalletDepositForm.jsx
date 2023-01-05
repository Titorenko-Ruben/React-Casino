import React from 'react'
import { Formik, Form } from 'formik'
import { useNavigate } from 'react-router-dom'

import { CustomInput } from '../CustomInput'
import { depositSchema } from 'shared/validations/common'

import styles from './styles.module.scss'

function WalletDepositForm({ hideModal }) {
	const navigate = useNavigate()

	function onSubmit(values, actions) {
		localStorage.setItem('DepositRequest', Math.ceil(values.deposit))
		actions.resetForm()
		hideModal()
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

export default WalletDepositForm
