import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
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

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
