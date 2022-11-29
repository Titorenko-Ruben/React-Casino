import React from 'react'
import { IoLogoTwitch } from 'react-icons/io'
import { AiOutlineGoogle } from 'react-icons/ai'
import { CgFacebook } from 'react-icons/cg'

import styles from './styles.module.css'
import backgroundImg from '../../assets/img/main.jpg'

const Discount = () => {
  return (
    <div className={styles.wrapper} >
      {/* <img className={styles.mainImg} src={backgroundImg}/> */}
      <div className={styles.mainRegister}>
        <div className={styles.contener}>
          <h1 className={styles.title}>Play Smarter</h1>
          <button className={styles.mainBtn}>
            <span> Register instanly</span>
          </button>
          <div className={styles.authWrapper}>
                <div className={styles.orContent}>
                  <span className={styles.orText}>OR</span>
                </div>
              </div>
          <div className={styles.networks}>
            <button className={styles.socialNetworks}><CgFacebook /></button>
            <button className={styles.socialNetworks}><AiOutlineGoogle /></button>
            <button className={styles.socialNetworks}><IoLogoTwitch /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Discount