import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const vuexStore=new Vuex.Store({
    state:{
        userInfo:{}
    },
    getters:{
        getUserInfo(state){
            return state.userInfo
        }
    },
    mutations:{
        setUserInfo(state,userInfo){
            state.userInfo=userInfo
        }
    },
    actions:{
        setUserInfo({commit},user){
            commit('setUserInfo',user)
        }
    }
})   


export default vuexStore;