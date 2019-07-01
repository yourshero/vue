import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    count:2,
    othercount:1
}
const actions = {
    increment:({commit},a) => commit('increment',a),
    decrement:({commit},n) => commit('decrement',n)
}

const mutations = {
    increment (state,payload){
        state.count = state.count + payload.m
    },
    decrement (state,n){
        state.count = state.count - n
    },
}
const getters = {
    docount: state=>{
        return state.count
    },
    othercount: state=>{
        return state.othercount
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})