<template>
    <div class="login-page">
      <transition name="fade">
         <div class="wallpaper-login"></div>
      </transition>
      <div class="wallpaper-register"></div>

      <div class="container" style="margin-top:50px;">
         <div class="row">
            <div class="col-lg-7 col-md-8 col-sm-8 mx-auto">
               <div class="card login" style="background-color:rgba(3, 134, 172, 0.5);border-radius:15px;" ref="signin">
                  <h3 style="text-align:center;color:white;text-decoration:underline;">Agent's Portal</h3>
                  <h5 style="text-align:center;color:white;">This Portal Is <span style="font-weight:bolder;">STRICTLY</span> For Agent's Registered With HomesForExpats.</h5>
                  <h4 style="text-align:center;color:white;">Sign In</h4>
                  <form class="form-group" style="text-align:center;">
                     <input style="margin-bottom:15px;" v-model="agent.id" class="form-control" placeholder="National ID No." required>
                     <input  v-model="agent.password" type="password" class="form-control" placeholder="Password" required>
                     
                  </form>
                  <b-button @click="login_agent"  style="margin-bottom:19px;font-weight:bolder;text-align:center;font-size:15px;background-color:#00BFFF;color:white;" class="btn-white">Login</b-button>
                  <div v-if="login_error != null" style="background-color:red;text-align:center;color:white;">
                     <p style="margin:10px;">{{login_error}}<br>Contact Administrator If Issue Continues</p>
                  </div>
               </div>

            </div>
            
         </div>

      </div>

   </div>
</template>

<script>
export default {
    data(){
        return{
            login_error:null,
            agent:{
                id:'',
                password:''
            }
        }
    },
    methods:{
        login_agent(){

            this.$router.push({name:'agents-portal'})
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
      background: url(https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80)
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
      background: url(https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80)
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