<template>
  <div class="about">
    <div v-if="!isMobile()" class="home">
   
  <b-row no-gutters>
    <b-col cols="7" style="height:100vh;background-color:#0386ac;">
      <b-container style="background-color:#0386ac;height:260px;">
         <img id="main-logo" class="d-inline-block align-top mr-1" style="padding:28px;width:829px;height:710px;" src="https://i.postimg.cc/jqL9rmk1/New-Project-37.jpg" alt="Shards Dashboard">
      </b-container>
    </b-col>
    <b-col cols="5" ref="complete" >
      
      <b-container style="margin:8px;">
      
    <b-card class="text-center" style="margin-top:15px;color:black;border-color:#0386ac;border-width:thick;">
          <div style="margin-top:28px;">
              <h3 style="font-weight:bold;color:#0386ac;"> We Just Need A Bit More Information From You To Complete Registration.</h3>
              <div style="margin-top:35px;">
      <b-form  v-if="show">

        <b-input-group class="mb-2" >
      <b-input-group-prepend is-text>
        <b-icon variant="info" icon="compass-fill"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="text" placeholder="Enter City Location i.e Nairobi, Mombasa, Nakuru"></b-form-input>
    </b-input-group>

      <b-input-group class="mb-2" >
      <b-input-group-prepend is-text>
        <b-icon variant="info" icon="compass-fill"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="text" placeholder="Enter Area Location i.e Ruaka, Lavington, Ngong, Karen"></b-form-input>
    </b-input-group>

    <b-input-group class="mb-2" >
      <b-input-group-prepend is-text>
        <b-icon variant="info"  icon="eye-fill"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="password" placeholder="Enter Secure Password"></b-form-input>
    </b-input-group>

<p style="text-align:left;color:#0386ac;font-weight:bold;">Select As Many Pets / Animals That You Own Below:</p>
    <b-input-group class="mb-0" >
      <b-input-group-prepend is-text>
        <b-icon variant="info" icon="phone-fill"></b-icon>
      </b-input-group-prepend>
      
      <b-form-select v-model="selected" @change="addPet"  :options="options"></b-form-select>
    </b-input-group>

    <b-form-group style="background-color:#0386ac;color:white;font-weight:bold;margin-top:9px;border-radius:12px;">
      
      Pets / Animals Selected: (Click <b-icon @click="removeAnimal(index)" icon="x-circle-fill"></b-icon> to Delete)
    <div style="margin:0;" v-if="animals.length > 0" v-for="(animal,index) in animals" >
    {{ animal }}
    <b-icon @click="removeAnimal(index)" icon="x-circle-fill"></b-icon>
    </div>
    </b-form-group>


      <a href="" style="color:#0386ac;font-weight:bold;"><p>Click Here To View Terms & Conditions</p></a>
      <b-form-group style="color:#0386ac;font-weight:bold;"  id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="user.terms"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="that">Agree Terms & Conditions</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" style="background-color:#0386ac;font-weight:bold;">Continue</b-button>
      
    </b-form>
              </div>
      
    </div>
    
  </b-card>
      </b-container>
      
    </b-col>
  </b-row>

  </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  created(){

    if(localStorage != null){

      this.user = JSON.stringify(localStorage.getItem('user'))

    }

  },
  mounted(){

    if(this.user === null){

      this.user = JSON.stringify(localStorage.getItem('user'))

    }
  },
  data(){
    return{
      options:['Dog(s)','Cat(s)','Farm Animal(s)','Bird(s)','Fish'],
      animals:[],
      selected:'',
      show: true,
      user:null,
      checked:[],
      position:null,
      center:null

    }
  },
  methods:{
    ...mapActions(["createUser"]),
    createAccount(){

      if(localStorage != null){

        if(this.user.terms === true){

          this.loader = this.$loading.show({
                    // Optional parameters
                    color: '#ff0000',
                    container: this.$refs.complete.$el,
                    canCancel:true,
                    width: 75,
                    height: 75,
                    opacity: 0.7,
                    
                  });

        }else{

          this.$bvToast.toast('KINDLY AGREE TO TERMS AND CONDITIONS', {
              title: 'PLEASE READ TERMS AND CONDITIONS FIRST',
              variant: 'danger',
              solid: true
            })
        }
      }
    },
    async getLocation() {
      
      return new Promise((resolve, reject) => {

        if(!("geolocation" in navigator)) {
          reject(new Error('Geolocation is not available.'));
        }

        navigator.geolocation.getCurrentPosition(pos => {
          resolve(pos);
        }, err => {
          reject(err);
        });

      });
    },
    addPet(){

      this.animals.push(this.selected)

      console.log(this.animals)

    },
    removeAnimal(index){

       this.$delete(this.animals,index)

    },
    onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
    isMobile(){
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
              return true
            } else {
              return false
            }
          },
  },
  computed:{
    ...mapGetters(["success"]),
  },
  watch:{
    ...mapGetters(["success"]),
    success(val){

      if(val === true){

        this.loader.hide()
        this.$router.push({path:'/regular-account'})
        
      }
    }

  }
}
</script>
