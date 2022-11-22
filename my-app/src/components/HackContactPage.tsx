import { collection, addDoc } from 'firebase/firestore';
import { db } from '..';
import { pwa } from "pwafire";

const HackContactPage = () => {
  const askContact = async () => {
    if("contacts" in navigator) {
      const props = ["name", "email", "tel"];
      const options = { multiple: true };

      const res = await pwa.Contacts(props, options);
      if(res.ok) {
        sendContact(res.contacts);
      }
    }

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
      <button onClick={askContact}>Ask contact</button>
    </div>
  )
}

export default HackContactPage;
