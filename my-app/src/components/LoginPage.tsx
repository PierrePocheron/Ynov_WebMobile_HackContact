const LoginPage = () => {

  const handleClickPassword = () => {
    //fetch for api firebase auth


  }

  return (
    <div>
      <title>Login Page</title>

      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username"></input>

      <label htmlFor="password">Username</label>
      <input type="password" id="password" name="password"></input>

      <button type="submit">Login</button>
    </div>
  )
}

export default LoginPage;