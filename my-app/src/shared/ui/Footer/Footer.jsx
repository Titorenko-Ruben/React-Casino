import React from 'react'
import { Link } from 'react-router-dom'

import evertonLogo from 'assets/icons/everton-logo.svg'
import ufcLogo from 'assets/icons/ufc.svg'
import watfordLogo from 'assets/icons/watford-logo.svg'
import litecoin from 'assets/icons/litecoin.svg'
import bitcoin from 'assets/icons/bitcoin.svg'
import ethereum from 'assets/icons/ethereum.svg'
import tron from 'assets/icons/tron.svg'
import ripple from 'assets/icons/ripple.svg'
import dogecoin from 'assets/icons/dogecoin.svg'
import bitcoinCash from 'assets/icons/bitcoin-cash.svg'
import tether from 'assets/icons/tether.svg'
import responsibleGaming from 'assets/icons/responsible-gaming.svg'
import age from 'assets/icons/21plus.svg'

import stakeLogo from "assets/icons/logo-footer.png"

import styles from './styles.module.scss'

function Footer() {

  return (

    <div className={styles.footerContant}>
      <div className={styles.links}>
        <div>
          <p className={styles.titleFooter}> Social Casino</p>
          <ul>
            <li className={styles.li}>Games</li>
            <li className={styles.li}>VIP Club</li>
            <li className={styles.li}>Promotions</li>
          </ul>
        </div>
        <div>
          <p className={styles.titleFooter}>Support</p>
          <ul>
            <li className={styles.li} >Fairness</li>
            <li className={styles.li}>Affiliate</li>
            <li className={styles.li}>Gamble Aware</li>
            <li className={styles.li}>Live Support</li>
            <li className={styles.li}>Help Center</li>
          </ul>
        </div>
        <div>
          <p className={styles.titleFooter}>Community</p>
          <ul>
            <li className={styles.li}>Blog</li>
            <li className={styles.li}>Twitter</li>
            <li className={styles.li}>Instagram</li>
          </ul>
        </div>
        <div>
          <p className={styles.titleFooter}>About Us</p>
          <ul>
            <li className={styles.li}>Privacy Policy</li>
            <li className={styles.li}>Terms of Service</li>
            <li className={styles.li}>Self Exclusion</li>
          </ul>
        </div>
      </div>
      <div className={styles.hr}></div>
      <div className={styles.logoWrapper}>
        <img className={styles.logoImg} src={litecoin} />
        <img className={styles.logoImg} src={bitcoin} />
        <img className={styles.logoImg} src={ethereum} />
        <img className={styles.logoImg} src={tron} />
        <img className={styles.logoImg} src={ripple} />
        <img className={styles.logoImg} src={dogecoin} />
        <img className={styles.logoImg} src={bitcoinCash} />
        <img className={styles.logoImg} src={tether} />
        <img className={styles.logoImg} src={responsibleGaming} />
        <img className={styles.logoImg} src={age} />
      </div>
      <div className={styles.hr}></div>
      <div className={styles.mainPartners}>
        <div className={styles.partner}>
          <Link to='/sponsorships/everton'>
            <img className={styles.logoPartner} src={evertonLogo} />
            </Link>
        </div>

        <div className={styles.partner}>
          <Link to='/sponsorships/watford'>
            <img className={styles.logoPartner} src={watfordLogo} />
            </Link>
        </div>

        <div className={styles.partner}>
          <Link to ='/'>
            <img className={styles.logoPartner} src={ufcLogo} />
            </Link>
        </div>
      </div>
      <div className={styles.hr}></div>
      <div className={styles.wrapLogo}>
      <img className={styles.logo} src={stakeLogo} /> 
      <p className={styles.footerText}>2022 Stake.us | All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer