import React from 'react'

import styles from './styles.module.scss'

function Security() {
	return (
		<div>
			<div className={styles.cardVariantDefault}>
				<div className={styles.section}>
					<h3 className={styles.sectionTitle}>Password</h3>
					<div className={styles.sectionForm}>
						<div className={styles.sectionFormContener}>
							<span className={styles.sectionFormTitle}>Old Password</span>
							<span className={styles.asterisk}>*</span>
						</div>
						<input className={styles.sectionInput}>{ }</input>
					</div>
					<div className={styles.sectionForm}>
						<div className={styles.sectionFormContener}>
							<span className={styles.sectionFormTitle}>New Password</span>
							<span className={styles.asterisk}>*</span>
						</div>
						<input className={styles.sectionInput}>{ }</input>
					</div>
					<div className={styles.sectionForm}>
						<div className={styles.sectionFormContener}>
							<span className={styles.sectionFormTitle}>Confirm New Password</span>
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

export default Security