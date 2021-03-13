<template>
  <div class="container">
    <b-form-group
      id="input-group-1"
      label="Email :"
      label-for="input-1"
    >
      <b-form-input
        id="email"
        v-model="form.email"
        type="email"
        placeholder="Enter email"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Your Name:" label-for="name">
      <b-form-input
        id="name"
        v-model="form.name"
        placeholder="Enter name"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Your Lastname" label-for="name">
      <b-form-input
        id="lastname"
        v-model="form.lastname"
        placeholder="Enter LastName"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Address:" label-for="name">
      <b-form-textarea
        id="address"
        v-model="form.address"
        placeholder="Enter Address"
        required
      ></b-form-textarea>
    </b-form-group>
    

    <b-button @click="addData" variant="primary">Submit</b-button>
  </div>
</template>

<script>
import { shopshop } from "/plugins/firebaseConfig.js";

export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        lastnam:"",
        address:""
      },
    };
  },
  methods: {
    addData() {
      // เก็บข้อมูล Form ใน collection MyForm ( มี 1 document แต่จะ update ข้อมูลเรื่อย ๆ )
      shopshop;
      shopshop
        .collection("Address")
        .doc()
        .set({
          email: this.form.email,
          name: this.form.name,
          lastname: this.form.lastname,
          address: this.form.address
        })
        .then(() => {
          console.log("Document successfully written!");
          alert("Success")
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
    },
  },
};
</script>
