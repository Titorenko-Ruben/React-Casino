import React from 'react'

import styles from './styles.module.scss'
import casinoLogo from 'assets/icons/logo2.png'

function Header() {
  return (
    <header>
      <div className={styles.headerWrapper}>
        <div>
          <button><a href='#'><img className={styles.logo} src={casinoLogo} alt='logo' /></a></button>
          
        </div>
        <div className={styles.btnField}>
          <button>
            <a href='#'>Sign in</a>
          </button>
          <button>
            <a className={styles.btnReg} href='#'>Register</a>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header




