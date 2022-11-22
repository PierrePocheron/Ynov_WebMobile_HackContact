const HackContactPage = () => {

  const askContact = () => {
    if("contacts" in navigator) {
      const props = await navigator.contacts.getProperties();


    }

  }

  return (
    <>
      <head>
        <title>Hacking page</title>
      </head>
      <body>
        <button onClick={askContact}></button>
      </body>
    </>
  )
}

export default HackContactPage;
