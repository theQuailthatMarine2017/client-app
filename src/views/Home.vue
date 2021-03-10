<template>
<div>
  <div v-if="!isMobile()" class="home">
   
  <b-row no-gutters>
    <b-col cols="7" style="height:100vh;background-color:#0386ac;">
      <b-container style="background-color:#0386ac;height:260px;">
         <img id="main-logo" class="d-inline-block align-top mr-1" style="padding:28px;width:829px;height:710px;" src="https://i.postimg.cc/jqL9rmk1/New-Project-37.jpg" alt="Shards Dashboard">
      </b-container>
    </b-col>
    <b-col cols="5" >
      <b-card v-if="showInstallBanner" title="Pet Connect Is A PWA!" style="margin-left:8px;margin-right:8px;background-color:#0386ac;color:white;">
      <b-card-text style="font-weight:bold;">
      A Progressive Web App (PWA) is a website that looks and behaves as if it is a mobile app. PWAs are built to take advantage of native mobile device features, without requiring the end user to visit an app store.
    </b-card-text>
      <b-button @click="installPWA" style="background-color:#4BB543;border-color:white;font-weight:bold;" block>
        <b-icon icon="file-arrow-down-fill"></b-icon>
        Click Here To Install PWA App On Desktop</b-button>
        <b-card-text style="font-weight:bold;margin-top:5px;">
      Only Installable On Google Chrome, Microsoft Edge & Samsung Internet Browsers.<span style="font-weight:bolder;font-size:20px;"> Ignore If Already Installed.</span>
    </b-card-text>
        </b-card>

        <b-card v-if="pwaInstalled"  style="margin-left:8px;margin-right:8px;background-color:#0386ac;color:white;">
          <img id="main-logo" class="d-inline-block align-top mr-1" style="width:90px;height:90px;" src="https://i.postimg.cc/SKcf3PHH/pngwing.png" alt="Shards Dashboard">
          <b-card-text style="font-weight:bold;margin-top:7px;">
      Pet Connect PWA Is Installed On Your Device!
    </b-card-text>
        </b-card>


      <b-container style="margin:3px;">
      <b-tabs style="margin-top:5px;padding:20px;color:white;border-radius:15px;" pills fill align="center">
      <b-tab title-item-class="tab" title="Register" active>
        <b-card class="text-center" style="margin-top:15px;color:black;border-color:#0386ac;border-width:thick;">
          <b-tabs pills fill align="center">
            <b-tab title="Regular Account" title-item-class="tab">
              <div style="margin-top:28px;">
              <p style="font-weight:bold;color:#0386ac;"> Our Regular Account is for Everday Pet / Animal Owners Looking For Animal Services.</p>
      <b-form v-if="show">

        <b-input-group class="mb-2" >
      <b-input-group-prepend is-text>
        <b-icon variant="info" icon="person-fill"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="text" v-model="user.fullnames" placeholder="Enter Full Names"></b-form-input>
    </b-input-group>

      <b-input-group class="mb-2" >
      <b-input-group-prepend is-text>
        <b-icon animation="fade" variant="info" icon="envelope-fill"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="text" v-model="user.email" placeholder="Enter Email"></b-form-input>
    </b-input-group>


    <b-input-group class="mb-2" >
           <vue-tel-input style="width:650px;" defaultCountry="KE" :mode="mode" :onlyCountries="['KE']" v-model="user.mobile"></vue-tel-input>
    </b-input-group>

      <b-button @click="completeRegistration" style="background-color:#0386ac;font-weight:bold;">Continue</b-button>
      
    </b-form>
      
    </div>

            </b-tab>
            <b-tab title="Business Account">
              <b-card style="margin-top:15px;background-color:#0386ac;color:white;border:0;">
               <b-card-text style="margin-top10px;">
              <h4>Do You Provide Animal Services?</h4>
              <p style="font-weight:bold;">Our Businesss Account is Only For Animal Service Proffesionals Like Vets, Pet Shops, Animal Breeder & Groomers etc.<br><br>If You Offer Animal Services Please Click The Link Below and Fill Out Our Business Partner Registration Form.</p>
               </b-card-text>
               </b-card>
            </b-tab>
          </b-tabs>
    
  </b-card>
        
       </b-tab>
      <b-tab class="mytabs" title="Login">
        <b-card style="margin-top:15px;color:black;border-color:#0386ac;border-width:thick;">
            <img id="main-logo" class="d-inline-block align-top mr-1" style="width:70px;height:70px;" src="https://i.postimg.cc/Fzj02ycZ/Daco-5096687-1.png" alt="Shards Dashboard">
          <p style="font-weight:bold;color:#0386ac;">Welcome Back!</p>
        <b-card-text>
           <b-form  v-if="show">

      <b-input-group class="mb-2" >
      <vue-tel-input style="width:650px;" defaultCountry="KE" :mode="mode" :onlyCountries="['KE']" v-model="user.mobile"></vue-tel-input>
    </b-input-group>

    <b-input-group class="mb-2" >
      <b-input-group-prepend is-text>
        <b-icon variant="info" icon="key-fill"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="text" placeholder="Enter Password"></b-form-input>
    </b-input-group>

      <b-form-group style="color:#0386ac;font-weight:bold;"  id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="that">Stay Signed In</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button style="background-color:#0386ac;font-weight:bold;">Continue</b-button>
      
    </b-form>
        </b-card-text>
        </b-card>
        </b-tab>
      </b-tabs>
    
      </b-container>
      
    </b-col>
  </b-row>

  </div>

  <div v-if="isMobile()" class="home">
    <b-card v-if="showInstallBanner" title="Pet Connect Is A PWA!" style="background-color:#0386ac;color:white;">
      <b-card-text style="font-weight:bold;">
      A Progressive Web App (PWA) is a website that looks and behaves as if it is a mobile app. PWAs are built to take advantage of native mobile device features, without requiring the end user to visit an app store.
    </b-card-text>
      <b-button style="background-color:#4BB543;border-color:white;font-weight:bold;" block>
        <b-icon icon="file-arrow-down-fill"></b-icon>
        Click Here To Install</b-button>
        <b-card-text style="font-weight:bold;margin-top:5px;">
      Only Installable On Google Chrome, Microsoft Edge & Samsung Internet Browsers.<span style="font-weight:bolder;"> Ignore If Already Installed.</span>
    </b-card-text></b-card>

    <b-card v-if="pwaInstalled"  style="margin-left:8px;margin-right:8px;background-color:#0386ac;color:white;">
          <img id="main-logo" class="d-inline-block align-top mr-1" style="width:90px;height:90px;" src="https://i.postimg.cc/SKcf3PHH/pngwing.png" alt="Shards Dashboard">
          <b-card-text style="font-weight:bold;margin-top:7px;">
      Pet Connect PWA Is Installed!
    </b-card-text>
        </b-card>


    <b-container >
      
      <b-tabs style="padding:5px;color:white;border-radius:15px;" pills fill align="center">
      <b-tab title-item-class="tab" title="Register" active>
        <b-card class="text-center" style=";margin-top:15px;color:black;border-color:#0386ac;border-width:thick;">
          <b-tabs pills fill align="center">
            <b-tab title="Regular Account" title-item-class="tab">
              <div style="margin-top:28px;">
              <p style="font-weight:bold;color:#0386ac;"> Our Regular Account is for Everday Pet / Animal Owners Looking For Animal Services.</p>
      <b-form  v-if="show">

        <b-input-group class="mb-2" >
      <b-input-group-prepend is-text>
        <b-icon variant="info" icon="person-fill"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="text" v-model="user.fullnames" placeholder="Enter Full Names"></b-form-input>
    </b-input-group>

      <b-input-group class="mb-2" >
      <b-input-group-prepend is-text>
        <b-icon variant="info" icon="envelope-fill"></b-icon>
      </b-input-group-prepend>
      <b-form-input v-model="user.email" type="text" placeholder="Enter Email"></b-form-input>
    </b-input-group>


    <b-input-group class="mb-2" >
      <vue-tel-input defaultCountry="KE" :mode="mode" :onlyCountries="['KE']" v-model="user.mobile"></vue-tel-input>
    </b-input-group>


      <a href="" style="color:#0386ac;font-weight:bold;"><p>Click Here To View Terms & Conditions</p></a>
      <b-form-group style="color:#0386ac;font-weight:bold;"  id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="user.terms">Agree Terms & Conditions</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" style="background-color:#0386ac;font-weight:bold;">Continue</b-button>
      
    </b-form>
      
    </div>

            </b-tab>
            <b-tab title="Business Account">
              <b-card style="margin-top:15px;background-color:#0386ac;color:white;border:0;">
               <b-card-text style="margin-top10px;">
              <h4>Do You Provide Animal Services?</h4>
              <p style="font-weight:bold;">Our Businesss Account is Only For Animal Service Proffesionals Like Vets, Pet Shops, Animal Breeder & Groomers etc.<br><br>If You Offer Animal Services Please Click The Link Below and Fill Out Our Business Partner Registration Form.</p>
               </b-card-text>
               </b-card>
            </b-tab>
          </b-tabs>
    
  </b-card>
        
       </b-tab>
      <b-tab class="mytabs" title="Login">
        <b-card style="margin-top:15px;color:black;border-color:#0386ac;border-width:thick;">
            <img id="main-logo" class="d-inline-block align-top mr-1" style="width:70px;height:70px;" src="https://i.postimg.cc/Fzj02ycZ/Daco-5096687-1.png" alt="Shards Dashboard">
          <p style="font-weight:bold;color:#0386ac;">Welcome Back!</p>
        <b-card-text>
           <b-form v-if="show">

      <b-input-group class="mb-2" >
      <b-input-group-prepend is-text>
        <b-icon variant="info" icon="phone-fill"></b-icon>
      </b-input-group-prepend>
        <vue-tel-input style="width:650px;" defaultCountry="KE" :mode="mode" :onlyCountries="['KE']" v-model="user.mobile"></vue-tel-input>
    </b-input-group>

    <b-input-group class="mb-2" >
      <b-input-group-prepend is-text>
        <b-icon variant="info" icon="key-fill"></b-icon>
      </b-input-group-prepend>
      <b-form-input v-model="login.password" type="text" placeholder="Enter Password"></b-form-input>
    </b-input-group>

      <b-form-group style="color:#0386ac;font-weight:bold;"  id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="that">Stay Signed In</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button @click="completeRegistration" style="background-color:#0386ac;font-weight:bold;">Continue</b-button>
      
    </b-form>
        </b-card-text>
        </b-card>
        </b-tab>
      </b-tabs>
    
      </b-container>

  </div>

</div>
</template>

<script>

let installEvent;
import { uuid } from 'vue-uuid';

export default {
  name: 'Home',
  data() {
      return {
        showInstallBanner: true,
        pwaInstalled:false,
        mode:'international',
        login:{
          mobile:'',
          password:''
        },
        user:{
          _id:uuid.v1(),
          mobile:'',
          password:'',
          email:'',
          fullnames:'',
          terms:false,
          animals:null,
          city:'',
          country:'Kenya',
          location:''
        },
        form: {
          email: '',
          name: '',
          mobile:'',
          food: null,
          checked: []
        },
        show: true
      }
    },
    created(){
      console.log(process.env.VUE_APP_API_KEY + process.env.VUE_APP_ID)
        if("serviceWorker" in navigator) {
        navigator.serviceWorker.register("service-worker.js").then(reg => {
            console.log("Registration succesful, scope: " + reg.scope);
            
            this.checkPWAInstalled()
        })
        .catch(err => {
            console.log(err);
        })
      }

      window.addEventListener("beforeinstallprompt", function(e) {

      // log the platforms provided as options in an install prompt
          e.preventDefault();

          installEvent = e;
          // this.getUserResponsePWA()

          console.log(installEvent)
        
        });
    },
    methods: {
      
      completeRegistration(){

        if(this.user.fullnames === '' || this.user.email === '' || this.user.mobile === ''){

          this.$bvToast.toast('KINDLY COMPLETE FORM', {
          title: 'MISSING FIELDS',
          variant: 'danger',
          solid: true
        })

        }else {

          localStorage.setItem('user',JSON.stringify(this.user))
          this.$router.push({ name: 'complete-registration', query: { user: this.user._id }})
        }
      },
      checkPWAInstalled(){

        if (window.matchMedia('(display-mode: standalone)').matches) {  
            // do things here
            console.log('PWA Installed');
            this.showInstallBanner = false;
            this.pwaInstalled = true;
            
        }  else {

          console.log('Not Installed');
          this.showInstallBanner = true;
          this.pwaInstalled = false;
        }
      },
      installPWA(){

        installEvent.prompt();
        installEvent.userChoice.then((result) => {

          console.log(result)

          if(result.outcome === 'accepted'){

            
            this.showInstallBanner = false;
            this.pwaInstalled = true;
          }

          if(result.outcome === 'dismissed'){

            installEvent = null;


          }
          

        });


      },
      loginUser(){

      },
      isMobile(){
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
              return true
            } else {
              return false
            }
          },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
}
</script>

<style scoped>
#nav {
  padding: 30px;
}

.tabs.mytabs .nav-tabs .nav-link.active {
  background-color:red !important;
}
.tab {
    color:red; 
}
#b-nav {
  background-color:red;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
