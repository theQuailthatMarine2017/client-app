<template>
    <div>
        
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

        <b-container fluid style="height:100vh;margin-top:20px;border-top:10px;margin-bottom:110px;border-color:white;">
    <h3>Add New Property</h3>

    <b-row>

        <b-col  cols="3">
            <b-card>
            <h5>Property Main Details</h5>
            
           <div>
               <b-form-group
                    label="Enter Properyt Location Name:"
                    
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-input title="Enter Properyt Location Name"  v-model="agent.fullnames" placeholder="Enter Agent's Names"></b-form-input>
               </b-form-group>

                <b-form-group
                    label="Select Agent To Assign:"
                    
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-select v-model="selected" :options="agents"></b-form-select>
               </b-form-group>


                <b-form-group
                    label="Main Website Banner Description:"
                    
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                    <b-form-textarea
                        id="textarea"
                        
                        placeholder="Enter Main Website Banner Description"
                        rows="3"
                        max-rows="4"
                        ></b-form-textarea>
               </b-form-group>

               <b-form-group
                    label="Upload Website Banner Image"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
            <b-form-file
                v-model="agent.photo"
                placeholder="Select Banner Image...."
                accept="image/jpegf"
                drop-placeholder="Drop Agent's Photo here..."
                ></b-form-file>
            </b-form-group>

            <b-form-group
                    label="Upload Property Images (Mimimum 10 Photos): Make Sure All Images Have Been Approved By IT Manager"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
            <b-form-file
            multiple
                v-model="agent.id_photo"
                placeholder="Select Property Images To Upload...."
                accept="image/jpeg,application/pdf"
                drop-placeholder="Drop Agent's Photo here..."
                ></b-form-file>
            </b-form-group>
                
           </div>

            </b-card>

        </b-col>

        <b-col cols="3">

            <b-card>
            <h5>Property Owner Details</h5>


            <b-form-group
                    label="Enter Property Owners Names:"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-input title="Enter Property Owners Names"  v-model="agent.national_id" placeholder="Enter Agent's National ID number"></b-form-input>
               </b-form-group>

            <b-form-group
                    label="Enter Property Owners Mobile:"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-input title="Enter Property Owners Mobile"  v-model="agent.kra" placeholder="Enter Agent's KRA Pin"></b-form-input>
               </b-form-group>

               <b-form-group
                    label="Enter Property Owners Email:"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-input title="Enter Property Owners Email"  v-model="agent.kra" placeholder="Enter Agent's KRA Pin"></b-form-input>
               </b-form-group>

            </b-card>
        </b-col>


         <b-col cols="3">
            <b-card>
             <h5>Property Features Details</h5>

             <b-form-group
                    label="Enter Property Rental Cost"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-spinbutton value="40000" step="1000" min="40000" max="600000"></b-form-spinbutton>
               </b-form-group>

               <b-form-group
                    label="Enter Number Of Bedrooms"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-spinbutton value="1" step="1" min="1" max="10"></b-form-spinbutton>
               </b-form-group>
               <b-form-group
                    label="Enter Number Of Bathrooms"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-spinbutton value="1" step="1" min="1" max="10"></b-form-spinbutton>
               </b-form-group>

               <b-form-group
                    label="Number of Floors:"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-spinbutton value="1" step="1" min="1" max="4"></b-form-spinbutton>
               </b-form-group>

               <b-form-group
                    label="Mimimum Lease"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-spinbutton value="1" step="1" min="1" max="36"></b-form-spinbutton>
               </b-form-group>

               <b-form-group
                    label="House Type:"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-select :options="['Townhouse', 'Apartment', 'Cottage', 'Mansion']"></b-form-select>
               </b-form-group>

            </b-card>

         </b-col>

         <b-col cols="3">

             <b-card>
             <b-form-group
                    label="Internet Available:"
                
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    
                    >
                    <b-form-radio-group
        buttons
        button-variant="outline-primary"
        size="sm"
        :options="['availabe','not available']"
        :aria-describedby="ariaDescribedby"
        name="radio-options-slots"
      >
                    </b-form-radio-group>
               </b-form-group>

               <b-form-group
                    label="Swimming Pool Available:"
                    
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                    <b-form-radio-group
        
        buttons
        button-variant="outline-primary"
        size="sm"
        :options="['availabe','not available']"
        :aria-describedby="ariaDescribedby"
        name="radio-options-slots"
      >
                    </b-form-radio-group>
               </b-form-group>

               <b-form-group
                    label="Entertainment Area Available:"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                    <b-form-radio-group
        
        buttons
        button-variant="outline-primary"
        size="sm"
        :options="['availabe','not available']"
        :aria-describedby="ariaDescribedby"
        name="radio-options-slots"
      >
                    </b-form-radio-group>
               </b-form-group>

               <b-form-group
                    label="Private Parking Available:"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                    <b-form-radio-group
       
        buttons
        button-variant="outline-primary"
        size="sm"
        :options="['availabe','not available']"
        :aria-describedby="ariaDescribedby"
        name="radio-options-slots"
      >
                    </b-form-radio-group>
               </b-form-group>

               <b-form-group
                    label="DSTV Available:"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                    <b-form-radio-group
       
        buttons
        button-variant="outline-primary"
        size="sm"
        :options="['availabe','not available']"
        :aria-describedby="ariaDescribedby"
        name="radio-options-slots"
      >
                    </b-form-radio-group>
               </b-form-group>

               <b-form-group
                    label="Generator Available:"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                    <b-form-radio-group
        
        buttons
        button-variant="outline-primary"
        size="sm"
        :options="['availabe','not available']"
        :aria-describedby="ariaDescribedby"
        name="radio-options-slots"
      >
                    </b-form-radio-group>
               </b-form-group>

               <b-form-group
                    label="DSQ Available:"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                    <b-form-radio-group
       
        buttons
        button-variant="outline-primary"
        size="sm"
        :options="['availabe','not available']"
        :aria-describedby="ariaDescribedby"
        name="radio-options-slots"
      >
                    </b-form-radio-group>
               </b-form-group>

               <b-alert show variant="danger" style="padding:12px;">
                   <strong> Upload Policy<br></strong>
                    <strong>Be Aware That Properties Can Only Be Added After Business Director's Approval!</strong>
                </b-alert>

               <b-button block style="background-color:#0386ac;color:white;font-weight:bolder;">Add New Property</b-button>

             </b-card>

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
    
      <div class="px-3 py-2" >
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
    </b-sidebar>


    </div>
</template>

<script>
import { uuid } from 'vue-uuid';

export default {
    data(){
        return{
            agent:{
                photo:null,
                fullnames:'',
                email:'',
                mobile:'',
                kra:'',
                national_id:'',
                id_photo:null
            },
            selected:'',
            agents:[
                {
                    text:'Rony Quail',
                    value:{
                        fullnames:'Rony Quail',
                        img:'https://i.postimg.cc/CKh0hPnM/profilepic.jpg'
                    }
                },
                {
                    text:'Jessica Mawingo',
                    value:{
                        fullnames:'Jessica Mawingo',
                        img:'https://www.blackenterprise.com/wp-content/blogs.dir/1/files/2016/08/WOMEN-OF-POWER_AYO-HAYNES-335x450.jpg'
                    }
                }
            ]
            
        }
    },
    mounted(){

        //Fetch Agents From Database And Populate The Selection options
        
        
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