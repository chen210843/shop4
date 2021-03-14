<template>
  <div class="home">
    <home />
  </div>
</template>

<script>
import home from '../components/H1.vue'
import firebase from 'firebase/app'
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
   home
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null || user.name !=null) {
        // User is signed in.
        // ให้แสดงชื่อ email รูป
        this.$router.replace("/Home")
      } else {
        // No user is signed in.
        // กลับไปหน้า login
        this.$router.replace('/')
      }
    })
  },
}
</script>
