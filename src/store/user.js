import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default {
  state: {
    success:false,
    business_services:null,
    error:null,
    user:null
  },
  getters: {
    success: state => state.success,
    user:state=> state.user,
    business_services: state => state.business_services,
    error: state => state.error,
  },
  mutations: {
    getBusiness_Service(state,data){

        state.business_service = data;
  
    },
    registerAccount(state,data){
  
        state.success = data;
    },
    addError(state,data){

        state.error = data;
    },
    loginAccount(state, data){

        state.success = data
    },
    UserAccount(state,data){

        state.user = data;
    },
    logout(state){

        state.success = false;
        state.business_service = null;
        state.error = null;
    }
   
  },
  actions: {

    get_business_services({commit}){
        commit("getBusiness_Service", null)

        axios.get('http://localhost:5001/chellez-kitchen/us-central1/getBusinessServices', {
            headers: {
              Authorization_Key: process.env.VUE_APP_API_KEY,
              app_id:process.env.VUE_APP_ID,
              user_id:localStorage.getItem('user_id')
            }}).then( response => {

                if(response != null){
      
                  console.log(response.data.business_services)
                  commit("getBusiness_Service", response.data.business_services)
      
                }
      
            }).catch( err => {
      
      
              if(err.message === 'Request failed with status code 501'){
      
                var error_email_mobile = 'Server Error. Please Try Again!'
                commit("AddError", error_email_mobile)
              }
      
            })

    },
    createUser({commit},data){
        commit("registerAccount", false)

        axios.post('http://localhost:5001/chellez-kitchen/us-central1/createRegularAccount', data,{
            headers: {
              Authorization_Key: process.env.VUE_APP_API_KEY,
              app_id:process.env.VUE_APP_ID //the token is a variable which holds the token
            }}).then( response => {

                if(response != null){
      
                  console.log(response.data.user)
                  localStorage.setItem('user_id',response.data.user._id)
                  localStorage.setItem('user',response.data.user)
                  commit("registerAccount", true)
      
                }
      
            }).catch( err => {
      
      
              if(err.message === 'Request failed with status code 501'){
      
                var error_email_mobile = 'Server Error. Please Try Again!'
                commit("AddError", error_email_mobile)
              }
      
            })
    }
  }
};