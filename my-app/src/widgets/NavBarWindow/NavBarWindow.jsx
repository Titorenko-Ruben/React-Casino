import React from "react";

import { AiOutlineMenuFold } from 'react-icons/ai'
import { MdSportsBasketball } from 'react-icons/md'
import { FaHandshake } from 'react-icons/fa'
import { GiPresent } from 'react-icons/gi'
import { BiReset } from 'react-icons/bi'
import styles from './styles.module.scss'
import cn from "classnames";



function NavBarWindow({setIsNavBarOpen, isNavBarOpen}){
    return (
        <div className={isNavBarOpen ? [styles.windowWrapper, styles.active].join(' ') : [styles.windowWrapper]}>
            <div className={styles.headerWindow}>
               
                <div className={styles.closeWrapper}>
                    <div className={styles.hoverable}>
                        <button onClick={()=> setIsNavBarOpen(false)} className={styles.closeBtn}>
                            <span className={styles.contentLoader}>
                                <AiOutlineMenuFold />
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.contentWindow}>
                <div className={styles.scroll}>
                    <button className={styles.item}>
                        <span className={styles.contentLoader}>
                            <div className={styles.icon}>
                                <MdSportsBasketball />
                            </div>
                            <div>Sport</div>
                        </span>
                    </button>
                </div>

                <div className={styles.scroll}>
                    <button className={styles.item}>
                        <span className={styles.contentLoader}>
                            <div className={styles.icon}>
                                <GiPresent />
                            </div>
                            <div>Promotion</div>
                        </span>
                    </button>
                </div>

                <div className={styles.scroll}>
                    <button className={styles.item}>
                        <span className={styles.contentLoader}>
                            <div className={styles.icon}>
                                <FaHandshake />
                            </div>
                            <div>Sponsorship</div>
                        </span>
                    </button>
                </div>
                <div className={styles.lineWrapper}>
                    <hr className={styles.separator} />
                </div>
                <div className={styles.scroll}>
                    <button className={styles.item}>
                        <span className={styles.contentLoader}>
                            <div className={styles.icon}>
                                <BiReset />
                            </div>
                            <div>Resent</div>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default NavBarWindow;
