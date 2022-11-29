import React from 'react'

import styles from './styles.module.scss'
import { Link } from 'react-router-dom'
import stakeLogo from "assets/img/stakeLogo.jpg"

function Header({ setRegWindow, regWindow }) {
  return (
    <header>
      <div className={styles.headerWrapper}>
        <div>
          <Link to='/'><img className={styles.logoImg} alt="Stake logo" src={stakeLogo}/></Link>
        </div>
        <div className={styles.btnField}>
          <button className={styles.signInBtn}>
            <span className={styles.signInBtnText}>Sign In</span>
          </button>
          <button onClick={()=> setRegWindow(!regWindow)} className={styles.btnReg}>
            <span className={styles.btnText}>Register</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header



