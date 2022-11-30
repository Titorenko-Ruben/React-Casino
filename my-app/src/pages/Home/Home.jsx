import React from "react";
import { useState } from "react";

import styles from './styles.module.scss'
import Discount from "shared/ui/Discount/Discount";
import Header from "shared/ui/Header/Header";
import SignUp from "shared/ui/SignUp/SignUp";
import Description from "shared/ui/Description/Description";

function Home() {
  const [regWindow, setRegWindow] = useState(false)

  return (
    <div>
      <Header regWindow={regWindow} setRegWindow={setRegWindow}/>
      <Discount regWindow={regWindow} setRegWindow={setRegWindow}/>
      <SignUp regWindow={regWindow} setRegWindow={setRegWindow}/>
      <div className={styles.wrapper}>
      <Description />
      </div>
    </div>
  );
}

export default Home;