<template>
<div >
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
        <template>
            <b-button v-b-toggle.sidebar-backdrop style="margin-right:5px;background-color:orange;font-weight:bold;border:1;border-width:3px;border-color:white;">Open SideMenu</b-button>
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

  <b-container fluid style="height:90vh;margin-top:20px;border-top:10px;border-color:white;">
    <h3>Overview</h3>

    <b-row>
        <b-col cols="3">
            <b-card
                title="Listed Houses"
                img-top
                
                tag="article"
                style="max-width: 40rem;background-color:#0386ac;color:white;font-weight:bolder;border-width:5px;border-color:orange;"
                class="mb-2"
            >
                <b-card-text>
                20 Houses Actively Listed
                </b-card-text>

            </b-card>
        </b-col>
        <b-col cols="3">
            <b-card
                title="Houses Rented"
                img-top
                tag="article"
                style="max-width: 20rem;background-color:#0386ac;color:white;font-weight:bolder;border-width:5px;border-color:orange;"
                class="mb-2"
            >
                <b-card-text>
                8 Houses Rented 
                </b-card-text>

            </b-card>
        </b-col>
        <b-col cols="3">
            <b-card
                title="Commissions Paid"
                img-top
                tag="article"
                style="max-width: 20rem;background-color:#0386ac;color:white;font-weight:bolder;border-width:5px;border-color:orange;"
                class="mb-2"
            >
                <b-card-text>
                KES 800000
                </b-card-text>

            </b-card>
        </b-col>
        <b-col cols="3">
            <b-card
                title="Pending Leads"
                img-top
                tag="article"
                style="max-width: 20rem;background-color:#0386ac;color:white;font-weight:bolder;border-width:5px;border-color:orange;"
                class="mb-2"
            >
                <b-card-text>
                5 Leads Pending
                </b-card-text>

            </b-card>
        </b-col>
    
    </b-row>

    <b-row>
 <b-col cols="6">
            <b-card
                title="Leads Locations"
                img-top
                tag="article"
                style="background-color:#0386ac;color:white;font-weight:bolder;border-width:5px;border-color:orange;"
                class="mb-2"
            >
                <b-card-text>
                America,
                Canada
                </b-card-text>

            </b-card>
        </b-col>


        <b-col cols="6">
            <b-card
                title="Total Web Page Visits"
                img-top
                tag="article"
                style="background-color:#0386ac;color:white;font-weight:bolder;border-width:5px;border-color:orange;"
                class="mb-2"
            >
                <b-card-text>
                500,000 Daily Visits
                </b-card-text>

            </b-card>
        </b-col>

    </b-row>
    
     <b-row no-gutters>

        <b-col cols="4">
            
            <h5 style="margin-top:18px;">New Listing Monthly</h5>
            <apexchart width="400" type="bar" :options="chartOptions" :series="series"></apexchart>
        </b-col>

        <b-col cols="4">
            
            <h5 style="margin-top:18px;">Listed Property Types</h5>
            <apexchart width="400" type="pie" :options="options_listed" :series="options_listed.series" ></apexchart>
        </b-col>

        <b-col cols="4">
            
            <h5 style="margin-top:18px;">Rented Property Types</h5>
            <apexchart width="400" type="pie" :options="options" :series="options.series" ></apexchart>
        </b-col>

        

    </b-row>

  </b-container>


 <b-sidebar
      id="sidebar-backdrop"
      title="HomesForExpats"
      :backdrop-variant="variant"
      backdrop
      shadow
    >
    <b-alert show variant="success" style="margin:8px;">
     <strong>You Have 3 Pending Leads!</strong>
   </b-alert>
      <div class="px-3 py-2" >
          <b-list-group flush>
            <b-list-group-item><b-button style="background-color:orange;font-weight:bold;" block>Overview</b-button></b-list-group-item>
            <b-list-group-item> <span style="text-decoration:underline;">Add New</span>

                <b-list-group flush>
                    <b-list-group-item><b-button @click="goAddAgent"  style="background-color:orange;font-weight:bold;" block>Agent</b-button></b-list-group-item>
                    <b-list-group-item><b-button style="background-color:orange;font-weight:bold;" block>Property</b-button></b-list-group-item>
                    <b-list-group-item><b-button style="background-color:orange;font-weight:bold;" block>Holiday Deal</b-button></b-list-group-item>
                </b-list-group>
            </b-list-group-item>
            <b-list-group-item> <span style="text-decoration:underline;">Manage</span>

                <b-list-group flush>
                    <b-list-group-item><b-button style="background-color:orange;font-weight:bold;" block>Agent</b-button></b-list-group-item>
                    <b-list-group-item><b-button style="background-color:orange;font-weight:bold;" block>Property</b-button></b-list-group-item>
                    <b-list-group-item><b-button style="background-color:orange;font-weight:bold;" block>Leads</b-button></b-list-group-item>
                    <b-list-group-item><b-button style="background-color:orange;font-weight:bold;" block>Holiday Deal</b-button></b-list-group-item>
                </b-list-group>
            </b-list-group-item>
            <b-list-group-item><b-button style="background-color:orange;font-weight:bold;" block>Your Account</b-button></b-list-group-item>
            </b-list-group>
        
      </div>
    </b-sidebar>



</div>
</template>

<script>
import { Bar } from 'vue-chartjs';

export default {
    data(){
        return{
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
        goAddAgent(){

            this.$router.push({name:'adds-agent'})
        }
    }
    
}
</script>

<style scoped>

</style>