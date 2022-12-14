import React from 'react'

import styles from './styles.module.scss'

function General() {
	return (
		<div>
			<div className={styles.cardVariantDefault}>
				<div className={styles.section}>
					<h3 className={styles.sectionTitle}>Email</h3>
					<hr className={styles.line}></hr>
					<div className={styles.sectionForm}>
						<div className={styles.sectionFormContener}>
							<span className={styles.sectionFormTitle}>Email</span>
							<span className={styles.asterisk}>*</span>
						</div>
						<input className={styles.sectionInput}>{ }</input>
					</div>
					<div className={styles.sectionFooter}>
						<button className={styles.btnGreen}><span>Save</span></button>
					</div>
				</div>

			</div>
		</div>
	)
}

export default General