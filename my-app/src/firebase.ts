import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyASTi1FEc7hQ2LV0pIE3_Nu_xgQptncKIM",
  authDomain: "hackcontact-dcd49.firebaseapp.com",
  projectId: "hackcontact-dcd49",
  storageBucket: "hackcontact-dcd49.appspot.com",
  messagingSenderId: "227694790430",
  appId: "1:227694790430:web:57f8e04f2d9afc03d2eb0f",
  measurementId: "G-M3W8TZF71H"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;