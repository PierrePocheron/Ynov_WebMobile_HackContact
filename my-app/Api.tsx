const login = () => {
  //Login
}

const sendAllContacts = () => {
  //Send All Contacts
}



const props = ['name', 'email', 'tel', 'address', 'icon'];
const opts = {multiple: true};

async function getContacts() {
  try {
      const contacts = await navigator.contacts.select(props, opts);
      handleResults(contacts);
  } catch (ex) {
      console.log("Aucun contact a récup pd" + ex);
  }
}