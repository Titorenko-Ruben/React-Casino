import React from "react";

import { Header, UserHeader, SignIn, SignUp, Footer } from "shared/ui";

import stakeDrake from 'assets/img/stakeDrake.png'

import singerDrake from 'assets/img/drake-live-stream.avif'

import styles from './styles.module.scss'

function SponsorDrake() {



  return (
    <div>
    <Header />
      <div className={styles.headerWrapper}>
          <img className={styles.headerWrapperLogo} src={stakeDrake} />
        </div>
      <div className={styles.wrapper}>
        <div className={styles.contantBlock}>
          <div className={styles.contantBlockImg}>
            <img src={singerDrake} />
          </div>
          <div className={styles.contantBlockInfo}>
            <h2 className={styles.contantBlockInfoTitle}>Live Stream Giveaway</h2>
            <p className={styles.contantBlockInfoText}>Stake & Drake will collaborate to bring an entirely new gaming experience to users, 
            which will include an evening of interactive connectivity where fans and users alike will have a chance to win big along side Drake.</p>
            <p className={styles.contantBlockInfoText}>This type of giveaway will be on a magnitude unseen before. You don’t want to miss out.
             More information about when the live stream will take place coming soon..</p>
          </div>
          </div>
          <div className={styles.contantBlock}>
            <div className={styles.contantBlockInfo}>
              <h2 className={styles.contantBlockInfoTitle}>History</h2>
              <p className={styles.contantBlockInfoText}>Drake, the hip-hop sensation, has been a long-time member of the Stake community. 
              Storming the ranks of the VIP program, Drake fell in love with both the platform, and the perks associated with our VIP program. 
              It was then that this partnership was formed, based on mutual appreciation between mega-star and product.</p>
            </div>
            <div >
            <iframe width="650" height="400" src="https://www.youtube.com/embed/6PkiuvvQnaQ" title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
      </div>
      <Footer />
      </div>
      );
}

      export default SponsorDrake;