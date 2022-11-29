import React from "react";

import Discount from "shared/ui/Discount/Discount";
import Header from "shared/ui/Header/Header";
import SignUp from "shared/ui/SignUp/SignUp";
import styles from './styles.module.scss'

function Home() {
  return (
    <div>
      <Header />
      <Discount />
      <SignUp />
    </div>
  );
}

export default Home;