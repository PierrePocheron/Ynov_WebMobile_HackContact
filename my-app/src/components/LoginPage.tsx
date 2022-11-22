import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

const auth = getAuth()

interface PropsLoginPage {
  updateLogin: (isLogin: boolean) => void;
}

const LoginPage = (props: PropsLoginPage) => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { updateLogin } = props;

  const handleClickPassword = () => {
    //fetch for api firebase auth
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential: any) => {
      updateLogin(true);
    })
    .catch((error: any) => {

    })
  }

  const handleChangeEmail = (event: any) => {
    setEmail(event.currentTarget.value)
  }

  const handleChangePassword = (event: any) => {
    setPassword(event.currentTarget.value)
  }

  return (
    <div>
      <title>Login Page</title>

      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" value={email} onChange={handleChangeEmail}></input>

      <label htmlFor="password">Username</label>
      <input type="password" id="password" name="password" value={password} onChange={handleChangePassword}></input>

      <button onClick={handleClickPassword}>Login</button>
    </div>
  )
}

export default LoginPage;
