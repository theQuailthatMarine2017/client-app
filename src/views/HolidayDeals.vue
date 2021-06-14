<template>
<div>
    <div v-if="!isMobile()" style="background-color:#3a9fbf;color:white;">
        <b-navbar toggleable="lg" style="background-color:#0386ac;border-bottom:1;border-color:white;" >
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
                    <template>
                        <b-button v-b-toggle.sidebar-backdrop @click="loggOff()" style="margin-right:5px;background-color:orange;font-weight:bold;border:1;border-width:3px;border-color:white;">Sign Out</b-button>
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
            <b-container style="text-align:left;margin-top:10px;padding-bottom:15px;" fluid>
      <b-row no-gutters>
          <b-col cols="5">
              <div class="ad">

              </div>
              
              
          </b-col>

          
          <b-col cols="7" >
              <h2 style="font-weight:bold;">Holiday Deals</h2>
              <b-list-group style="height:524px;overflow:auto;">
                <b-list-group-item v-for="holiday in holidays" v-bind:key="holiday.name" >
                    <b-card style="border:0;color:white;;background-color:#0386ac;">
                        <b-row no-gutters>
                            <b-col>
                                <img id="main-logo" class="d-inline-block align-top mr-1" style="background-color:red;width:380px;height:220px;" :src='holiday.photos[0]' alt="Shards Dashboard">
                            </b-col>
                            <b-col style="margin-left:9px;">
                            <h5 style="font-weight:bolder;text-decoration:underline;">{{holiday.name}}</h5>
                            <h6 style="font-weight:bolder;">{{ holiday.description}}</h6>
                            <h6 style="font-weight:bolder;">Holiday Cost: KSH {{ holiday.cost }}<br>Discount Applied: {{ holiday.discount }}%</h6>
                                 
                            <h6 style="color:#66ff00;font-weight:bolder;"><b-icon  style="margin-right:5px;;color:#66ff00;" font-scale="1" icon="clock-fill"></b-icon>Available</h6> 
                            <b-button @click="bookHoliday()" block style="background-color:orange;font-weight:bold;border:1;border-width:3px;border-color:white;">Book Holiday</b-button>      
                            </b-col>
                        </b-row>
                       
                    </b-card>
                </b-list-group-item>
                
          
            </b-list-group>
          </b-col>

      </b-row>
  </b-container>
            </b-overlay>


  <b-modal ref="modal-1" title="Book Holiday With HomesForExpats">
    <p class="my-4" style="text-align:center;">Email Our Booking Agent on <br><span style="font-weight:bolder;">holidaybookings@homesforexpats.com<br></span> To Book and Confirm Your Holiday!</p>
  </b-modal>


    </div>

    <div v-if="isMobile()" style="background-color:#3a9fbf;color:white;">

        <b-navbar toggleable="lg" style="background-color:#0386ac;border-bottom:1;border-color:white;" >
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
                    <template>
                        <b-button @click="loggOff()" v-b-toggle.sidebar-backdrop style="margin-right:5px;background-color:orange;font-weight:bold;border:1;border-width:3px;border-color:white;">Sign Out</b-button>
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
            <b-container style="text-align:left;margin-top:10px;padding-bottom:15px;" fluid>

                <h2 style="font-weight:bold;">Holiday Deals</h2>
              <b-list-group style="height:524px;overflow:auto;">
                <b-list-group-item v-for="holiday in holidays" v-bind:key="holiday.name" >
                    <b-card style="border:0;color:white;;background-color:#0386ac;">
                        <b-row no-gutters>
                            <b-col>
                                <img v-if="!smallMobile()" id="main-logo"  style="background-color:red;width:275px;height:220px;" :src='holiday.photos[0]' alt="Shards Dashboard">
                                <img v-if="smallMobile()" id="main-logo"  style="background-color:red;width:220px;height:160px;" :src='holiday.photos[0]' alt="Shards Dashboard">
                            </b-col>
                            <b-col style="margin-left:9px;">
                            <h5 style="font-weight:bolder;text-decoration:underline;">{{holiday.name}}</h5>
                            <h6 style="font-weight:bolder;">{{ holiday.description}}</h6>
                            <h6 style="font-weight:bolder;">Holiday Cost: KSH {{ holiday.cost }}<br>Discount Applied: {{ holiday.discount }}%</h6>
                                 
                            <b-button @click="showModal = true" block style="background-color:orange;font-weight:bold;border:1;border-width:3px;border-color:white;">Book Holiday</b-button>      
                            </b-col>
                        </b-row>
                       
                    </b-card>
                </b-list-group-item>
                
          
            </b-list-group>


            </b-container>
</b-overlay>

            <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content">
     
      <div class="modal__content">
          <span class="modal__title">Booking Information</span>
    <p class="my-4" >Email Our Booking Agent on <br><span style="font-weight:bolder;">holidaybookings@homesforexpats.com<br></span> With Your Names & Client Code Assigned To You To Book and Confirm Your Holiday!</p>
      </div>
    </vue-final-modal>



    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            holidays:[],
            showModal:false,
            show:false,
            user:{
                fullnames:''
            }
        }
    },
    mounted(){

        this.checkUser()
      
    },
    methods:{
        isMobile(){
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
              return true
            } else {
              return false
            }
          },
        goSideBar(route){

            this.$router.push({name:route})

        },
        smallMobile(){

            let windowWidth = window.innerWidth

            if(windowWidth < 358){

                return true
            }else{

                return false
            }

        },
        loggOff(){

            localStorage.clear()
            this.checkUser()
        },
        checkUser(){

            if(localStorage.getItem('client_code') != null){

                // var user = JSON.parse(localStorage.getItem('user'))
                this.user.fullnames = localStorage.getItem('client_fullnames')
                
                this.$bvToast.toast('Welcome Back ' + this.user.fullnames + '!', {
                    title: "Welcome!",
                    variant: 'success',
                    solid: true
                });

                this.getHolidays()

            }else{

                this.$router.push({path:'/'})
            }


        },
        getHolidays(){

            
          this.holidays = []
          this.show = true;
          axios.get('https://us-central1-homesforexpats.cloudfunctions.net/getHoliday').then( res => {


                if(res.data != null){

                    res.data.forEach(element => {
                            console.log(element)

                            this.holidays.push(element)
                        });

                        this.show = false

                        console.log(this.holidays);
                        

                }
                            
                            
            });
        },
        bookHoliday(){

            console.log(this.$refs['modal-1'])
            
            this.$refs['modal-1'].show()
            

        }
        
    }
}
</script>

<style scoped>
.ad{
    background-image: url('../assets/ad2.jpg');
    height:100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
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