<template>
  <div id="app">
    <h class="h3 my-0 me-md-auto fw-normal"><b>For You</b></h>
 <br /> <br />
  <main class="container">
  <!-- <h4>ราคารวม {{ sum+product1.amount*product1.price+product2.amount*product2.price+product3.amount*product3.price+product4.amount*product4.price+product5.amount*product5.price+product6.amount*product6.price }} บาท</h4> -->
  <b-row cols-md='2' cols-sm="1" cols-lg="2">
    <b-card 
    bg-variant="" text-variant="" :header="user.id"  v-for="user in list" :key="user.id"
    img-src=""
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 50rem;"
    class="card md-3" >
      <b-card-text>
       <h2>{{user.name}}</h2>  <br /><br />
      <img :src="user.url" height="250px" width="350" > <br /><br />
     <h4>Price: {{user.price}}</h4><br /><br />
      <h5>รวม : sum{{user.amount*user.price}} บาท</h5>
        
      </b-card-text>
      <button type="button" class="w-100 btn btn-lg btn-outline-success" v-on:click= "user.amount += 1" >+</button>
          <p>จำนวน{{user.amount}}  ถุง </p>
         <button type="button" class="w-100 btn btn-lg btn-outline-danger" v-on:click= "user.amount -= 1" >-</button>
    </b-card> 
    </b-row>
    {{sum}}
    <br>
<b-button  align="center" block variant="primary" @click="$bvModal.show('bv-modal-example')">ยืนยัน</b-button>


  
   
<b-modal id="bv-modal-example" size="lg" hide-footer>
    <div class="d-block text-center">
      <h3><p class="h4 my-0 me-md-auto fw-normal">รายการสินค้า</p>
  
  <header  class="d-flex flex-column flex-md-row align-items-mide p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm">
  <b-row cols-lg="1" cols-md="1" cols-sm="1">     
 
  
  </b-row>
  </header>
  </h3>  
  </div>
  <!-- <div class="my-4"><h4>ราคารวม{{ sum+product1.amount*product1.price+product2.amount*product2.price+
    product3.amount*product3.price+product4.amount*product4.price+product5.amount*product5.price+product6.amount*product6.price }} บาท</h4>
 </div> -->
  <b-button variant="light" block   href="/About">สั่งซื้อ</b-button>
  </b-modal>
   <b-button variant="danger" block value="Reset" onClick="javascript:location.reload();">Resset</b-button>
  
  </main>
  
  </div>
</template> 


<script>
import { shopshop } from "/plugins/firebaseConfig.js"
export default {
  
  name: 'App',
  data(){
    return{
      list: [],
      amount:[],
      sum:''
    }
  },
  created(){
    this.getData()
  },
  methods: {
    getData(){
      shopshop.collection("orders").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        this.list.push(doc.data())
    });
});
    }
  }
}
</script>
