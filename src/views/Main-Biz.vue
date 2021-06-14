<template>
<div>
<div v-if="!isMobile()" style="background-color:#0386ac;color:white;height:85vh;">
<b-navbar toggleable="lg" style="background-color:#0386ac;" >
    <b-navbar-brand href="#" style="color:white;font-weight:bolder;">
        <img  style="width:190px;height:70px;" src="https://i.postimg.cc/Yqq67FGt/New-Project-25.png" alt="Shards Dashboard">
        <!-- <h5>HomesforExpats</h5> -->
    </b-navbar-brand>

    <b-navbar-toggle style="background-color:white;" target="nav-collapse"></b-navbar-toggle>
    

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
     v-for="property_img in property.imgs" v-bind:key="property.location" 
        :img-src='property_img'>
      
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
                         <b-icon v-if="property.details.internet === 'availabe'"  style="margin-right:2px;color:#66ff00;" font-scale="1" icon="check-circle-fill"></b-icon> 
                        <b-icon v-if="property.details.internet === 'not available'"  style="margin-right:2px;color:#ff3333;" font-scale="1" icon="check-circle-fill"></b-icon>
                        {{property.details.internet}}</li>
                    <li style="font-weight:bold;">Generator/Invertor: 
                        <b-icon v-if="property.details.generator === 'availabe'"  style="margin-right:2px;color:#66ff00;" font-scale="1" icon="check-circle-fill"></b-icon> 
                        <b-icon v-if="property.details.generator === 'not available'"  style="margin-right:2px;color:#ff3333;" font-scale="1" icon="check-circle-fill"></b-icon>
                    {{property.details.generator}}</li>
                    <li style="font-weight:bold;">Swimming Pool: 
                         <b-icon v-if="property.details.swimming_pool === 'availabe'"  style="margin-right:2px;color:#66ff00;" font-scale="1" icon="check-circle-fill"></b-icon> 
                        <b-icon v-if="property.details.swimming_pool === 'not available'"  style="margin-right:2px;color:#ff3333;" font-scale="1" icon="check-circle-fill"></b-icon>
                        {{property.details.swimming_pool}}</li>
                    <li style="font-weight:bold;">Entertainment Area: 
                         <b-icon v-if="property.details.entertainment_area === 'availabe'"  style="margin-right:2px;color:#66ff00;" font-scale="1" icon="check-circle-fill"></b-icon> 
                        <b-icon v-if="property.details.entertainment_area === 'not available'"  style="margin-right:2px;color:#ff3333;" font-scale="1" icon="check-circle-fill"></b-icon>
                        {{property.details.entertainment_area}}</li>
                    <li style="font-weight:bold;">Private Parking: 
                         <b-icon v-if="property.details.private_parking === 'availabe'"  style="margin-right:2px;color:#66ff00;" font-scale="1" icon="check-circle-fill"></b-icon> 
                        <b-icon v-if="property.details.private_parking === 'not available'"  style="margin-right:2px;color:#ff3333;" font-scale="1" icon="check-circle-fill"></b-icon>
                        {{property.details.private_parking}}</li>
                    <li style="font-weight:bold;">DSQ: 
                         <b-icon v-if="property.details.dsq === 'availabe'"  style="margin-right:2px;color:#66ff00;" font-scale="1" icon="check-circle-fill"></b-icon> 
                        <b-icon v-if="property.details.dsq === 'not available'"  style="margin-right:2px;color:#ff3333;" font-scale="1" icon="check-circle-fill"></b-icon>
                        {{property.details.dsq}}</li>
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
      <h6>Below Are The Contact Details For The Agent Assigned To This Property.</h6>
      <h6 class="mt-0 mb-1"><span style="font-weight:bold;">{{ property.agent }}</span></h6>
      <p>Feel Free To Get In Touch For Any Enquiries.</p>
      <p style="font-weight:bold;">Please Use (+254) As Country Mobile Code.</p>
    </b-media>
 
  </b-modal>

   

</div>

      <div v-if="isMobile()"  style="background-color:#0386ac;color:white;">

        <b-navbar toggleable="lg" style="background-color:#0386ac;" >
         <b-navbar-brand href="#" style="color:white;font-weight:bolder;">
        <img  style="width:190px;height:70px;" src="https://i.postimg.cc/Yqq67FGt/New-Project-25.png" alt="Shards Dashboard">
        <!-- <h5>HomesforExpats</h5> -->
        </b-navbar-brand>

         <b-navbar-toggle id="popover-button-event" style="background-color:white;" target="nav-collapse"></b-navbar-toggle>
  
        <b-collapse id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
                <!-- <b-nav-form> -->
                  <!-- <b-form-input size="md" style="min-width:300px;" class="mr-sm-2" placeholder="Search For Services/Business"></b-form-input>
                  <b-button size="md" style="min-width:200px;" class="my-2 my-sm-0" type="submit">Search For Services/Business</b-button> -->
                  
                <!-- </b-nav-form> -->
                <div style="margin-top:2px;margin-right:20px;">
                <h5><b-icon style="margin-right:5px;" icon="instagram"></b-icon>homesforexpats</h5>
                </div>
                <div style="margin-top:2px;margin-right:20px;">
                <h5><b-icon style="margin-right:5px;" icon="phone-fill"></b-icon>(254) 705-009-784</h5>
                </div>
                <template>
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
          <b-col cols="12" >
              <b-carousel
              ref="slider"
      id="carousel-1"
      indicators
      :interval="4000"
      no-hover-pause
      controls
      fade
      background="#ababab"
      img-width="1524"
      img-height="880"
      style="text-shadow: 1px 1px 2px #333;margin-bottom:15px;"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
     v-for="property_img in property.imgs" v-bind:key="property.location" 
        :img-src='property_img'>
      
      </b-carousel-slide>

     
    </b-carousel>

          </b-col>

          <b-col cols="12">
            <div id="home" style="background: rgba(255,255,255, 0.2);padding:15px;border-radius:8px;">
                <h5 style="opacity: 1;text-decoration:underline;font-weight:bold;">{{ property.location}}</h5>
                <h6 style="font-weight:bold">{{ property.main_description}}<br><br>More Details Below;</h6>
                <ol>
                    <li style="font-weight:bold;">Minimum Lease: {{property.details.minimum_lease}} Months</li>
                    <li style="font-weight:bold;">Bedrooms: {{property.details.bedrooms}}</li>
                    <li style="font-weight:bold;">Bathrooms: {{property.details.bathrooms}}</li>
                    <li style="font-weight:bold;">Internet: 
                         <b-icon v-if="property.details.internet === 'availabe'"  style="margin-right:2px;color:#66ff00;" font-scale="1" icon="check-circle-fill"></b-icon> 
                        <b-icon v-if="property.details.internet === 'not available'"  style="margin-right:2px;color:#ff3333;" font-scale="1" icon="check-circle-fill"></b-icon>
                        {{property.details.internet}}</li>
                    <li style="font-weight:bold;">Generator/Invertor: 
                        <b-icon v-if="property.details.generator === 'availabe'"  style="margin-right:2px;color:#66ff00;" font-scale="1" icon="check-circle-fill"></b-icon> 
                        <b-icon v-if="property.details.generator === 'not available'"  style="margin-right:2px;color:#ff3333;" font-scale="1" icon="check-circle-fill"></b-icon>
                    {{property.details.generator}}</li>
                    <li style="font-weight:bold;">Swimming Pool: 
                         <b-icon v-if="property.details.swimming_pool === 'availabe'"  style="margin-right:2px;color:#66ff00;" font-scale="1" icon="check-circle-fill"></b-icon> 
                        <b-icon v-if="property.details.swimming_pool === 'not available'"  style="margin-right:2px;color:#ff3333;" font-scale="1" icon="check-circle-fill"></b-icon>
                        {{property.details.swimming_pool}}</li>
                    <li style="font-weight:bold;">Entertainment Area: 
                         <b-icon v-if="property.details.entertainment_area === 'availabe'"  style="margin-right:2px;color:#66ff00;" font-scale="1" icon="check-circle-fill"></b-icon> 
                        <b-icon v-if="property.details.entertainment_area === 'not available'"  style="margin-right:2px;color:#ff3333;" font-scale="1" icon="check-circle-fill"></b-icon>
                        {{property.details.entertainment_area}}</li>
                    <li style="font-weight:bold;">Private Parking: 
                         <b-icon v-if="property.details.private_parking === 'availabe'"  style="margin-right:2px;color:#66ff00;" font-scale="1" icon="check-circle-fill"></b-icon> 
                        <b-icon v-if="property.details.private_parking === 'not available'"  style="margin-right:2px;color:#ff3333;" font-scale="1" icon="check-circle-fill"></b-icon>
                        {{property.details.private_parking}}</li>
                    <li style="font-weight:bold;">DSQ: 
                         <b-icon v-if="property.details.dsq === 'availabe'"  style="margin-right:2px;color:#66ff00;" font-scale="1" icon="check-circle-fill"></b-icon> 
                        <b-icon v-if="property.details.dsq === 'not available'"  style="margin-right:2px;color:#ff3333;" font-scale="1" icon="check-circle-fill"></b-icon>
                        {{property.details.dsq}}</li>
                </ol>
                <b-button @click="showModal = true" block style="background-color:orange;font-weight:bold;border:1;border-width:3px;border-color:white;">Contact Agent</b-button>
            </div>

          </b-col>

      </b-row>

  </b-container>

  <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content">
     
      <div class="modal__content">
          <span class="modal__title">Agent Information</span>
 <b-media tag="li">
      <h6 class="my-4">Below Are The Contact Details For The Agent Assigned To This Property.</h6>
      <h6 class="mt-0 mb-1"><span style="font-weight:bold;">{{ property.agent }}</span></h6>
      <p class="my-4">Feel Free To Get In Touch For Any Enquiries.</p>
      <p style="font-weight:bold;">Please Use (+254) As Country Mobile Code.</p>
    </b-media>      </div>
    </vue-final-modal>

      </div>

</div>
</template>

<script>
import GoogleMapsLoader from 'google-maps';

export default {
    data(){
        return{
            property:null,
            showModal:false,
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

            this.property = JSON.parse(localStorage.getItem('property'));

        } else {

            this.localStorage.clear()

            this.$router.go(-1)
        }
    },
    methods:{
        isMobile(){
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
              return true
            } else {
              return false
            }
          },
          smallMobile(){

            let windowWidth = window.innerWidth

            if(windowWidth < 358){

                return true
            }else{

                return false
            }

        },
    }
}
</script>

<style scoped>
.my-second-class{
    background-color:red;
}

::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
  color:black;
}
.modal__title {

  font-size: 1.5rem;
  text-align: center;
  font-weight: 700;
}
.modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}
</style>