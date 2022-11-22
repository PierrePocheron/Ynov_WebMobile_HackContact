import db from "../firebase";
import { collection, addDoc } from 'firebase/firestore';

const HackContactPage = () => {
  const askContact = () => {
    if("contacts" in navigator) {
      const props = (navigator as any).contacts.getProperties();


    }

  }

  const sendContact = async (allContacts: any) => {
    let contactsRef = await addDoc(collection(db, 'contacts'), {
      contact: 'AH',
    });
  }

  return (
    <>
    <div>
      <head>
          <title>Hacking page</title>
        </head>
        <body>
          <button onClick={askContact}></button>
        </body>
    </div>
    </>
  )
}

export default HackContactPage;
