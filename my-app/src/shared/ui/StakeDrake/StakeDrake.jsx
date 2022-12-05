import React from "react";
import { Link } from "react-router-dom";

import ImgBg from "assets/img/drake-banner.avif"
import StakeDrakeImg from "assets/img/stakeLogo.png"
import Border from "assets/img/border.png"
import Drake from "assets/img/drake.png"

import styles from './styles.module.scss'



const StakeDrake = () => {
    return (
        <div className={styles.stakeDrakeBlock}>
            <div className={styles.stakeDrakeLink}>
                <Link className={styles.link} to="/">Learn more</Link>
            </div>

            <div className={styles.stakeDrakeWrapper}>
           
                <img className={styles.imgStake} src={StakeDrakeImg} alt='stake' />
                <img className={styles.imgBorder} src={Border} alt='border'/>
                <img className={styles.imgDrake} src={Drake} alt='drake'/>



            </div>
            <div className={styles.stakeDrakeLinkImgBg}>
                <img className={styles.img} src={ImgBg} alt='drakeBg' />
            </div>
        </div>
    )

}
// <img className={styles.logoImg} alt="Stake logo" src={stakeLogo}/>

export default StakeDrake;