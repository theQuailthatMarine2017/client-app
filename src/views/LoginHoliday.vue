<template>
    <div class="login-page">
      <transition name="fade">
         <div class="wallpaper-login"></div>
      </transition>
      <div class="wallpaper-register"></div>

      <div class="container" style="margin-top:50px;">
         <div class="row">
            <div class="col-lg-7 col-md-8 col-sm-8 mx-auto">
               <b-overlay :show="show" rounded="sm">
               <div class="card login" style="background-color:rgba(3, 134, 172, 0.9);border-radius:15px;" ref="signin">
                  <h3 style="text-align:center;color:white;text-decoration:underline;">Holiday Portal</h3>
                  <h5 style="text-align:center;color:white;">This Portal Is <span style="font-weight:bolder;">STRICTLY</span> For Tenants Renting With HomesForExpats.</h5>
                  <h4 style="text-align:center;color:white;">Sign In</h4>
                  <form class="form-group" style="text-align:center;">
                     <input style="margin-bottom:15px;" v-model="client.code" class="form-control" placeholder="Enter Your Portal Code Assigned To You." required>
                  </form>
                  <b-button @click="login_agent"  style="margin-bottom:19px;font-weight:bolder;text-align:center;font-size:15px;background-color:#00BFFF;color:white;" class="btn-white">Login</b-button>
                  <div style="background-color:red;text-align:center;color:white;">
                     <p style="margin:10px;">Contact The Agent You Rented With For Portal Access If You Have Forgotten Or Lost Our Access Code</p>
                  </div>
                  <div v-if="login_error != null" style="background-color:red;text-align:center;color:white;">
                     <p style="margin:10px;">{{login_error}}<br>Contact Agent If Issue Continues</p>
                  </div>
               </div>
               </b-overlay>

            </div>
            
         </div>

      </div>

   </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            show:false,
            login_error:null,
            client:{
               code:null
            },
            success:false
        }
    },
    methods:{
        login_agent(){
           this.success = false
           this.login_error = null

           this.show = true
           //
           axios.post('https://us-central1-homesforexpats.cloudfunctions.net/loginHoliday',this.client).then( res => {

              console.log(res.data)

              if(res.data.title === 'user found'){

                 this.success = true
                 this.show= false
                 localStorage.setItem("client_fullnames", res.data.user.fullnames)
                 localStorage.setItem("client_code", res.data.user.clientcode)
                
               }

           }).catch(err => {

               this.login_error = err
           })
        }
    },
    watch:{
       success(val){
          if(val === true){
             this.$router.push({name:'holiday-deals'})
          }
       }
    }
    
}
</script>

<style scoped>
p {
   line-height: 1rem;
}

.card {
   padding: 20px;
}



.login-page {
   align-items: center;
   display: flex;
   height: 100vh;
}

   .wallpaper-login {
      background: url("../assets/holidaylog.jpeg")
         no-repeat center center;
      background-size: cover;
      height: 100%;
      position: absolute;
      width: 100%;
   }
   
   .fade-enter-active,
   .fade-leave-active {
  transition: opacity .5s;
}
   .fade-enter,
   .fade-leave-to {
      opacity: 0;
   }
   
   .wallpaper-register {
      background: url("../assets/holidaylog.jpeg")
         no-repeat center center;
      background-size: cover;
      height: 100%;
      position: absolute;
      width: 100%;
      z-index: -1;
   }

   h1 {
      margin-bottom: 1.5rem;
   }


.error {
   animation-name: errorShake;
   animation-duration: 0.3s;
}

@keyframes errorShake {
   0% {
      transform: translateX(-25px);
   }
   25% {
      transform: translateX(25px);
   }
   50% {
      transform: translateX(-25px);
   }
   75% {
      transform: translateX(25px);
   }
   100% {
      transform: translateX(0);
   }
}

</style>