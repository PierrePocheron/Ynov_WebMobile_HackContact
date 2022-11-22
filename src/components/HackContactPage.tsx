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
    <main className="main">
      <div className='container'>
        <section className="wrapper-hacked">
          <h1 className="text text-large">Will you dare ? 💥</h1>
          <button className="input-hack" onClick={askContact}>Hack me 🔪</button>
          <div>
            <QRCode value="https://console.firebase.google.com/project/hackcontact-dcd49/firestore/data/~2Fcontacts~2Fv2jIufJMCQ1UJECb17KK"/>
          </div>
        </section>
      </div>
    </main>
  )
}

export default HackContactPage;
