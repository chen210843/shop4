import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyCQrSpGP0H0RVBlv0lIYT0SC4iyGXUUUqk",
    authDomain: "projact-present.firebaseapp.com",
    projectId: "projact-present",
    storageBucket: "projact-present.appspot.com",
    messagingSenderId: "491500757468",
    appId: "1:491500757468:web:62c90cf6072d22d7b22f19"
  };
  firebase.initializeApp(firebaseConfig)
}
export const shopshop = firebase.firestore()
export const auth = firebase.auth()
