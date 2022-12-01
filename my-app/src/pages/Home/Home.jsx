import React, { useState } from "react";

import styles from './styles.module.scss'
import Discount from "shared/ui/Discount/Discount";
import Header from "shared/ui/Header/Header";
import SignIn from "shared/ui/SignIn/SignIn";
import SignUp from "shared/ui/SignUp/SignUp";

import PlayBanner from "shared/ui/PlayBanner/PlayBanner"
import Description from "shared/ui/Description/Description";


function Home() {
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
      <SignUp 
      regWindow={regWindow} 
      setRegWindow={setRegWindow}
      />
      <SignIn 
      signInWindow={signInWindow} 
      setSignInWindow={setSignInWindow}
      />
      <div className={styles.wrapper}>
      <Description />
      </div>
       <PlayBanner />
    </div>
  );
}

export default Home;