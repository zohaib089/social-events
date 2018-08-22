import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBI6JjIMbZt-HtfYme5Hb7Alz0aTHJJ6Is',
  authDomain: 'scioevents.firebaseapp.com',
  databaseURL: 'https://scioevents.firebaseio.com',
  projectId: 'scioevents',
  storageBucket: 'scioevents.appspot.com',
  messagingSenderId: '821953198235'
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);
export default firebase;
