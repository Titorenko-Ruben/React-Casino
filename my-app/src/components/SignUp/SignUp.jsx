import React from "react"
import { useState } from "react"
import { IoIosClose, IoLogoTwitch } from 'react-icons/io'
import { AiOutlineGoogle } from 'react-icons/ai'
import { CgFacebook } from 'react-icons/cg'
import { BiCommentError } from 'react-icons/bi'
import { useFormik } from 'formik'
import * as yup from 'yup'

import styles from './styles.module.css'
import check from '../../assets/icons/check.svg'

function onSubmit (values, actions) {
  console.log(values)
}

function SignUp() {
  // const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}/;
  // 5 min characters, 1 upper case letter, 1 lower case letter, 1 numeric digit
  const basicSchema = yup.object().shape({
    email: yup.string().email('Please enter a valid email').required('Required'),
    username: yup.string().required('Required'),
    day: yup.number().positive().max(31).integer().required('Required'),
    month: yup.number().positive().max(12).integer().required('Required'),
    year: yup.number().positive().max(2022).integer().required('Required'),
    password: yup.string().min(5)/*.matches(passwordRules, { message: 'Please create a stronger password' })*/.required('Required'),
  })

  const [userAgree, setUserAgree] = useState(false)

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      day: '',
      month: '',
      year: '',
    },
    validationSchema: basicSchema,
    onSubmit,
  })

  return (
    <div className={styles.modal}>
      <div className={styles.modalAuth}>
        <div className={styles.overlay}></div>
        <div className={styles.regWrapper}>
          <div className={styles.modalContent}>
            <div className={styles.closeBtnWrapper}>
              <button className={styles.closeBtn}><IoIosClose className={styles.closeIcon} /></button>
            </div>
            <div className={styles.content}>
              <div className={styles.centerWrapperTitle}>
                <h1 className={styles.title}>Create an Account</h1>
              </div>
              <form onSubmit={handleSubmit} className={styles.form}>
                {/* Input for email */}
                <label className={styles.stacked} htmlFor="email">
                  <div className={styles.inputTitleWrapper}>
                    <div>Email</div>
                  </div>
                  <div className={styles.inputWrapper}>
                    <div className={styles.inputContent}>
                      <input
                        value={values.email}
                        id='email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="email"
                        className={styles.input} />
                    </div>
                  </div>
                  <div className={errors.email ? styles.inputError : ''}>
                    {errors.email && <BiCommentError className={styles.errorIcon} />}
                    <span className={errors.email ? styles.error : ''}>{errors.email ? errors.email : ''}</span>
                  </div>
                </label>
                {/* Input for Username */}
                <label className={styles.stacked} htmlFor="username">
                  <div className={styles.inputTitleWrapper}>
                    <div>Username</div>
                  </div>
                  <div className={styles.inputWrapper}>
                    <div className={styles.inputContent}>
                      <input
                        id='username'
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="username"
                        className={styles.input} />
                    </div>
                  </div>
                  <div className={errors.username ? styles.inputError : ''}>
                    {errors.username && <BiCommentError className={styles.errorIcon} />}
                    <span className={errors.username ? styles.error : ''}>{errors.username ? errors.username: ''}</span>
                  </div>
                </label>
                {/* Input for Password */}
                <label className={styles.stacked} htmlFor="password">
                  <div className={styles.inputTitleWrapper}>
                    <div>Password</div>
                  </div>
                  <div className={styles.inputWrapper}>
                    <div className={styles.inputContent}>
                      <input
                        id='password'
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        type="password"
                        className={styles.input} />
                    </div>
                  </div>
                  <div className={errors.password ? styles.inputError : ''}>
                    {errors.password && <BiCommentError className={styles.errorIcon} />}
                    <span className={errors.password ? styles.error : ''}>{errors.password ? errors.password : ''}</span>
                  </div>
                </label>
                {/* Input for Date */}
                <label className={styles.stacked}>
                  <div className={styles.inputTitleWrapper}>
                    <div>Date of Birth</div>
                  </div>
                  <div className={styles.inputDateContent}>
                    <label className={styles.stackedInput} htmlFor="day">
                      <div className={styles.inputWrapper}>
                        <div className={styles.inputContent}>
                          <input
                            id='day'
                            value={values.day}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            className={styles.input}
                            placeholder='DD'
                          />
                        </div>
                      </div>
                    </label>
                    <label className={styles.stackedInput} htmlFor="month">
                      <div className={styles.inputWrapper}>
                        <div className={styles.inputContent}>
                          <input
                            id='month'
                            value={values.month}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            className={styles.input}
                            placeholder='Month'
                          />
                        </div>
                      </div>
                    </label>
                    <label className={styles.stackedInput} htmlFor="year">
                      <div className={styles.inputWrapper}>
                        <div className={styles.inputContent}>
                          <input
                            id='year'
                            value={values.year}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            type="text"
                            className={styles.input}
                            placeholder='YYYY'
                          />
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className={errors.day ? styles.inputError : ''}>
                    {errors.day && <BiCommentError className={styles.errorIcon} />}
                    <span className={errors.day ? styles.error : ''}>{errors.day ? errors.day : ''}</span>
                  </div>
                  <div className={errors.month ? styles.inputError : ''}>
                    {errors.month && <BiCommentError className={styles.errorIcon} />}
                    <span className={errors.month ? styles.error : ''}>{errors.month ? errors.month : ''}</span>
                  </div>
                  <div className={errors.year ? styles.inputError : ''}>
                    {errors.year && <BiCommentError className={styles.errorIcon} />}
                    <span className={errors.year ? styles.error : ''}>{errors.year ? errors.year : ''}</span>
                  </div>
                </label>
                <div className={styles.termsTextWrapper}>
                  <div className={styles.registerTerms}>
                    <button
                      onClick={() => setUserAgree(!userAgree)}
                      className={styles.btnTerms}>
                      <div className={userAgree ? styles.indicatorEnable : styles.indicatorDisabled}>
                        {userAgree ? <img src={check} alt='Check' /> : ''}
                      </div>
                      <div className={styles.termsContent}>
                        <div className={styles.termsText}>I agree and understand the Terms & Conditions*</div>
                      </div>
                    </button>
                  </div>
                </div>
                <button className={styles.playNowBtn} onClick={(e)=>e.preventDefault} type='submit'>
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
                  <button className={styles.provider}><CgFacebook className={styles.fIcon} /></button>
                </div>
                <div className={styles.providerWrapper}>
                  <button className={styles.provider}><AiOutlineGoogle className={styles.fIcon} /></button>
                </div>
                <div className={styles.providerWrapper}>
                  <button className={styles.provider}><IoLogoTwitch className={styles.icon} /></button>
                </div>
              </div>
              <div className={styles.footer}>
                <span className={styles.footerBtn}>
                  Already have an account?
                  <button className={styles.linkBtn}>
                    <span className={styles.linkBtnText}>Sign In</span>
                  </button>
                </span>
                <span className={styles.footerLinkWrapper}>
                  <button className={styles.footerLink}>
                    <span className={styles.footerLinkText}>Terms & Conditions*</span>
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
