import React, { useState } from "react";

import { Header, Description, Discount, SignIn, SignUp, PlayBanner, StakeDrake, NavBar } from "shared/ui";

import styles from './styles.module.scss'

function Home() {
  const [user, setUser] = useState({})
  const [regWindow, setRegWindow] = useState(false)
  const [signInWindow, setSignInWindow] = useState(false)

  return (
    <div>
      <Header
        regWindow={regWindow}
        setRegWindow={setRegWindow}
        signInWindow={signInWindow}
        setSignInWindow={setSignInWindow}
      />
      <NavBar />
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
      />
      <SignIn
        signInWindow={signInWindow}
        setSignInWindow={setSignInWindow}
        setUser={setUser}
      />
    </div>
  );
}

export default Home;