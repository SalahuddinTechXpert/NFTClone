import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCX-NzCqkCa2E2BoRta8hk4Zc8IoUXZHiA',
  authDomain: 'testchatapp-1fb43.firebaseapp.com',
  databaseURL: 'https://testchatapp-1fb43-default-rtdb.firebaseio.com',
  projectId: 'testchatapp-1fb43',
  storageBucket: 'testchatapp-1fb43.appspot.com',
  messagingSenderId: '298646014217',
  appId: '1:298646014217:web:1140e93cc8559fb362abd8',
  measurementId: 'G-WNYKZNWMMQ',
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export {db, auth};

// import firebase from 'firebase'

// import { View, Text } from 'react-native'
// import React from 'react'

// const Firebase = () => {
//   const init = () => {
//     if (!firebase.apps.length){
//       firebase.initializeApp({
//         apiKey: 'AIzaSyAI9kRPV-61yqT-6zcVxtyWQk49UZASaCc',
//         authDomain: 'singalchatroom.firebaseapp.com',
//         projectId: 'singalchatroom',
//         storageBucket: 'singalchatroom.appspot.com',
//         messagingSenderId: '593495135640',
//         appId: '1:593495135640:web:f712bd1801e13d0b26c7ed',
//         measurementId: 'G-J0H9W33ZT0',
//       });
//     }
//   }

//   const checkAuth = () => {
//     firebase.auth().onAuthStateChanged(user=>{
//       if(!user) {
//         firebase.auth().signInAnonymously();
//       };
//     })
//   }
//   const sendMessage = (message) => {
//     message.forEach(element => {
//       const message = {text: element.text, timestamp: firebase.database.ServerValue.TIMESTAMP,
//       user: element.user}
//       db.push(message)

//     })

//     };
//     const parseMessage = (messages)=>{
//       const {user, text , timestamp} = messages.val()
//       const {key: _id} = messages
//       const createdAt = new Date(timestamp)
//       return {_id ,user, text, createdAt}
//     }
//     get = callback =>{
//       db.on('child_added', snapshot => callback(parse(snapshot)))
//     }

//   get db() {
//     retrun firebase.database().ref('messages')
//   }

//   get off  () {
//     db.off()
//   }
//   get uid () {
//     return (firebase.auth().currentUser || {}).uid
//   }

//   return (
//     <View>
//       <Text>firebase</Text>
//     </View>
//   )
// }

// export default Firebase

// import {initializeApp} from 'firebase/app';
// import {getAnalytics} from 'firebase/analytics';
// import {
//   getAuth,
//   signInWithEmailAndPassword,
//   createuserWithEmailAndPassword,
// } from 'firebase/auth';
// import {getStorage} from 'firebase/storage';
// import {initializeFirestore} from 'firebase/firestore';
// import { app } from "./firebase";
// const firebaseConfig = {
//   apiKey: 'AIzaSyAI9kRPV-61yqT-6zcVxtyWQk49UZASaCc',
//   authDomain: 'singalchatroom.firebaseapp.com',
//   projectId: 'singalchatroom',
//   storageBucket: 'singalchatroom.appspot.com',
//   messagingSenderId: '593495135640',
//   appId: '1:593495135640:web:f712bd1801e13d0b26c7ed',
//   measurementId: 'G-J0H9W33ZT0',
// };
// export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
// export const auth = getAuth(app);
// export const storage = getStorage(app);
// export const db = initializeFirestore(app, {
//   experimentalForceLongPolling: true,
// });

// export function signIn(email, password) {
//   return signInWithEmailAndPassword(auth, email, password);
// }
// export function signUp(email, password) {
//   return createuserWithEmailAndPassword(auth, email, password);
// }
