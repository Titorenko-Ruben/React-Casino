import React, { useState, useEffect } from "react";

import { Header, UserHeader, Description, Discount, SignIn, SignUp, PlayBanner, StakeDrake, Footer } from "shared/ui";

import styles from './styles.module.scss'


function Home() {
  const [user, setUser] = useState({})
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  const [regWindow, setRegWindow] = useState(false)
  const [signInWindow, setSignInWindow] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('isUserLoggedIn') === 'true') {
      setIsUserLoggedIn(true)
    }
  }, [])
  return (
    <div>
      {isUserLoggedIn ?
        <UserHeader setIsUserLoggedIn={setIsUserLoggedIn}/>
        :
        <Header
          regWindow={regWindow}
          setRegWindow={setRegWindow}
          signInWindow={signInWindow}
          setSignInWindow={setSignInWindow}
        />}
      <Discount
        regWindow={regWindow}
        setRegWindow={setRegWindow}
      />
      <div className={styles.wrapper}>
        <Description />
        <PlayBanner />
        <StakeDrake />
      </div>
      <SignUp
        regWindow={regWindow}
        setRegWindow={setRegWindow}
        setUser={setUser}
        setIsUserLoggedIn={setIsUserLoggedIn}
      />
      <SignIn
        signInWindow={signInWindow}
        setSignInWindow={setSignInWindow}
        setUser={setUser}
        setIsUserLoggedIn={setIsUserLoggedIn}
      />
      <Footer />
    </div>
  );
}

export default Home;