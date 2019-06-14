import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"
import Account from './modules/account'
Vue.use(Vuex)

 const store = new Vuex.Store({
    modules: {
        Account,
    },
	plugins: [createPersistedState()]
})
export default store