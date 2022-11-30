import React from "react";

import Discount from "shared/ui/Discount/Discount";
import Header from "shared/ui/Header/Header";
import SignUp from "shared/ui/SignUp/SignUp";

import PlayBanner from "shared/ui/PlayBanner/PlayBanner"

function Home() {
  return (
    <div>
      <Header />
      <Discount />
      <PlayBanner />
      <SignUp /> 
    </div>
  );
}

export default Home;