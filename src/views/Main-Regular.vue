<template>
<div>
<div v-if="!isMobile()"  style="background-color:#0386ac;color:white;">
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
            <b-button @click="holidayLogin()" style="margin-right:5px;background-color:orange;font-weight:bold;border:1;border-width:3px;border-color:white;">Holiday Deals</b-button>
            <!-- <b-button @click="agentsLogin()" style="margin-left:5px;background-color:orange;font-weight:bold;border:1;border-width:3px;border-color:white;">Agent's Portal</b-button> -->
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
<b-overlay :show="show" rounded="sm">
   <b-carousel
      id="carousel-1"
      :interval="4000"
      no-hover-pause
      controls
      fade
      background="#ababab"
      img-width="1024"
      img-height="1050"
      style="text-shadow: 1px 1px 2px #333;"
      
    >
      <!-- Text slides with image -->
      <b-carousel-slide
     v-for="home in homes" v-bind:key="home._id" 
        style="height:90;"
        :img-src='home.banner_img'
      >
      <div style="background: rgba(0, 0, 0, 0.5);padding:15px;border-radius:8px;">
      <h2 style="opacity: 1;">{{ home.location}}</h2>
      <h4>{{ home.banner_description}}</h4>
      <h2>KES{{ home.details.price}} Per Month</h2>
      <b-button @click="viewProperty(home)" style="background-color:orange;font-weight:bold;border:1;border-width:3px;border-color:white;">View Property</b-button>
      </div>
      
      </b-carousel-slide>

     
    </b-carousel>

  <!-- <b-jumbotron style="background-image:url('https://i.pinimg.com/originals/50/5e/56/505e569ec03b8b1936469c7af7122de4.jpg');background-size: cover;background-repeat: no-repeat;color:white;border-radius:0;height:330px;text-align:left;">
      <h1>Welcome To Houses For Expats!</h1>  
      <h5>If Your Are Planning On Moving To Nairobi, Our Properties Will Meet All Your Needs! </h5>
  </b-jumbotron> -->

  <b-container style="text-align:left;margin-top:10px;padding-bottom:15px;" fluid>
      <b-row no-gutters>
          <b-col cols="5">
              <div class="ad">

              </div>
              
              
          </b-col>

          
          <b-col cols="7" >
              <h4 style="font-weight:bold;">Our Properties</h4>
              <b-list-group style="height:524px;overflow:auto;">
                <b-list-group-item v-for="property in homes" v-bind:key="property.location" >
                    <b-card style="border:0;color:white;;background-color:#0386ac;">
                        <b-row no-gutters>
                            <b-col>
                                <img id="main-logo" class="d-inline-block align-top mr-1" style="background-color:red;width:380px;height:220px;" :src='property.banner_img' alt="Shards Dashboard">
                            </b-col>
                            <b-col style="margin-left:9px;">
                            <h6 style="font-weight:bolder;text-decoration:underline;">{{property.location}}</h6>
                            <h6 style="font-weight:bolder;">{{ property.banner_description}}</h6>
                            <h6 style="font-weight:bolder;">Monthly Rent KSH{{ property.details.price}}</h6>     
                            <h6 style="color:#66ff00;font-weight:bolder;"><b-icon  style="margin-right:5px;;color:#66ff00;" font-scale="1" icon="clock-fill"></b-icon>Available</h6> 
                            <b-button @click="viewProperty(property)" block style="background-color:orange;font-weight:bold;border:1;border-width:3px;border-color:white;">View Property</b-button>      
                            </b-col>
                        </b-row>
                       
                    </b-card>
                </b-list-group-item>
                
          
            </b-list-group>
          </b-col>

      </b-row>
  </b-container>

</b-overlay>
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
            <b-button @click="holidayLogin()" style="background-color:orange;margin-bottom:5px;font-weight:bold;border:1;border-width:3px;border-color:white;">Holiday Deals</b-button>
            <!-- <b-button @click="agentsLogin()" style="background-color:orange;font-weight:bold;border:1;border-width:3px;border-color:white;">Agent's Portal</b-button> -->
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

  <div class="ad">


              </div>

    
<b-overlay :show="show" rounded="sm">
         <h4 style="font-weight:bold;margin-top:15px;;">Listed Properties</h4>
              <b-list-group style="height:524px;overflow:auto;">
                <b-list-group-item v-for="property in homes" v-bind:key="property.location" >
                    <b-card style="border:0;color:white;;background-color:#0386ac;">
                        <b-row >
                            <b-col>
                                <img v-if="!smallMobile()" id="main-logo" class="d-inline-block align-top mr-1" style="background-color:red;width:290px;height:150px;" :src='property.banner_img' alt="Shards Dashboard">
                                <img v-if="smallMobile()" id="main-logo" class="d-inline-block align-top mr-1" style="background-color:red;width:240px;height:150px;" :src='property.banner_img' alt="Shards Dashboard">
                            </b-col>
                            <b-col style="margin-top:10px;">
                            <h4 style="font-weight:bolder;text-decoration:underline;">{{property.location}}</h4>
                            <h5 style="font-weight:bolder;">{{ property.banner_description}}</h5>
                            <h5 style="font-weight:bolder;">Monthly Rent KSH{{ property.details.price}}</h5>     
                            <h5 style="color:#66ff00;font-weight:bolder;"><b-icon  style="margin-right:5px;;color:#66ff00;" font-scale="1" icon="clock-fill"></b-icon>Available</h5> 
                            <b-button @click="viewProperty(property)" block style="background-color:orange;font-weight:bold;border:1;border-width:3px;border-color:white;">View Property</b-button>      
                            </b-col>
                        </b-row>
                       
                    </b-card>
                </b-list-group-item>
                
          
            </b-list-group>

</b-overlay>


            <b-popover ref="popover" show target="popover-button-event" title="Holiday Portal">
      Click Here For <strong>Access!</strong>
    </b-popover>

    

</div>

</div>
</template>

<script>
import { uuid } from 'vue-uuid';
import axios from 'axios';
import { ref } from "vue"

export default {
    data(){
        return{
            homes:[],
            show:false,
            showToolTip:false,
            user:{
                fullnames:'Rony Quail',
                mobile:'+254705009784',
                email:'rony@thecodingguy.co.ke',
                location:'Ruaka',
                city:'Nairobi',
                country:'Kenya'
            },
            properties:[{
                _id:uuid.v1(),
                location:'Runda, Mimosa Ridge, Hse Number 304',
                agent:'Jessica Mawingo',
                agent_img:'https://www.blackenterprise.com/wp-content/blogs.dir/1/files/2016/08/WOMEN-OF-POWER_AYO-HAYNES-335x450.jpg',
                banner_description:'6 Bedroom Mansion All Ensuite, Fifteen Minutes From United Nations, Village Market and US Embassy.',
                banner_img:'https://i.postimg.cc/VNqRjf1K/New-Project-45.jpg',
                main_description:'6 Bedroom Mansion All Ensuite, Fifteen Minutes From United Nations, Village Market and US Embassy. Rent Is All Inclusive. Security Available From 6AM to 6AM.',
                cost:'200,000',
                imgs:['https://i.postimg.cc/VNqRjf1K/New-Project-45.jpg',
                    'https://i.postimg.cc/zG7SYBBs/New-Project-47.jpg',
                    'https://i.postimg.cc/VNqRjf1K/New-Project-45.jpg',
                    'https://i.postimg.cc/VNqRjf1K/New-Project-45.jpg',
                    'https://i.postimg.cc/VNqRjf1K/New-Project-45.jpg'],
                details:{
                    bedrooms:6,
                    bathrooms:6,
                    minimum_lease:6,
                    house_type:'mansion',
                    floors:3,
                    price:200000,
                    internet:'available',
                    swimming_pool:'not available',
                    enterainment_area:'available',
                    private_parking:'available',
                    dstv:'available',
                    furnished:'available',
                    generator:'available',
                    dsq:'available'
                }
            },
            {
                _id:uuid.v1(),
                location:'Nyari, Nandi Flame Road, Gilian House',
                agent:'Rony Quail',
                agent_img:'https://i.postimg.cc/CKh0hPnM/profilepic.jpg',
                banner_description:'4 Bedroom Townhouse All Ensuite, Twenty Minutes From United Nations, Village Market, US Embassy and Twenty Minutes From Westlands Waiyaki Way.',
                banner_img:'https://i.postimg.cc/zG7SYBBs/New-Project-47.jpg',
                main_description:'4 Bedroom Mansion All Ensuite with Swimming Pool and Lavish Entertainment Area, Twenty Minutes From United Nations, Village Market and US Embassy. Rent Is All Inclusive. Security Available From 6AM to 6AM. ',
                cost:'350,000',
                imgs:[
                    'https://i.postimg.cc/zG7SYBBs/New-Project-47.jpg',
                    'https://i.postimg.cc/VNqRjf1K/New-Project-45.jpg',
                    'https://i.postimg.cc/zG7SYBBs/New-Project-47.jpg',
                    'https://i.postimg.cc/zG7SYBBs/New-Project-47.jpg',
                    'https://i.postimg.cc/zG7SYBBs/New-Project-47.jpg'],
                details:{
                    bedrooms:4,
                    bathrooms:3,
                    minimum_lease:12,
                    house_type:'townhouse',
                    floors:2,
                    price:350000,
                    internet:'available',
                    swimming_pool:'available',
                    enterainment_area:'available',
                    private_parking:'available',
                    furnished:'available',
                    generator:'available',
                    dsq:'available'
                }
            },
            {
                _id:uuid.v1(),
                location:'Two Rivers Mall, RiverView Apartments',
                agent:'Rony Quail',
                agent_img:'https://i.postimg.cc/CKh0hPnM/profilepic.jpg',
                banner_description:'2 Bedroom Luxurious Apartment 1 Master Bedroom En Suite Located Within Two Rivers Mall. Twenty Minutes From United Nations, Village Market, US and Various Embassies.',
                banner_img:'https://i.postimg.cc/yxzC4npY/New-Project-49.jpg',
                main_description:'2 Bedroom Luxurious Apartment 1 Master Bedroom En Suite Located Within Two Rivers Mall. Twenty Minutes From United Nations, Village Market, US and Various Embassies.',
                cost:'110,000',
                imgs:[
                    'https://i.postimg.cc/zG7SYBBs/New-Project-47.jpg',
                    'https://i.postimg.cc/zG7SYBBs/New-Project-47.jpg',
                    'https://i.postimg.cc/zG7SYBBs/New-Project-47.jpg',
                    'https://i.postimg.cc/zG7SYBBs/New-Project-47.jpg',
                    'https://i.postimg.cc/zG7SYBBs/New-Project-47.jpg'],
                details:{
                    bedrooms:2,
                    minimum_lease:3,
                    bathrooms:2,
                    house_type:'apartment',
                    floors:1,
                    price:110000,
                    internet:'available',
                    swimming_pool:'available',
                    enterainment_area:'not available',
                    private_parking:'available',
                    furnished:'available',
                    generator:'available',
                    dsq:'not available'
                }
            }]
        }
    },
    mounted(){

        this.smallMobile()
        this.fetchHomes()

        this.$refs.popover.$emit('open')

        setTimeout(()=>{
            this.$refs.popover.$emit('close')
        },7000);

        localStorage.clear()
    },
    methods:{
        showNotifications(){

            this.$bvModal.show('modal-1')
        },
        isMobile(){
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
              return true
            } else {
              return false
            }
          },
        agentsLogin(){

            this.$router.push({name:'agents-portal-login'})
        },
        smallMobile(){

            let windowWidth = window.innerWidth

            if(windowWidth < 358){

                return true
            }else{

                return false
            }

        },
        fetchHomes(){
            this.homes = []
            this.show = true

            axios.get('https://us-central1-homesforexpats.cloudfunctions.net/getHomes').then( res => {

                console.log(res)
                if(res.data != null){

                    res.data.forEach(element => {
                            console.log(element)

                            this.homes.push(element)
                        });

                        this.show = false;

                        console.log(this.homes);
                        

                }
                            
                            
            });
            

        },
        holidayLogin(){
            this.$router.push({name:'login-holiday'})
        },
        viewProperty(property){

            localStorage.setItem('property', JSON.stringify(property));
            this.$router.push({ name: 'view-property', query: { property: property._id }});

        },
        userprofile(){

            this.$bvModal.show('modal-2')

        },
        hideProfile(){
            this.$bvModal.hide('modal-2')
        }
    },
    computed:{
        sortedNotifications(){


        }
    }
    
}
</script>

<style scoped>


.ad{
    background-image: url('../assets/ad.jpg');
    height:380px;
    
    background-size: cover;
    background-repeat: no-repeat;
}
</style>