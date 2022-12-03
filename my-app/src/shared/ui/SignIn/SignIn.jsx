import React, { useState } from 'react'
import { IoIosClose, IoLogoTwitch } from "react-icons/io";
import { AiOutlineGoogle } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";

import styles from 'shared/ui/SignIn/styles.module.scss'

function SignIn({ signInWindow, setSignInWindow, setUser }) {
    const [emailOrUsername, setEmailOrUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    function userVerification(event) {
        event.preventDefault()
        if (emailOrUsername === '' || password === '') {
            setError('Please, fill out the task')
        } else {
            JSON.parse(localStorage.getItem('dataBase')).forEach((item) => {
                if ((emailOrUsername === item.email && password === item.password) || (emailOrUsername === item.username && password === item.password)) {
                    console.log('auth complete')
                    setUser(item)
                    setError('')
                    setEmailOrUsername('')
                    setPassword('')
                    setSignInWindow(false)
                } else {
                    setError('User not found')
                }
            })
        }
    }

    return (
        <>
            {signInWindow && (<div className={styles.modal}>
                <div className={styles.modalAuth}>
                    <div className={styles.overlay}></div>
                    <div className={styles.regWrapper}>
                        <div className={styles.scroll}>
                            <div className={styles.modalContent}>
                                <div className={styles.closeBtnWrapper}>
                                    <button onClick={() => setSignInWindow(!signInWindow)} className={styles.closeBtn}>
                                        <IoIosClose className={styles.closeIcon} />
                                    </button>
                                </div>
                                <div className={styles.content}>
                                    <div className={styles.centerWrapperTitle}>
                                        <h1 className={styles.title}>Sign In</h1>
                                    </div>
                                    <form className={styles.form}>
                                        <label className={styles.stacked}>
                                            <div className={styles.inputTitleWrapper}>
                                                <div className={error && styles.colorRed}>Email or Username*</div>
                                            </div>
                                            <div className={styles.inputDateContent}>
                                                <label className={styles.stackedInput} htmlFor="email">
                                                    <div className={styles.inputWrapper}>
                                                        <div className={styles.inputContent}>
                                                            <input
                                                                value={emailOrUsername}
                                                                onChange={(e) => setEmailOrUsername(e.target.value)}
                                                                type="text"
                                                                className={styles.input}
                                                            />
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </label>
                                        <label className={styles.stacked}>
                                            <div className={styles.inputTitleWrapper}>
                                                <div className={error && styles.colorRed}>Password*</div>
                                            </div>
                                            <div className={styles.inputDateContent}>
                                                <label className={styles.stackedInput} htmlFor="password">
                                                    <div className={styles.inputWrapper}>
                                                        <div className={styles.inputContent}>
                                                            <input
                                                                value={password}
                                                                onChange={(e) => setPassword(e.target.value)}
                                                                type="password"
                                                                className={styles.input}
                                                            />
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </label>
                                        {error && (<div className={styles.errorTextWrapper}>
                                            <span className={styles.errorText}>{error}*</span>
                                        </div>)}
                                        <button
                                            className={styles.playNowBtn}
                                            onClick={(e) => userVerification(e)}
                                        >
                                            <span className={styles.btnText}>Play Now</span>
                                        </button>
                                    </form>
                                    <div className={styles.authWrapper}>
                                        <div className={styles.orContent}>
                                            <span className={styles.orText}>OR</span>
                                        </div>
                                    </div>
                                    <div className={styles.auth}>
                                        <div className={styles.providerWrapper}>
                                            <button className={styles.provider}>
                                                <CgFacebook className={styles.fIcon} />
                                            </button>
                                        </div>
                                        <div className={styles.providerWrapper}>
                                            <button className={styles.provider}>
                                                <AiOutlineGoogle className={styles.fIcon} />
                                            </button>
                                        </div>
                                        <div className={styles.providerWrapper}>
                                            <button className={styles.provider}>
                                                <IoLogoTwitch className={styles.icon} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className={styles.footer}>
                                        <button className={styles.regButton}>
                                            <span className={styles.regButtonText}>Forgot Password</span>
                                        </button>
                                        <span className={styles.footerBtn}>
                                            Don't have an account?
                                            <button className={styles.linkBtn}>
                                                <span className={styles.linkBtnText}> Register an Account</span>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </>
    )
}

export default SignIn;