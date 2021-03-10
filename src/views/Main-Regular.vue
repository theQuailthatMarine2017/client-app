<template>
<div style="background-color:#0386ac;;color:white;">
     <b-navbar toggleable="lg" style="background-color:#0386ac;" >
    <b-navbar-brand href="#" style="color:white;font-weight:bolder;">
        <img  style="width:250px;height:60px;" src="https://i.postimg.cc/RZFfSXHG/New-Project-24.png" alt="Shards Dashboard">
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
        <h5><b-icon style="margin-right:5px;" icon="instagram"></b-icon>petconnect-ke</h5>
        </div>
        <div style="margin-top:15px;margin-right:20px;">
        <h5><b-icon style="margin-right:5px;" icon="phone-fill"></b-icon>(254) 705-009-784</h5>
        </div>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <b-button variant="info">Your Account</b-button>
          </template>
          <b-dropdown-item @click="showNotifications" >Notifications<b-badge style="margin-left:10px;" variant="primary" pill> {{ notifications.length }}</b-badge></b-dropdown-item>
          <b-dropdown-item @click="userprofile">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

  <b-jumbotron style="background-color:#0386ac;color:white;border-radius:0;min-height:30px;text-align:left;">
      <h1>Welcome To Kenya's Trusted Animal Services Network!</h1>  
      <h5>Get Connected With Trusted Vets, Pet Shops, Animal Breeders, Trainers & Groomers Plus Trusted Animal Accomodation Services On Our Network.</h5>
  </b-jumbotron>

  <b-container style="text-align:left;" fluid>
      <b-row>
          <b-col cols="5">
              <h4 style="font-weight:bold;">Filter Business / Service</h4>
              <div>
                  <b-input-group >
                        <b-input-group-prepend is-text>
                            <b-icon variant="info" icon="compass-fill"></b-icon>
                        </b-input-group-prepend>
                        <b-form-input type="text" placeholder="Type Business/Servcie Name"></b-form-input>
                        </b-input-group>

                        <p style="font-weight:bolder;">Filter By Business/Service Name</p>
                    <b-input-group >
                        <b-input-group-prepend is-text>
                            <b-icon variant="info" icon="compass-fill"></b-icon>
                        </b-input-group-prepend>
                        <b-form-input type="text" placeholder="Type Location i.e Ruaka, Westlands"></b-form-input>
                        </b-input-group>

                        <p style="font-weight:bolder;">Filter By Location.<span>Your Current Location is RUAKA.</span></p>
                    <b-input-group prepend="1" append="100">
                        <b-form-input placeholder="jjsjs" type="range" step="10" min="0" max="100"></b-form-input>
                    </b-input-group>
                    <p style="font-weight:bolder;">Filter By Appointments & Orders Completed</p>
                    <b-button block href="#" style="background-color:green;font-weight:bolder;">Reset Filter</b-button> 
                </div>
          </b-col>

          
          <b-col cols="7" >
              <h4 style="font-weight:bold;">Business / Services Near You</h4>
              <b-list-group style="height:524px;overflow:auto;">
                <b-list-group-item>
                    <b-card style="border:0;color:black;">
                        <b-row no-gutters>
                            <b-col>
                                <img id="main-logo" class="d-inline-block align-top mr-1" style="width:180px;height:180px;" src="https://i.pinimg.com/originals/6c/bf/b2/6cbfb2918398cdf0eac9e5f307a2f541.jpg" alt="Shards Dashboard">
                            </b-col>
                            <b-col>
                            <h6 style="font-weight:bolder;text-decoration:underline;">Terry Vet Service</h6>
                            <h6 style="font-weight:bolder;">30 Appointments Completed</h6>
                            <h6 style="font-weight:bolder;">Last Appointment 2 Days Ago</h6>
                            <h6 style="font-weight:bolder;">Ruaka, Nairobi, Kenya</h6>      
                            <h6 style="color:green;font-weight:bolder;"><b-icon variant="success" style="margin:0;" font-scale="1" icon="clock-fill"></b-icon>Available</h6> 
                            <b-button block href="#" style="background-color:#0386ac;font-weight:bolder;">View Business/Service</b-button>      
                            </b-col>
                        </b-row>
                       
                    </b-card>
                </b-list-group-item>
                <b-list-group-item>
                    <b-card style="border:0;color:black;">
                        <b-row no-gutters>
                            <b-col>
                                <img id="main-logo" class="d-inline-block align-top mr-1" style="width:180px;height:180px;" src="https://images-platform.99static.com//AaGmNBepCg5qA4GavnqZ6oHtcxU=/13x0:1589x1576/fit-in/590x590/99designs-contests-attachments/98/98546/attachment_98546587" alt="Shards Dashboard">
                            </b-col>
                            <b-col>
                            <h6 style="font-weight:bolder;text-decoration:underline;">Hello Pets</h6>
                            <h6 style="font-weight:bolder;">30 Orders Completed</h6>
                            <h6 style="font-weight:bolder;">Last Order Today</h6>
                            <h6 style="font-weight:bolder;">Ruaka, Nairobi, Kenya</h6>      
                            <h6 style="color:green;font-weight:bolder;"><b-icon variant="success" style="margin:0;" font-scale="1" icon="clock-fill"></b-icon>Available</h6> 
                            <b-button block href="#" style="background-color:#0386ac;font-weight:bolder;">View Business/Service</b-button>      
                            </b-col>
                        </b-row>
                       
                    </b-card>
                </b-list-group-item>
                <b-list-group-item>
                    <b-card style="border:0;color:black;">
                        <b-row no-gutters>
                            <b-col>
                                <img id="main-logo" class="d-inline-block align-top mr-1" style="width:180px;height:120px;" src="https://www.48hourslogo.com/48hourslogo_data/2018/07/01/74724_1530380156.png" alt="Shards Dashboard">
                            </b-col>
                            <b-col>
                            <h6 style="font-weight:bolder;text-decoration:underline;">Keys Dog Training</h6>
                            <h6 style="font-weight:bolder;">15 Appointments Completed</h6>
                            <h6 style="font-weight:bolder;">Banana, Nairobi, Kenya</h6>      
                            <h6 style="color:green;font-weight:bolder;"><b-icon variant="success" style="margin:0;" font-scale="1" icon="clock-fill"></b-icon>Available</h6> 
                            <b-button block href="#" style="background-color:#0386ac;font-weight:bolder;">View Business/Service</b-button>      
                            </b-col>
                        </b-row>
                       
                    </b-card>
                </b-list-group-item>
                <b-list-group-item>
                    <b-card style="border:0;color:black;">
                        <b-row no-gutters>
                            <b-col>
                                <img id="main-logo" class="d-inline-block align-top mr-1" style="width:180px;height:120px;" src="https://i.pinimg.com/originals/6c/bf/b2/6cbfb2918398cdf0eac9e5f307a2f541.jpg" alt="Shards Dashboard">
                            </b-col>
                            <b-col>
                            <h6 style="font-weight:bolder;text-decoration:underline;">Terry Vet Service</h6>
                            <h6 style="font-weight:bolder;">30 Appointments Completed</h6>
                            <h6 style="font-weight:bolder;">Ruaka, Nairobi, Kenya</h6>      
                            <h6 style="color:green;font-weight:bolder;"><b-icon variant="success" style="margin:0;" font-scale="1" icon="clock-fill"></b-icon>Available</h6> 
                            <b-button block href="#" style="background-color:#0386ac;font-weight:bolder;">View Business/Service</b-button>      
                            </b-col>
                        </b-row>
                       
                    </b-card>
                </b-list-group-item>
                <b-list-group-item>
                    <b-card style="border:0;color:black;">
                        <b-row no-gutters>
                            <b-col>
                                <img id="main-logo" class="d-inline-block align-top mr-1" style="width:180px;height:120px;" src="https://i.pinimg.com/originals/6c/bf/b2/6cbfb2918398cdf0eac9e5f307a2f541.jpg" alt="Shards Dashboard">
                            </b-col>
                            <b-col>
                            <h6 style="font-weight:bolder;text-decoration:underline;">Terry Vet Service</h6>
                            <h6 style="font-weight:bolder;">30 Appointments Completed</h6>
                            <h6 style="font-weight:bolder;">Ruaka, Nairobi, Kenya</h6>      
                            <h6 style="color:green;font-weight:bolder;"><b-icon variant="success" style="margin:0;" font-scale="1" icon="clock-fill"></b-icon>Available</h6> 
                            <b-button block href="#" style="background-color:#0386ac;font-weight:bolder;">View Business/Service</b-button>      
                            </b-col>
                        </b-row>
                       
                    </b-card>
                </b-list-group-item>
            </b-list-group>
          </b-col>

      </b-row>
  </b-container>

  <b-modal hide-footer id="modal-1" title="Notifications">
      <div style="height:324px;overflow:auto;margin:5px;">
    <b-list-group v-for="notification in notifications" :v-key="notification.title">
        <b-list-group-item style="border-bottom:1px;">
            <p style="color:#0386ac;">Title: {{notification.title}}<br>Date: {{notification.date | moment("dddd, MMMM Do YYYY")}}<br><span style="font-weight:bold;">{{notification.message}}</span></p>
            <b-button v-if="notification.action === true" block href="#" style="background-color:green;font-weight:bolder;">Claim Reward</b-button> 
            </b-list-group-item>
        
    </b-list-group>
      </div>
  </b-modal>

  <b-modal cancel-disabled busy  id="modal-2" hide-footer hide-header title="Your Profile">
      <b-card
      sub-title="You Can Edit Your Profile Information Here"
      title="Your Profile">
      <b-card-text>
          <b-form-group
      id="fieldset-1"
      label="Full Names"
      label-for="input-1"
      valid-feedback="Thank you!">
      <b-form-input id="input-1" v-model="user.fullnames" :state="state" trim></b-form-input>
    </b-form-group>

    <b-form-group
      id="fieldset-1"
      
      label="Email"
      label-for="input-1"
      valid-feedback="Thank you!"
    >
      <b-form-input id="input-1" v-model="user.email" :state="state" trim></b-form-input>
    </b-form-group>

    <b-form-group
      id="fieldset-1"
      
      label="Mobile"
      label-for="input-1"
      valid-feedback="Thank you!"
    >
      <b-form-input id="input-1" v-model="user.mobile" :state="state" trim></b-form-input>
    </b-form-group>

    <b-form-group
      id="fieldset-1"

      label="Location"
      label-for="input-1"
      valid-feedback="Thank you!"
    >
      <b-form-input id="input-1" v-model="user.location" trim></b-form-input>
    </b-form-group>

    <b-form-group
      id="fieldset-1"

      label="City"
      label-for="input-1"
      valid-feedback="Thank you!"
    >
      <b-form-input id="input-1" v-model="user.city"  trim></b-form-input>
    </b-form-group>

    <b-form-group
      id="fieldset-1"

      label="Country"
      label-for="input-1"
      valid-feedback="Thank you!"
    >
      <b-form-input id="input-1" v-model="user.country"  trim></b-form-input>
    </b-form-group>

      </b-card-text>
      <b-button block href="#" variant="success">Update Account</b-button>
      <b-button block @click="hideProfile" variant="danger">Close Window</b-button>
    </b-card>
  </b-modal>



</div>
</template>

<script>
export default {
    data(){
        return{
            notifications:[{
                title:'Appointment Complete',
                date:Date.now(),
                message:'Your appointment has been marked complete.',
                action:false
            },
            {
                title:'Order Placed',
                date:Date.now(),
                message:'We have successfully placed your order.',
                action:false
            },
            {
                title:'Claim Reward',
                date:Date.now(),
                message:'You Have Been Rewarded 500Ksh Airtime',
                action:true
            },
            {
                title:'Appoinment Confirmed',
                date:Date.now(),
                message:'We have successfully confirmed your appointment',
                action:false
            }],
            user:{
                fullnames:'Rony Quail',
                mobile:'+254705009784',
                email:'rony@thecodingguy.co.ke',
                location:'Ruaka',
                city:'Nairobi',
                country:'Kenya'
            }
        }
    },
    methods:{
        showNotifications(){

            this.$bvModal.show('modal-1')
        },
        fetchNotifications(){


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