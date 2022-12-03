import React, { useState } from "react";

import { Header, Description, Discount, SignIn, SignUp, PlayBanner } from "shared/ui";

import styles from './styles.module.scss'

import PlayBanner from "shared/ui/PlayBanner/PlayBanner"
import Description from "shared/ui/Description/Description";
import StakeDrake from "shared/ui/Stake&Drake/StakeDrake";

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