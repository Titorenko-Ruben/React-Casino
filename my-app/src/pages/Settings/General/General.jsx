import React, { useContext } from 'react'
import { useFormik } from 'formik'
import { BiCommentError } from 'react-icons/bi'

import { DataBase, Store } from 'app/App'
import { email } from 'shared/validations'

import styles from './styles.module.scss'

function General() {
	const [dataBase, setDataBase] = useContext(DataBase)
	const [store, setStore] = useContext(Store)
	const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
		useFormik({
			initialValues: {
				email: ''
			},
			validationSchema: email,
			onSubmit
		})
	function onSubmit(values, { resetForm }) {
		if (values.email === store.user.email) {
			console.log('Error')
		} else {
			setStore((prev) => {
				return {
					...prev,
					user: {
						...prev.user,
						email: values.email
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
								email: values.email
							}
						} else {
							return user
						}
					})
				}
			})
		}
		resetForm({ values: '' })
	}
	console.log(store.user)
	console.log(dataBase.users)
	return (
		<div>
			<div className={styles.cardVariantDefault}>
				<form className={styles.section} onSubmit={handleSubmit}>
					<h3 className={styles.sectionTitle}>Email</h3>
					<hr className={styles.line}></hr>
					<label className={styles.sectionForm}>
						<div className={styles.sectionFormContener}>
							<span className={styles.sectionFormTitle}>Email</span>
							<span className={styles.asterisk}>*</span>
						</div>
						<input
							id='email'
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
							style={
								errors.email && touched.email
									? { border: '2px solid #ff1f44' }
									: { border: '2px solid #2f4553' }
							}
							className={styles.sectionInput}
							type='email'
						/>
						{errors.email && touched.email && (
							<div className={styles.inputError}>
								<BiCommentError className={styles.errorIcon} />
								<span className={styles.error}>{errors.email}</span>
							</div>
						)}
					</label>
					<div className={styles.sectionFooter}>
						<button type='submit' className={styles.btn}>
							<span>Save</span>
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default General
