import React, { useState } from "react";

import Discount from "shared/ui/Discount/Discount";
import Header from "shared/ui/Header/Header";
import SignIn from "shared/ui/SignIn/SignIn";
import SignUp from "shared/ui/SignUp/SignUp";

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
      setRegWindow={setRegWindow}/>
      <SignUp 
      regWindow={regWindow} 
      setRegWindow={setRegWindow}/>
      <SignIn 
      signInWindow={signInWindow} 
      setSignInWindow={setSignInWindow}
      />
    </div>
  );
}

export default Home;