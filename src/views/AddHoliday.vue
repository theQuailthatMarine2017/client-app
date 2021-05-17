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

        <b-container fluid style="height:70vh;margin-top:20px;border-top:10px;border-color:white;">
    <h3>Add New Holiday Deal</h3>

<b-overlay :show="show" rounded="sm">
    <b-row>
        <b-col  cols="6">

            <b-card>
            
           <div>
               <b-form-group
                    label="Enter Holiday Location Name:"
                    
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-input title="Enter Holiday Package Name"  v-model="holiday.name" placeholder="Enter Agent's Names"></b-form-input>
               </b-form-group>
                <b-form-group
                    label="Enter Holiday Agent's Mobile:"
                    
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-input title="Enter Holiday Agent Mobile"  v-model="holiday.mobile" placeholder="Enter Agent's Mobile"></b-form-input>
               </b-form-group>
                <b-form-group
                    label="Enter Holiday Agent's Email:"
                    
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-input v-model="holiday.email" title="Enter Holiday Agent's Email"   placeholder="Enter Agent's Email"></b-form-input>
               </b-form-group>

               <b-form-group
                    label="Enter Holiday Description:"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-textarea
                        id="textarea"
                        
                        placeholder="Enter Brief Holiday Package Description"
                        rows="3"
                        max-rows="4"
                        ></b-form-textarea>
               </b-form-group>
                
           </div>

            </b-card>


        </b-col>

        <b-col cols="6">

            <b-card>
            <b-form-group
                    label="Upload Holiday Location Photos:"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
            <b-form-file
                v-model="holiday_photos"
                multiple
                placeholder="Select Photo To Upload...."
                accept="image/jpeg"
                drop-placeholder="Drop Agent's Photo here..."
                ></b-form-file>
            </b-form-group>

            <b-form-group
                    label="Enter Holiday Package Cost"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                    
                <b-form-spinbutton v-model="holiday.cost" :value=30000 step="250" min="10000" max="100000"></b-form-spinbutton>
               </b-form-group>

                <b-form-group
                    label="Enter Holiday Discount"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-spinbutton v-model="holiday.discount" :value=10 step="5" min="5" max="30"></b-form-spinbutton>
               </b-form-group>

               <b-alert show variant="danger" style="padding:12px;">
                   <strong> Upload Policy<br></strong>
                    <strong>Be Aware That Holidays Can Only Be Added After Business Director's Approval!</strong>
                </b-alert>

               <b-button block @click="addHoliday" style="background-color:orange;font-weight:bolder;">Add New Holiday</b-button>

            </b-card>
        </b-col>

        

    </b-row>
</b-overlay>
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
import axios from 'axios';


export default {
    data(){
        return{
            holiday:{
                _id:uuid.v1(),
                name:'',
                mobile:'',
                email:'',
                description:'',
                photos:[],
                cost:0,
                discount:0
            },
            holiday_photos:[],
        }
    },
    methods:{
        goSideBar(route){

            this.$router.push({name:route})

        },
        addImg(file){

            this.holiday.photos.push(file)

            if(this.holiday.photos.length === this.holiday_photos.length){

                this.show = true;

                axios.post('http://localhost:5001/homesforexpats-55b57/us-central1/addHoliday',this.holiday).then( res => {

                        console.log(res.data.title);
                        this.show = false
                        if (res.data.title === 'success'){
                            this.$bvToast.toast('Holiday Added Succesfully Added!', {
                                title: "Holiday Added!",
                                variant: 'success',
                                solid: true
                            });

                            // this.$router.go(0);
                            
                        }
                })
            }
        },
        addHoliday(){

            console.log(this.holiday_photos)

            this.holiday_photos.forEach(element => {

                var reader = new FileReader();

                reader.readAsDataURL(element);

                reader.onload = async () => {
                    this.addImg(reader.result)
                }
                
            });

        }

    }
    
}
</script>

<style scoped>

</style>