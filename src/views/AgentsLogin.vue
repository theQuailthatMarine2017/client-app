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
               <div class="card login" style="background-color:rgba(3, 134, 172, 0.5);border-radius:15px;" ref="signin">
                  <h3 style="text-align:center;color:white;text-decoration:underline;">Agent's Portal</h3>
                  <h5 style="text-align:center;color:white;">This Portal Is <span style="font-weight:bolder;">STRICTLY</span> For Agent's Registered With HomesForExpats.</h5>
                  <h4 style="text-align:center;color:white;">Sign In</h4>
                  <form class="form-group" style="text-align:center;">
                     <input style="margin-bottom:15px;" v-model="staff.code" class="form-control" placeholder="Enter Your Portal Code Assigned To You." required>
                  </form>
                  <b-button @click="login_agent"  style="margin-bottom:19px;font-weight:bolder;text-align:center;font-size:15px;background-color:#00BFFF;color:white;" class="btn-white">Login</b-button>
                  <div style="background-color:red;text-align:center;color:white;">
                     <p style="margin:10px;">Contact IT If Forgotten Your Portal Code</p>
                  </div>
                  <div v-if="login_error != null" style="background-color:red;text-align:center;color:white;">
                     <p style="margin:10px;">{{login_error}}<br>Contact Administrator If Issue Continues</p>
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
            staff:{
               code:null
            },
            success:false
        }
    },
    mounted(){

       this.checkUserStatus()
    },
    methods:{
       checkUserStatus(){

          var code = localStorage.getItem("user_agentcode")


          if(localStorage.getItem('user_agentcode') === null){

             this.show = false
          }else{

             this.$router.push({name:'agents-portal'})

          }
       },
        login_agent(){
           this.success = false

           this.show = true
           //
           axios.post('https://us-central1-homesforexpats.cloudfunctions.net/login',this.staff).then( res => {


              if(res.data.title === 'user found'){

                 localStorage.setItem("user_fullnames", res.data.user.fullnames)
                 localStorage.setItem("user_mobile", res.data.user.mobile)
                 localStorage.setItem("user_email", res.data.user.email)
                 localStorage.setItem("user_agentcode", res.data.user.agentcode)
                 localStorage.setItem("user_profilepic", res.data.user.profile_pic)
                 localStorage.setItem("user_stafftype", res.data.user.staff_type)


                 this.success = true
                 this.show= false

               }

               if(res.data.title === "user not found"){

                  this.show = false

                  this.login_error = res.data.title
               }

           })
        }
    },
    watch:{
       success(val){
          if(val === true){
             this.$router.push({name:'agents-portal'})
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
      background: url("../assets/loginagent.jpeg")
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
      background: url("../assets/loginagent.jpeg")
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