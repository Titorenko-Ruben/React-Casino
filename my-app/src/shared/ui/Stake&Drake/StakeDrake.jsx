import React from "react";

import styles from './styles.module.scss'
import { Link } from "react-router-dom";
import stakeLogo from "assets/img/stakeLogo.jpg"
import ImgBg from "assets/img/drake-banner.avif"
import StakeDrakeImg from "assets/img/stakeLogo.png"
import Border from "assets/img/border.png"
import Drake from "assets/img/drake.png"



const StakeDrake = () => {
    return (
        <div className={styles.stakeDrakeBlock}>
            <div className={styles.stakeDrakeLink}>
                <Link className={styles.link} to="/">Learn more</Link>
            </div>

            <div className={styles.stakeDrakeWrapper}>
           
                <img className={styles.imgStake} src={StakeDrakeImg} />
                <img className={styles.imgBorder} src={Border} />
                <img className={styles.imgDrake} src={Drake} />



            </div>
            <div className={styles.stakeDrakeLinkImgBg}>
                <img className={styles.img} src={ImgBg} />
            </div>
        </div>
    )

}
// <img className={styles.logoImg} alt="Stake logo" src={stakeLogo}/>

export default StakeDrake;
