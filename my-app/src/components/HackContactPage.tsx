import { collection, addDoc } from 'firebase/firestore';
import { db } from '..';

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
    <div>
      <button onClick={askContact}>Ask contact</button>
    </div>
  )
}

export default HackContactPage;
