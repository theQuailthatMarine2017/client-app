<template>
<div >
    <b-navbar toggleable="lg" style="background-color:#0386ac;" >
        <!-- <b-icon style="width: 60px; height: 60px;color:white;" icon="list"></b-icon> -->
    <b-navbar-brand @click="goHome" href="#" style="color:white;font-weight:bolder;">
        
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
            <!-- <b-button v-b-toggle.sidebar-backdrop style="margin-right:5px;background-color:orange;font-weight:bold;border:1;border-width:3px;border-color:white;">Open SideMenu</b-button> -->
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


<b-row>
<b-cols cols="10">
    <div class="px-3 py-2" style="width:450px;">
          <b-list-group flush>
            <b-list-group-item><b-button @click="goSideBar('agents-portal')" style="background-color:#0386ac;font-weight:bold;" block>Overview</b-button></b-list-group-item>
            <b-list-group-item> <span style="text-decoration:underline;">Add New</span>

                <b-list-group flush>
                    <b-list-group-item>
                        
                        <b-button @click="goSideBar('adds-agent')"  style="background-color:#0386ac;font-weight:bold;" block>Agent</b-button>
                                                <b-button @click="goSideBar('adds-client')"  style="background-color:#0386ac;font-weight:bold;" block>Client</b-button>

                        <b-button @click="goSideBar('adds-property')" style="background-color:#0386ac;font-weight:bold;" block>Property</b-button>
                        <b-button @click="goSideBar('adds-holiday')" style="background-color:#0386ac;font-weight:bold;" block>Holiday Deal</b-button>

                    </b-list-group-item>
                </b-list-group>
            </b-list-group-item>
            <b-list-group-item> <span style="font-weight:bold;"><h5>Manage</h5></span>

                <b-list-group flush>
                    <b-list-group-item>
              <b-button @click="goSideBar('manage-agent')" style="background-color:#0386ac;font-weight:bold;" block>Agent</b-button>
                        <b-button @click="goSideBar('manage-property')" style="background-color:#0386ac;font-weight:bold;" block>Property</b-button>
                        <b-button @click="goSideBar('manage-client')" style="background-color:#0386ac;font-weight:bold;" block>Client</b-button>
                        <b-button @click="goSideBar('manage-holiday')" style="background-color:#0386ac;font-weight:bold;" block>Holiday Deal</b-button> 
                        </b-list-group-item>
                </b-list-group>
            </b-list-group-item>
            </b-list-group>
        
      </div>
</b-cols>



          <b-col cols="4">
  
         <b-container style="margin:10px;text-align:left;color:black;height:70vh;border-radius:12px;">
                <b-container style="margin-top:20px;font-weight:bolder;">
<h3>Your Profile</h3>
                    <b-list-group flush>
                        <b-list-group-item><b-img fluid thumbnail  :src="user.profile_pic" width="100" height="100" alt="Center image"></b-img></b-list-group-item>
                        <b-list-group-item>FULLNAMES: {{ user.fullnames }}</b-list-group-item>
                        <b-list-group-item>MOBILE: {{ user.mobile }}</b-list-group-item>
                        <b-list-group-item>EMAIL: {{ user.email }}</b-list-group-item>
                        <b-list-group-item>STAFF TYPE: {{ user.stafftype }}</b-list-group-item>
                        <b-list-group-item>PORTAL CODE: {{ user.agentcode }}</b-list-group-item>
                        <b-button @click="signOut" block variant="info">Sign Out Of Account</b-button>
                    </b-list-group>
                    
                        
                </b-container>
            
    </b-container>

     

  
          </b-col>

          <b-col cols="3">

<b-overlay :show="show" rounded="sm">
              <b-container style="margin:0px;text-align:left;color:white;border-radius:12px;padding:20px;">
<h3 style="color:black;">Notification Center</h3>

<div   style="width:450px;height:515px;overflow:auto;background-color:#d3d3d3;padding:15px;border-radius:15px;">


    <div v-for="item in sortedItems" v-bind:key="item.date" style="padding:10px;margin:10px;background-color:#0386ac;width:400px;border-radius:12px;">
                        <h6 style="font-weight:bold;">
                            <span style="text-decoration:underline;">{{ item.title }}</span><br>{{ item.date | moment("dddd, MMMM Do YYYY") }}<br>{{ item.name }}
                        </h6>
                    </div>
                   
</div>




            
    </b-container>
    </b-overlay>
  
          </b-col>



</b-row>


<b-modal ref="modal-1" hide-footer >
      <div class="d-block text-center">
        <h3>Are You Sure You Want To Sign Out?</h3>
      </div>
      <b-button class="mt-3" variant="danger" block @click="loggOff">Sign Out</b-button>
      <b-button class="mt-2" variant="warning" block @click="cancelAction">Cancel</b-button>
    </b-modal>


</div>
</template>

<script>
import { Bar } from 'vue-chartjs';
import axios from 'axios';
export default {
    data(){
        return{
            time:Date.now(),
            variant: 'dark',
            show:false,
            notifications:[],
            user:{
                fullnames:'',
                profile_pic:'',
                mobile:'',
                email:'',
                agentcode:'',
                stafftype:'',
            },
            chartOptions: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91]
        }],
        options: {
            series: [4, 5, 2, 3],
            labels: ['Townhouse', 'Apartment', 'Cottage', 'Mansion']
            },
            options_listed:{
                series: [6, 15, 5, 5],
                labels: ['Townhouse', 'Apartment', 'Cottage', 'Mansion']
            }
        }
    },
    mounted(){

        this.checkUser()
        
    },
    methods:{
        goSideBar(route){

            this.$router.push({name:route})

        },
        cancelAction(){

            this.$refs['modal-1'].hide()

        } ,
        goHome(){

            this.$router.push({path:'/'})

        } ,      
        checkUser(){

            if(localStorage.getItem('user_agentcode') != null){

                // var user = JSON.parse(localStorage.getItem('user'))
                this.user.fullnames = localStorage.getItem('user_fullnames')
                this.user.profile_pic = localStorage.getItem('user_profilepic')
                this.user.email = localStorage.getItem('user_email')
                this.user.mobile = localStorage.getItem('user_mobile')
                this.user.agentcode = localStorage.getItem('user_agentcode')
                this.user.stafftype = localStorage.getItem('user_stafftype')

                console.log(this.user.agentcode)
                
                this.$bvToast.toast('Welcome Back ' + this.user.fullnames + '!', {
                    title: "Welcome!",
                    variant: 'success',
                    solid: true
                });

                this.getNotifications()

            }else{

                this.$router.push({path:'/'})
            }

        },
        getNotifications(){

            this.show = true
            axios.get('https://us-central1-homesforexpats.cloudfunctions.net/getNotifications').then( res => {


            if(res.data != null){

                res.data.forEach(element => {
                        console.log(element)
                        this.notifications.push(element)
                        
                    });

                    this.show = false

                    console.log(this.notifications);

            }
                        
                        
        })
        },
        signOut(){

            this.$refs['modal-1'].show()

        },
        loggOff(){

            localStorage.clear()
            this.checkUser()
        }
    },
    computed: {
    sortedItems: function() {
        this.notifications.sort( ( a, b) => {
            return new Date(b.date) - new Date(a.date);
        });
        return this.notifications;
    }
}
    
}
</script>

<style scoped>

</style>