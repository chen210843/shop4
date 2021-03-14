<template>
  <div  class="container" align="center">
  <!-- <v-card>
    <v-card-title>
      <v-spacer />
      ลงทะเบียน
      <v-spacer />
    </v-card-title>
    <v-form>
      <v-row style="margin: 0px">
        <v-col cols="5">
          <v-subheader> Name : </v-subheader>
        </v-col>
        <v-col cols="6">
          <v-text-field outlined v-model="user.name" />
        </v-col>
      </v-row>
      <v-row style="margin: 0px">
        <v-col cols="5">
          <v-subheader> LastName : </v-subheader>
        </v-col>
        <v-col cols="6">
          <v-text-field outlined v-model="user.lastname" />
        </v-col>
      </v-row>
      <v-row style="margin: 0px">
        <v-col cols="5">
          <v-subheader> Telephone : </v-subheader>
        </v-col>
        <v-col cols="6">
          <v-text-field outlined v-model="user.telephone" />
        </v-col>
      </v-row>
      <v-row style="margin: 0px">
        <v-col cols="5">
          <v-subheader> Password : </v-subheader>
        </v-col>
        <v-col cols="6">
          <v-text-field
            outlined
            v-model="user.password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
          />
        </v-col>
      </v-row>
      <v-card-actions>
        <v-spacer />
        <v-btn color="green" @click="addUser"> ลงทะเบียน </v-btn>
        <v-spacer />
      </v-card-actions>
    </v-form>
  </v-card> -->


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
       show1: false,
      user: {
        name: "",
        lastname: "",
        telephone: "",
        password: "",
      },
      // email:"",
      // password:""
    }
  },

  methods: {
  //   signin(){
  //   auth
  //   .createUserWithEmailAndPassword(this.email, this.password)
  //   .then((userCredential) => {
  //   // Signed in 
  //   const user = userCredential.user;
  //   console.log("user=" + user)
  //   this.$router.replace('/home')
    
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   console.log("error=" +errorCode )
  //   // ..
  // });
  // },
     addUser() {
      this.$store.dispatch("addUser", this.user)
      .then(this.$emit("colse"));
      alert("success")
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