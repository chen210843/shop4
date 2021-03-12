<template>
  <div id="app">
  
    <h class="h3 my-0 me-md-auto fw-normal"><b>Shop-Me.</b></h>
 <br /> <br />
  
  <main class="container">
  <h4>ราคารวม {{ sum+product1.amount*product1.price+product2.amount*product2.price+product3.amount*product3.price+product4.amount*product4.price+product5.amount*product5.price+product6.amount*product6.price }} บาท</h4>
    <div class="row">
    <div class="col">
      <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 fw-normal">{{product1.name}}</h4>
      </div>
      <div class="card-body">
        <img :src="product1.image"
        img height = "250"
         width="300">
        <ul class="list-unstyled text-small">ราคา {{product1.price}} บาท</ul>
        <div id="example-1">
          <button type="button" class="w-100 btn btn-lg btn-outline-success" v-on:click= "product1.amount += 1" >+</button>
          <p>จำนวน {{ product1.amount }} ถุง </p>
         <button type="button" class="w-100 btn btn-lg btn-outline-danger" v-on:click= "product1.amount -= 1" >-</button>
        </div>
      </div>
    </div>
    </div>

    <div class="col">
      <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 fw-normal">{{product2.name}}</h4>
      </div>
      <div class="card-body">
        <img :src="product2.image"
        img height = "250"
         width="300">
        <ul class="list-unstyled text-small">ราคา{{product2.price}} บาท</ul>
        <div id="example-2">
          <button type="button" class="w-100 btn btn-lg btn-outline-success" v-on:click= "product2.amount += 1" >+</button>
          <p>จำนวน {{ product2.amount }} ขวด </p>
           <button type="button" class="w-100 btn btn-lg btn-outline-danger" v-on:click= "product2.amount -= 1" >-</button>
        </div>
      </div>
    </div>
    </div>
    <div class="col">
      <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 fw-normal">{{product3.name}}</h4>
      </div>
      <div class="card-body">
        <img :src="product3.image"
        img height = "250"
         width="300">
        <ul class="list-unstyled text-small">ราคา {{product3.price}} บาท</ul>
        <div id="example-3">
          <button type="button" class="w-100 btn btn-lg btn-outline-success" v-on:click= "product3.amount += 1" >+</button>
          <p>จำนวน {{ product3.amount }} ชิ้น </p>
           <button type="button" class="w-100 btn btn-lg btn-outline-danger" v-on:click= "product3.amount -= 1" >-</button>
        </div>
      </div>
    </div>
    </div>
  </div>
    <div class="row ">
    <div class="col">
      <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 fw-normal">{{product4.name}}</h4>
      </div>
      <div class="card-body">
        <img :src="product4.image"
        img height = "250"
         width="300">
        <ul class="list-unstyled text-small">ราคา {{product4.price}} บาท</ul>
        <div id="example-4">
          <button type="button" class="w-100 btn btn-lg btn-outline-success" v-on:click= "product4.amount += 1" >+</button>
          <p>จำนวน {{ product4.amount }} กล่อง </p>
           <button type="button" class="w-100 btn btn-lg btn-outline-danger" v-on:click= "product4.amount -= 1" >-</button>
        </div>
      </div>
    </div>
    </div>
    <div class="col">
      <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 fw-normal">{{product5.name}}</h4>
      </div>
      <div class="card-body">
        <img :src="product5.image"
        img height = "250"
         width="250">
        <ul class="list-unstyled text-small">ราคา {{product5.price}} บาท</ul>
        <div id="example-5">
          <button type="button" class="w-100 btn btn-lg btn-outline-success" v-on:click= "product5.amount += 1" >+</button>
          <p>จำนวน {{ product5.amount }} ขวด </p>
          <button type="button" class="w-100 btn btn-lg btn-outline-danger" v-on:click= "product6.amount -= 1" >-</button>
          
        </div>
      </div>
    </div>
    </div>
    <div class="col">
      <div class="card mb-4 shadow-sm">
      <div class="card-header">
        <h4 class="my-0 fw-normal">{{product6.name}}</h4>
      </div>
      <div class="card-body">
        <img :src="product6.image"
        img height = "250"
         width="250">
        <ul class="list-unstyled text-small">ราคา {{product6.price}} บาท</ul>
        <div id="example-6">
          <button type="button" class="w-100 btn btn-lg btn-outline-success" v-on:click= "product6.amount += 1" >+</button>
          <p>จำนวน {{ product6.amount }} ถุง </p>
           <button type="button" class="w-100 btn btn-lg btn-outline-danger" v-on:click= "product6.amount -= 1" >-</button>
        </div>
      </div>
    </div>
    </div>
  </div>
   <b-button  align="center" block variant="primary" @click="$bvModal.show('bv-modal-example')">ยืนยัน</b-button>
<b-modal id="bv-modal-example" size="lg" hide-footer>
    <div class="d-block text-center">
      <h3><p class="h4 my-0 me-md-auto fw-normal">รายการสินค้า</p>
  <header  class="d-flex flex-column flex-md-row align-items-mide p-3 px-md-4 mb-3 bg-body border-bottom shadow-sm">
  <b-row cols-lg="1" cols-md="1" cols-sm="1">     
  <div v-if="product1.amount >= 1">
    <p1>{{product1.name}}</p1>
    <p1> x{{ product1.amount }} </p1>
    <p1> รวม{{ product1.amount*product1.price }} บาท </p1>
  </div><br>
  <div v-if="product2.amount >= 1" block>
    <p1>{{product2.name}}</p1>
    
    <p1> x{{ product2.amount }}</p1>
     <p1> รวม{{ product2.amount*product2.price }} บาท </p1>
  </div><br>
  <div v-if="product3.amount >= 1">
    <p1>{{product3.name}}</p1>
   
    <p1> x{{ product3.amount }}</p1>
     <p1> รวม{{ product3.amount*product3.price }} บาท </p1>
  </div><br>
  <div v-if="product4.amount >= 1">
    <p1>{{product4.name}}</p1>
    
    <p1> x{{ product4.amount }}</p1>
     <p1> รวม{{ product4.amount*product4.price }} บาท </p1>
  </div><br>
  <div v-if="product5.amount >= 1">
    <p1>{{product5.name}}</p1>
    <p1> x{{ product5.amount }}</p1>
     <p1> รวม{{ product5.amount*product5.price }} บาท </p1>
  </div><br>
  <div v-if="product6.amount >= 1">
    <p1>{{product6.name}}</p1>
    <p1> x{{ product6.amount }}</p1>
     <p1> รวม{{ product6.amount*product6.price }}  บาท</p1>
  </div></b-row>
  </header></h3><div class="my-4"><h4>ราคารวม{{ sum+product1.amount*product1.price+product2.amount*product2.price+
    product3.amount*product3.price+product4.amount*product4.price+product5.amount*product5.price+product6.amount*product6.price }} บาท</h4>
 </div>
    </div>
    <b-button variant="light" block @click="$bvModal.hide" href="/About">สั่งซื้อ</b-button>
  </b-modal>
   <b-button variant="danger" block value="Reset" onClick="javascript:location.reload();">Resset</b-button>
  
  </main>
  </div>
</template> 

<script>
export default {
  name: 'App',
  data(){
    return{
      product1:{
        image :"https://media-falcon.s3-ap-southeast-1.amazonaws.com/banoffee-5.jpg?fbclid=IwAR1WBviMQZrGRD3QsX3cm4-2XkzgL-1o-Z2WZyYTNx3KLjUs7AIZXLJ9VgI",
        name:"บานอฟฟี่",
        price:15,
        amount:0
      },
      product2:{
        image:"https://i.pinimg.com/originals/66/21/27/662127c97e65f4d5bd8c0dc70477967b.jpg?fbclid=IwAR2jjRbn5t0vcO0RSUtnZAoUPNrjplhIV1LdZlHbz18gviQxVEQYswS9idY",
        name:"โอรีโอ้ชีสเค้ก ",
        price:20,
        amount:0
      },
      product3:{
        image:"https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.15752-9/157594397_2631398383819021_7135742903539130309_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeE3pZ6Mh4X8cyLJBjdrZHQAxJbX2OOjLQvEltfY46MtC7pTXs5B62IaPR7mMQSIjJVLeHKCchQLyv047aFdlTTL&_nc_ohc=03LrrulkmZ0AX83CTg6&_nc_ht=scontent.fbkk10-1.fna&oh=a78e6cd8b9ab1fa9ec71f0a6cb1f244c&oe=606B6E15",
        name:"แซนด์วิช",
        price:25,
        amount:0
      },
      product4:{
        image:"https://sites.google.com/site/huchy297/_/rsrc/1411724289912/bat-texr-khek-butter-cake-khek-ney-sd/%E0%B8%9A%E0%B8%B1%E0%B8%95%E0%B9%80%E0%B8%95%E0%B8%AD.jpg",
        name:"เค้กเนย",
        price:10,
        amount:0
      },
      product5:{
        image:"https://krua.co/wp-content/uploads/2020/07/RB0148_SEOImage_1200x630_SEO.jpg",
        name:"แองเจิ้ลฟูดเค้ก",
        price:45,
        amount:0
      },
      product6:{
        image:"https://i.ytimg.com/vi/PK30prEOFxo/maxresdefault.jpg",
        name:"ชิฟฟ่อนเค้ก",
        price:20,
        amount:0
      },
      data:[],
      sum: 0,count:0,say: function (message) {
      alert(message)
    }
    }
  }
}
</script>
