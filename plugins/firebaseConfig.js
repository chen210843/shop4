import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

if (!firebase.apps.length) {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: 'AIzaSyASSw-mbVkL1S4-KwX16uycR7Ue51t6XDE',
    authDomain: 'cs313-shopshop.firebaseapp.com',
    projectId: 'cs313-shopshop',
    storageBucket: 'cs313-shopshop.appspot.com',
    messagingSenderId: '130038563215',
    appId: '1:130038563215:web:056591b85ebab3f4e8cbfa',
    measurementId: 'G-KZQZJ1FLMF',
  }
  firebase.initializeApp(firebaseConfig)
}
export const shopshop = firebase.firestore()
export const auth = firebase.auth()
