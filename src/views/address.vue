<template>
  <div class="container">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.15752-9/s2048x2048/157341365_451540269601832_8715023197152399426_n.png?_nc_cat=103&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeFkYLA1lxGEYIa7yI_xWwfkr2wrKufpKImvbCsq5-koib1_ymQYqQ932bY_UmCAHNxPu6n8D-Ma1qP_muD05oQG&_nc_ohc=ZX1WHtkB8mQAX9SMUBa&_nc_ht=scontent.fbkk22-3.fna&_nc_tp=30&oh=a3ef9d8a257333bc9ac09bb0146cf952&oe=606FEF81" 
        alt="Image" class="rounded-0" height="500" width="400"></b-card-img>
      </b-col>
      <b-col   md="6">
        <h1> ยืนยันรายการสั่งซื้อ </h1>
        <b-card-body >
          
        <p><b-checkbox> ชำระเงินสด </b-checkbox><br></p>     
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
    <b-form-group id="input-group-2" label="Name:" label-for="name">
      <b-form-input
        id="name"
        v-model="form.name"
        placeholder="Enter name"
        required
      ></b-form-input>
    </b-form-group>

    <b-form-group id="input-group-2" label="Lastname:" label-for="name">
      <b-form-input
        id="lastname"
        v-model="form.lastname"
        placeholder="Enter LastName"
        required
      ></b-form-input>
    </b-form-group>

     <b-form-group id="input-group-2" label="Phone:" label-for="name">
      <b-form-input
       type="number"
        id="phone"
        v-model="form.phone"
        placeholder="Enter Phone"
        maxlength="10"
        required
      ></b-form-input>
    </b-form-group>
      <!-- ส่งตามที่อยู่ -->
      <v-row>
        <v-col md="4">
       
        
      </v-col>
      <v-col md="8">
     <b-button  v-b-toggle.collapse-1 variant="secondary">ส่งตามที่อยู่</b-button><br>
      </v-col>
      </v-row>
      
  <b-collapse id="collapse-1" class="mt-2">
    <b-card>
      <b-form-group id="input-group-2" label="Address:" label-for="name">
      <b-form-textarea
        id="address"
        v-model="form.address"
        placeholder="Enter Address"
        required
      ></b-form-textarea>
    </b-form-group>

       </b-card>
     </b-collapse>
    
    
     <br><p><b-button @click="addData"  variant="dark">ยืนยัน</b-button></p>

        </b-card-body>
      </b-col>
    </b-row>
   
     
      
    
   
  </div>
</template>

<script>
import { shopshop } from "/plugins/firebaseConfig.js";
import firebase from 'firebase/app'

export default {
  data() {
    return {
      list:[],

      form: {
        email: "",
        name: "",
        lastnam:"",
        address:"",
        phone:""
      },
    };
  },
  methods: {
    addData() {
      // เก็บข้อมูล Form ใน collection MyForm ( มี 1 document แต่จะ update ข้อมูลเรื่อย ๆ )
      shopshop;
      shopshop
      .collection("User")
        .doc()
        .set({
          email: this.form.email,
          name: this.form.name,
          lastname: this.form.lastname,
          phone: this.form.phone,
          address: this.form.address,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then(() => {
          console.log("Document successfully written!");
          alert("สั่งซื้อเสร็จสิ้น")
          this.$router.replace("/home")
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
     shopshop;
      shopshop
      .collection("Menu")
        .doc("User")
        .set({
          email: this.form.email,
          name: this.form.name,
          lastname: this.form.lastname,
          phone: this.form.phone,
          address: this.form.address,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .catch((error) => {
          console.error("Error writing document: ", error);
        });
  },
     getData(){
      shopshop.collection("Orders").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        this.list.push(doc.data())
    });
    });
   }
}
}

</script>
