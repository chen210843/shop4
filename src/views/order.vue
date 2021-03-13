<template>
  <div class="about">
   <order />
 
  </div>
</template>
<script>
// @ is an alias to /src
import firebase from 'firebase/app'
import order from '../components/O1.vue'

// import { shopshop } from "/plugins/firebaseConfig.js";

export default {
  name: 'Home',
  components: {
   order,
  },
   data() {
    return {
      product1: '',
     
    }
  },
  // methods: {
  //   addData() {
  //     // เก็บข้อมูล Form ใน collection MyForm ( มี 1 document แต่จะ update ข้อมูลเรื่อย ๆ )
  //     shopshop;
  //     shopshop
  //       .collection("Order")
  //       .doc()
  //       .set({
  //         product1: this.product1.name,
  //       })
  //       .then(() => {
  //         console.log("Document successfully written!");
  //         alert("Success")
  //       })
  //       .catch((error) => {
  //         console.error("Error writing document: ", error);
  //       });
  //   },
  // },
  
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