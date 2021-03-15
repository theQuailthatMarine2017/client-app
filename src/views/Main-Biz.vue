<template>
<div style="background-color:#0386ac;color:white;height:85vh;">
<b-navbar toggleable="lg" style="background-color:#0386ac;" >
    <b-navbar-brand href="#" style="color:white;font-weight:bolder;">
        <img  style="width:190px;height:70px;" src="https://i.postimg.cc/Yqq67FGt/New-Project-25.png" alt="Shards Dashboard">
        <!-- <h5>HomesforExpats</h5> -->
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-form> -->
          <!-- <b-form-input size="md" style="min-width:300px;" class="mr-sm-2" placeholder="Search For Services/Business"></b-form-input>
          <b-button size="md" style="min-width:200px;" class="my-2 my-sm-0" type="submit">Search For Services/Business</b-button> -->
          
        <!-- </b-nav-form> -->
        <div style="margin-top:15px;margin-right:20px;">
        <h5><b-icon style="margin-right:5px;" icon="instagram"></b-icon>homesforexpats</h5>
        </div>
        <div style="margin-top:15px;margin-right:20px;">
        <h5><b-icon style="margin-right:5px;" icon="phone-fill"></b-icon>(254) 705-009-784</h5>
        </div>
        <template>
            <b-button style="margin-right:5px;background-color:orange;font-weight:bold;border:1;border-width:3px;border-color:white;">Holiday Deals</b-button>
            <b-button @click="agentsLogin()" style="margin-left:5px;background-color:orange;font-weight:bold;border:1;border-width:3px;border-color:white;">Agent's Portal</b-button>
          </template>
        <!-- <b-nav-item right>
           Using 'button-content' slot -->
          <!-- <template #button-content>
            <b-button variant="info">Holiday Deals</b-button>
          </template> -->
          <!-- <b-dropdown-item @click="showNotifications" >Notifications<b-badge style="margin-left:10px;" variant="primary" pill> {{ notifications.length }}</b-badge></b-dropdown-item>
          <b-dropdown-item @click="userprofile">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item> -->
        <!-- </b-nav-item> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <b-container style="text-align:left;margin-top:10px;padding-bottom:1px;" fluid>

      <b-row>
          <b-col cols="8" >
              <b-carousel
              ref="slider"
      id="carousel-1"
      indicators
      :interval="4000"
      no-hover-pause
      controls
      fade
      background="#ababab"
      img-width="1024"
      img-height="580"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
     v-for="property_img in property.imgs" v-key="property.location" 
       
        :img-src='property_img'
      >
      
      </b-carousel-slide>

     
    </b-carousel>

    <div id="map"></div>

          </b-col>

          <b-col cols="4">
            <div id="home" style="background: rgba(255,255,255, 0.2);padding:15px;border-radius:8px;">
                <h5 style="opacity: 1;text-decoration:underline;font-weight:bold;">{{ property.location}}</h5>
                <h6 style="font-weight:bold">{{ property.main_description}}<br><br>More Details Below;</h6>
                <ol>
                    <li style="font-weight:bold;">Bedrooms: {{property.details.bedrooms}}</li>
                    <li style="font-weight:bold;">Bathrooms: {{property.details.bathrooms}}</li>
                    <li style="font-weight:bold;">Internet: 
                         <b-icon v-if="property.details.internet === 'available'"  style="margin-right:2px;color:#66ff00;" font-scale="1" icon="check-circle-fill"></b-icon> 
                        <b-icon v-if="property.details.internet === 'not available'"  style="margin-right:2px;color:#ff3333;" font-scale="1" icon="check-circle-fill"></b-icon>
                        {{property.details.internet.toUpperCase()}}</li>
                    <li style="font-weight:bold;">Generator/Invertor: 
                        <b-icon v-if="property.details.generator === 'available'"  style="margin-right:2px;color:#66ff00;" font-scale="1" icon="check-circle-fill"></b-icon> 
                        <b-icon v-if="property.details.generator === 'not available'"  style="margin-right:2px;color:#ff3333;" font-scale="1" icon="check-circle-fill"></b-icon>
                    {{property.details.generator.toUpperCase()}}</li>
                    <li style="font-weight:bold;">Swimming Pool: 
                         <b-icon v-if="property.details.swimming_pool === 'available'"  style="margin-right:2px;color:#66ff00;" font-scale="1" icon="check-circle-fill"></b-icon> 
                        <b-icon v-if="property.details.swimming_pool === 'not available'"  style="margin-right:2px;color:#ff3333;" font-scale="1" icon="check-circle-fill"></b-icon>
                        {{property.details.swimming_pool.toUpperCase()}}</li>
                    <li style="font-weight:bold;">Entertainment Area: 
                         <b-icon v-if="property.details.enterainment_area === 'available'"  style="margin-right:2px;color:#66ff00;" font-scale="1" icon="check-circle-fill"></b-icon> 
                        <b-icon v-if="property.details.enterainment_area === 'not available'"  style="margin-right:2px;color:#ff3333;" font-scale="1" icon="check-circle-fill"></b-icon>
                        {{property.details.enterainment_area.toUpperCase()}}</li>
                    <li style="font-weight:bold;">Private Parking: 
                         <b-icon v-if="property.details.private_parking === 'available'"  style="margin-right:2px;color:#66ff00;" font-scale="1" icon="check-circle-fill"></b-icon> 
                        <b-icon v-if="property.details.private_parking === 'not available'"  style="margin-right:2px;color:#ff3333;" font-scale="1" icon="check-circle-fill"></b-icon>
                        {{property.details.private_parking.toUpperCase()}}</li>
                    <li style="font-weight:bold;">DSQ: 
                         <b-icon v-if="property.details.dsq === 'available'"  style="margin-right:2px;color:#66ff00;" font-scale="1" icon="check-circle-fill"></b-icon> 
                        <b-icon v-if="property.details.dsq === 'not available'"  style="margin-right:2px;color:#ff3333;" font-scale="1" icon="check-circle-fill"></b-icon>
                        {{property.details.dsq.toUpperCase()}}</li>
                </ol>
                <b-button @click="$bvModal.show('bv-modal-example')" block style="background-color:orange;font-weight:bold;border:1;border-width:3px;border-color:white;">Contact Agent</b-button>
            </div>

          </b-col>

      </b-row>

  </b-container>


<!-- Contant Agent Modal -->
<b-modal id="bv-modal-example" content-class="my-second-class" hide-footer>
    <template #modal-title>
      Contact Agent
    </template>
    <b-media tag="li">
      <template #aside>
        <b-img center fluid thumbnail style="border-color:#ff8c00;border-width:4px;" rounded="circle" :src="property.agent_img" width="145" height="145" alt="Center image"></b-img>
      </template>
      <h6 class="mt-0 mb-1"><span style="font-weight:bold;">{{ property.agent }}</span> is the Agent Assigned To This Property.</h6>
      <p>Please Enter Your Names, Email and Mobile Number Below So The Agent Can Get In Touch With You.</p>
    </b-media>
    <div class="d-block text-center">
        <div style="background-color:#ff8c00;border-width:20px;margin-top:15px;margin-bottom:15px;padding:8px;border-radius:8px;color:white;font-weight:bold;">
        <h6><b-icon  style="margin-right:2px;" font-scale="1" icon="info-circle-fill"></b-icon> Our Agents Take At Most 20 Minutes To Get In Touch!</h6>
        </div>

        <b-form-group
        id="input-group-1"
        label="Email Address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="lead.fullnames"
          type="email"
          placeholder="Enter Fullnames"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="Email Address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="lead.email"
          type="email"
          placeholder="Enter Email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Mobile Number:"
        label-for="input-1"
        description="We'll never share your mobile number with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="lead.mobile"
          type="email"
          placeholder="Enter Mobile Number"
          required
        ></b-form-input>
      </b-form-group>
    </div>
    <b-button class="mt-3" style="background-color:#ff8c00;border-width:2px;" block @click="$bvModal.hide('bv-modal-example')">Submit</b-button>
  </b-modal>

</div>
</template>

<script>
import GoogleMapsLoader from 'google-maps';

export default {
    data(){
        return{
            property:null,
            lead:{
                fullnames:'',
                email:'',
                mobile:''
            }
        }
    },
    created(){

        
        // console.log(this.$refs.slider)
        

        if(localStorage != null){

            this.property = JSON.parse(localStorage.getItem('property'))
            this.getPropertyLocation()

        

        } else {

            this.localStorage.clear()

            this.$router.go(-1)
        }
    },
    methods:{
        getPropertyLocation(){
            GoogleMapsLoader.load(function(google) {
                let map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: position
                })
            })
        },
        agentsLogin(){

            this.$router.push({name:'agents-portal-login'})
        }
    }
}
</script>

<style scoped>
.my-second-class{
    background-color:red;
}
</style>