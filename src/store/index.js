import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todo'
import list from './modules/list'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        todo,
        list
    }
})
