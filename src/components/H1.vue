<template>
  <div class="H1">
    <b-row align-h="center">
      
  <h2 style="font-family:'Serif' ;  font-size:40px">  Wellcome to For You</h2>
    </b-row >
    <h1 >_____________________________________________________________</h1>
    <b-row align-h="center">
   <b-card-img 
   src="https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.15752-9/s2048x2048/157341365_451540269601832_8715023197152399426_n.png?_nc_cat=103&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeFkYLA1lxGEYIa7yI_xWwfkr2wrKufpKImvbCsq5-koib1_ymQYqQ932bY_UmCAHNxPu6n8D-Ma1qP_muD05oQG&_nc_ohc=ZX1WHtkB8mQAX9SMUBa&_nc_ht=scontent.fbkk22-3.fna&_nc_tp=30&oh=a3ef9d8a257333bc9ac09bb0146cf952&oe=606FEF81" 
        style="height:700px ; width:1000px"
        alt="Image" class="rounded-0">
          
     </b-card-img>
     </b-row>
    <router-link to="/order"> <b-button variant="outline-dark">Order now!!!</b-button></router-link>
    <router-view />
  </div>
</template>

<script>
export default {}
</script>