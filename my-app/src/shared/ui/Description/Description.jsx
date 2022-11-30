import React from 'react'

import styles from './styles.module.scss'
import ruletteImg from 'assets/img/stake-roulette.png'
import barImg from 'assets/img/bar.png'



function Description() {

  const onClick = {

  }

  return (

    <div>
      <div className={styles.description}>
        <div className={styles.contener}>
          <h1 className={styles.title}>America's Social Casino</h1>
          <span className={styles.info}>Our social casino has been tailor-made to provide the ultimate social,
            safe and free gaming experience. With a wide variety of over 200 industry favorite games by the most reputable providers,
            you wont find better action anywhere else.</span>
          <button className={styles.btn}><span onClick={onClick}></span>Go to Social Casino</button>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentBlock}>
          <div className={styles.contentImg}>
            <img className={styles.img} src={ruletteImg} />
          </div>
          <div className={styles.contentInfo}>
            <h2 className={styles.contentTitle}>Claim Your Stake Coins</h2>
            <span className={styles.contentText}> You can claim your free Stake Coins via our Daily Login Bonuses,
              Races, Rakeback, Customer Benefits, Mail a Request or receive a free bonus when you purchase Gold Coins.</span>
          </div>
        </div>
        <div className={styles.contentBlock}>
          <div className={styles.contentImg}>
            <img className={styles.img} src={barImg} />
          </div>
          <div className={styles.contentInfo}>
            <h2 className={styles.contentTitle}>No Purchase Necessary</h2>
            <span className={styles.contentText}> We are dedicated to building a completely free gaming experience.
              Play with both Gold Coins and Stake Coins immediately without any payment!</span>
          </div>
        </div>
      </div >
    </div>
  )
}

export default Description