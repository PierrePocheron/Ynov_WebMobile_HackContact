import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

interface PropsLoginPage {
  updateLogin: (isLogin: boolean) => void;
}

const LoginPage = (props: PropsLoginPage) => {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { updateLogin } = props;

  const handleClickPassword = async () => {
    //fetch for api firebase auth
    const auth = getAuth();
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    console.log(user);
    if(user) {
      updateLogin(true);
    }
  }

  const handleChangeEmail = (event: any) => {
    setEmail(event.currentTarget.value)
  }

  const handleChangePassword = (event: any) => {
    setPassword(event.currentTarget.value)
  }

  return (
    <div>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" value={email} onChange={handleChangeEmail}></input>

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" value={password} onChange={handleChangePassword}></input>

      <button onClick={handleClickPassword}>Login</button>
    </div>
  )
}

export default LoginPage;
