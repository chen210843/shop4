<template>
  <div  class="container" align="center">
     <b-form-group
        label="Email address:"
        label-for="input-1">
      <b-form-input
          id="email"
          v-model="email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>
        <b-form-group  label="Password:" label-for="input-4" >
        <b-form-input
          id="password"
          Type ="password"
          v-model="password"
          placeholder="Enter password"
          required
        ></b-form-input>
</b-form-group>
    <b-button variant="primary" style="height:70px ; width:280px" @click="signin">sign in</b-button>
    <br /><br />
    <b-button variant="dark" @click="login"><img src="https://สอบบรรจุ.com/wp-content/uploads/2020/11/google_logo.png" ima height="70" width="250" > </b-button>
  </div>
</template>
<script>
import firebase from 'firebase/app'
import { auth } from '/plugins/firebaseConfig.js'

export default {
  data(){
    return{
      email:"",
      password:""
    }
  },

  methods: {
    signin(){
    auth
    .createUserWithEmailAndPassword(this.email, this.password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("user=" + user)
    this.$router.replace('/home')
    
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log("error=" +errorCode )
    // ..
  });
  },
    login() {
     const provider = new firebase.auth.GoogleAuthProvider()
      auth 
        .signInWithPopup(provider)
        .then((result) => {
         
          const credential = result.credential
       
          const token = credential.accessToken
          console.log('token=' + token)
         
          const user = result.user
          console.log('user=' + user)
          this.$router.replace('/home')
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code
          console.log('error=' + errorCode)
        
          //   // ...
        })
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
          console.log('sign-out successful')
        })
        .catch((error) => {
          // An error happened.
          console.log(error)
        })
    },
  },
}
</script>
<style>



</style>