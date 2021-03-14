import Vue from 'vue'
import Vuex from 'vuex'
import 'firebase/firestore'
import { shopshop } from '../../plugins/firebaseConfig'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users:"",
    haveUser:false
  },
  mutations: {
    login(state, playload) {
      console.log(playload)
      state.haveUser = true
      state.user = playload
    }
  },
  actions: {
    addUser( _ , playload) {
      shopshop.collection('users').add({playload})
    },
    async login({commit}, playload) {
      const usres = await shopshop.collection('users').get()
      usres.forEach((user) => {
        const usernow = user.data().playload
        if (usernow.name == playload.name && usernow.password == playload.password) {
          commit('login', usernow)
          alert("success")
        }
        else {
          console.log('err')
        }
      })
      
    }
  },
  modules: {
  }
})
