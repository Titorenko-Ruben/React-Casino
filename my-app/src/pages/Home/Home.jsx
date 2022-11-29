import React from "react";
import { useState } from "react";

import Discount from "shared/ui/Discount/Discount";
import Header from "shared/ui/Header/Header";
import SignUp from "shared/ui/SignUp/SignUp";
// import styles from './styles.module.scss'

function Home() {
  const [regWindow, setRegWindow] = useState(false)

  return (
    <div>
      <Header regWindow={regWindow} setRegWindow={setRegWindow}/>
      <Discount />
      <SignUp regWindow={regWindow} setRegWindow={setRegWindow}/>
    </div>
  );
}

export default Home;