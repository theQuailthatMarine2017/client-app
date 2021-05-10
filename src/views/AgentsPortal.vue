<template>
<div >
    <b-navbar toggleable="lg" style="background-color:#0386ac;" >
        <!-- <b-icon style="width: 60px; height: 60px;color:white;" icon="list"></b-icon> -->
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
                        <b-button @click="goSideBar('manage-leads')" style="background-color:#0386ac;font-weight:bold;" block>Leads</b-button>
                        <b-button @click="goSideBar('manage-holiday')" style="background-color:#0386ac;font-weight:bold;" block>Holiday Deal</b-button>
                        <b-button @click="goSideBar('manage-account')" style="background-color:#0386ac;font-weight:bold;" block>Your Account</b-button>
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
                        <b-list-group-item><b-img fluid thumbnail  src="https://blackrealtors.com/wp-content/uploads/2019/11/black-man-realtor.jpg" width="240" height="240" alt="Center image"></b-img></b-list-group-item>
                        <b-list-group-item>FULLNAMES: Steven Kinyanjui Biko</b-list-group-item>
                        <b-list-group-item>MOBILE: 0705009784</b-list-group-item>
                        <b-list-group-item>EMAIL: tam@g.com</b-list-group-item>
                        <b-list-group-item>AGENT PORTAL CODE: SKB001-21-5</b-list-group-item>
                        <b-button block variant="info">Request Profile Update</b-button>
                    </b-list-group>
                    
                        
                </b-container>
            
    </b-container>

     

  
          </b-col>

          <b-col cols="3">

              <b-container style="margin:0px;text-align:left;color:white;border-radius:12px;padding:20px;">
<h3 style="color:black;">Notification Center</h3>

<div style="width:450px;height:214px;overflow:auto;background-color:#d3d3d3;padding:15px;border-radius:15px;">
    <div style="padding:10px;background-color:#0386ac;width:400px;border-radius:12px;">
                        <h6 style="font-weight:bold;">
                            <span style="text-decoration:underline;">New Client Request!</span><br>{{ time | moment("dddd, MMMM Do YYYY") }}<br>Runda Meadows, House Number 412
                        </h6>
                    </div>
                    <div style="padding:10px;background-color:#0386ac;margin-top:5px;width:400px;border-radius:12px;">
                        <h6 style="font-weight:bold;">
                            <span style="text-decoration:underline;">Agent Update Account Request!</span><br>{{ time | moment("dddd, MMMM Do YYYY") }}<br>Requested by Steven Kinyanjui Biko.
                        </h6>
                    </div>
                    <div style="margin-top:5px;padding:10px;background-color:#0386ac;width:400px;border-radius:12px;">
                        <h6 style="font-weight:bold;">
                            <span style="text-decoration:underline;">New Property Added!</span><br>{{ time | moment("dddd, MMMM Do YYYY") }}<br>Ridgways, Dell Road, House Number 412
                        </h6>
                    </div>
                    <div style="margin-top:5px;padding:10px;background-color:#0386ac;width:400px;border-radius:12px;">
                        <h6 style="font-weight:bold;">
                            <span style="text-decoration:underline;">New Tenant Added!</span><br>{{ time | moment("dddd, MMMM Do YYYY") }}<br>Shirley Oganda from Toronto Canada<br>Renting Runda, Mimosa Grove, House Number 234
                        </h6>
                    </div>
                    <div style="margin-top:5px;padding:10px;background-color:#0386ac;width:400px;border-radius:12px;">
                        <h6 style="font-weight:bold;">
                            <span style="text-decoration:underline;">New Holiday Added!</span><br>{{ time | moment("dddd, MMMM Do YYYY") }}<br>Diani, Searock Apartments
                        </h6>
                    </div>
</div>

<h3 style="margin-top:9px;color:black;">Overview</h3>

<b-row no-gutters style="text-align:center;">

   

    <b-col cols="6">

        <div style="padding:8px;background-color:#0386ac;border-radius:12px;">
                        <h6 style="font-weight:bold;">
                            20 Houses Listed
                        </h6>
                    </div>

    </b-col>

    <b-col cols="6">

        <div style="padding:8px;background-color:#0386ac;border-radius:12px;margin-left:5px;">
                        <h6 style="font-weight:bold;">
                            8 Houses Rented
                        </h6>
                    </div>

    </b-col>

    <b-col cols="12">

        <div style="margin-top:8px;padding:10px;background-color:#0386ac;border-radius:12px;">
                        <h6 style="font-weight:bold;">
                            5 Holiday Deals Available
                        </h6>
                    </div>


        <div style="margin-top:8px;padding:10px;background-color:#0386ac;border-radius:12px;">
            <h6 style="font-weight:bold;">
                3 Leads Pending
            </h6>
        </div>

        <div style="margin-top:8px;padding:10px;background-color:#0386ac;border-radius:12px;width:auto;">
            <h6 style="font-weight:bold;">
                40,000 Page Visits from 50 Different Countries
            </h6>
        </div>

    </b-col>
</b-row>

            
    </b-container>
  
          </b-col>



</b-row>





</div>
</template>

<script>
import { Bar } from 'vue-chartjs';

export default {
    data(){
        return{
            time:Date.now(),
            variant: 'dark',
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
    methods:{
        goSideBar(route){

            this.$router.push({name:route})

        },
    }
    
}
</script>

<style scoped>

</style>