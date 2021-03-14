<template>
  <div id="app">
    <div id="nav">
      <div id="navbar">
        <b-navbar  toggleable="md" type="" variant="dark">
          <b-navbar-brand href="">
            <b-col sm="1">
              <router-link to="/home"
                ><img
                  src="https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.15752-9/s2048x2048/157341365_451540269601832_8715023197152399426_n.png?_nc_cat=103&ccb=1-3&_nc_sid=ae9488&_nc_eui2=AeFkYLA1lxGEYIa7yI_xWwfkr2wrKufpKImvbCsq5-koib1_ymQYqQ932bY_UmCAHNxPu6n8D-Ma1qP_muD05oQG&_nc_ohc=ZX1WHtkB8mQAX9SMUBa&_nc_ht=scontent.fbkk22-3.fna&_nc_tp=30&oh=a3ef9d8a257333bc9ac09bb0146cf952&oe=606FEF81"
                  class="d-inline-block align-top"
                  height="100"
                  width="150"
                />
              </router-link>
            </b-col>
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#">
                <b-col sm="1">
                  <router-link to="/order"><h3>order</h3></router-link>
                </b-col></b-nav-item
              >
            </b-navbar-nav>


            <b-navbar-nav class="ml-auto"> 
                      <!-- <b-nav-item href="#">
                <b-col sm="1">
                  <router-link to="/register"><h3><b-button>login</b-button></h3></router-link>
                </b-col></b-nav-item>
           -->
      
      
        <b-nav-form>
         <b-button variant="light" @click="logout">logout</b-button>
        </b-nav-form>
      </b-navbar-nav>
            <!-- Right aligned nav items -->
          </b-collapse>
        </b-navbar><br/> <br/>
      </div>
    </div>
    
    <router-view /> 
    <footer >
      <b-navbar>
      
      </b-navbar>

       
      </footer>
  </div>
</template>
<script>
import firebase from 'firebase/app'
export default {
  data(){
    return{
    name:"",
    email:"",
    photoURL:"",
    }
  },
   methods:{
        
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
   beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        // User is signed in.
        // ให้แสดงชื่อ email รูป
        this.name = user.displayName
        this.email = user.email
        this.photoURL = user.photoURL
      } else {
        // No user is signed in.
        // กลับไปหน้า login
        this.$router.replace('/')
      }
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
#nav {
  padding: 20px;
}
#nav a {
  font-weight: bold ;
  color: #fdfdfd;
}
#nav a.router-link-exact-active {
  color: #f8c10ce7;
}
.co{
  
  color: #fdfdfd;
}

</style>
