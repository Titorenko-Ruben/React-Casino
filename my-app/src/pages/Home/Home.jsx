import React, { useState } from "react";

import { Header, Description, Discount, SignIn, SignUp, PlayBanner, Footer } from "shared/ui";

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
      <Discount
        regWindow={regWindow}
        setRegWindow={setRegWindow}
      />
      <div className={styles.wrapper}>
        <Description />
        <PlayBanner />
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
      <Footer />
    </div>
  );
}

export default Home;