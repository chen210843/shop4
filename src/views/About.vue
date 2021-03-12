<template>
  <div class="about">
    <h1>This is an about page</h1>
     <payment/>
  </div>
</template>
<script>
// @ is an alias to /src
import firebase from 'firebase/app'
import payment from '../components/payment.vue'
export default { 
  components: {
   payment
  },
   data() {
    return {
      name: '',
      email: '',
      photoURL: '',
    }
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        // User is signed in.
        // ให้แสดงชื่อ email รูป
       this.$router('/')
      } else {
        // No user is signed in.
        // กลับไปหน้า login
        this.$router.replace('/')
      }
    })
  },
}

</script>