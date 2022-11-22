import React, { useState } from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import HackContactPage from './components/HackContactPage';

function App() {

  const [isLogin, setIsLogin] = useState<boolean>(false);

  return (
    <>
      {isLogin && <HackContactPage/>}
      {!isLogin && <LoginPage updateLogin={setIsLogin}/>}
    </>
  );
}

export default App;
