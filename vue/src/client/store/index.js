import Vue from 'vue'
import Vuex from 'vuex'

import question from './question'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    question
  }
})

export default store
