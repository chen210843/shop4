<template>
  <div class="about">
   <order />
  </div>
</template>
<script>
// @ is an alias to /src
import firebase from 'firebase/app'
import order from '../components/O1.vue'

export default {
  name: 'Home',
  components: {
   order,
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
      } else {
        // No user is signed in.
        // กลับไปหน้า login
        this.$router.replace('/')
      }
    })
  },
}

</script>