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

        <b-container fluid style="height:65vh;margin-top:20px;border-top:10px;border-color:white;">
    <h3>Add New Staff</h3>
<b-overlay :show="show" rounded="sm">
    <b-row>
        <b-col  cols="6">
            
           <div>
               <b-form-group
                    label="Enter Agent's Full Names:"
                    
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-input title="Enter Agent's Full Names"  v-model="agent.fullnames" placeholder="Enter Agent's Names"></b-form-input>
               </b-form-group>
                <b-form-group
                    label="Enter Agent's Mobile:"
                    
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                    <vue-phone-number-input default-country-code="KE" required :only-countries="countries" v-model="agent.mobile" />
               </b-form-group>
                <b-form-group
                    label="Enter Agent's Email:"
                    
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-input v-model="agent.email" title="Enter Agent's Email"   placeholder="Enter Agent's Email"></b-form-input>
               </b-form-group>

               <b-form-group
                    label="Select Staff Type"
                    
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-select v-model="agent.staff_type" :options="type"></b-form-select>
               </b-form-group>

                    
           </div>

        </b-col>

        <b-col cols="6">
 <b-form-group
                    label="Upload Staff's Profile Picture Plus National ID and KRA Certificate.PLEASE SELECT PHOTOS IN THE FOLLOWING ORDER: PROFILE PICTURE FIRST THEN OTHER DOCUMENTS."
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
            <b-form-file
            multiple
                v-model="agent_docs"
                placeholder="Select Agent's Documents To Upload...."
                
                drop-placeholder="Drop Agent's Photo here..."
                ></b-form-file>
            </b-form-group>  
            

            <b-form-group
                    label="Enter Agent's National ID number:"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-input title="Enter Agent's National ID number"  v-model="agent.national_id" placeholder="Enter Agent's National ID number"></b-form-input>
               </b-form-group>

            <b-form-group
                    label="Enter Agent's Portal Code:"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-input title="Enter Portal Code"  v-model="agent.agentcode" placeholder="Enter Agent's Portal Code"></b-form-input>
               </b-form-group>

               

               <b-alert show variant="danger" style="padding:12px;">
                   <strong> Upload Policy<br></strong>
                    <strong>Be Aware That Agents Can Only Be Added After Business Director's Approval!</strong>
                </b-alert>

               <b-button @click="addAgent" block style="background-color:orange;font-weight:bolder;">Add New Staff</b-button>

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

import axios from 'axios';
import base64Img from 'base64-img';

export default {
    data(){
        return{
            type:['IT','BUSINESS/MARKETING','AGENT','ÁCCOUNTING'],
            show:false,
            agent_docs:[],
            agent:{
                staff_type:'',
                agentcode:'',
                fullnames:'',
                email:'',
                mobile:'',
                national_id:'',
                profile_pic:'',
                agent_imgs:[]
            },
            final_img:Array,
            countries:['KE']
        }
    },
    methods:{
        goSideBar(route){

            this.$router.push({name:route})

        },
        addImg(file){


            this.agent.agent_imgs.push(file)


            if(this.agent.agent_imgs.length === this.agent_docs.length){

                console.log(this.agent.agent_imgs[0]);

                this.agent.profile_pic = this.agent.agent_imgs[0];

                this.show = true;

                this.agent.agent_imgs.pop(this.agent.agent_imgs[0]);

                
                axios.post('http://localhost:5001/homesforexpats-55b57/us-central1/addAgent',this.agent).then( res => {

                        console.log(res.data.title);
                        this.show = false
                        if (res.data.title === 'success'){
                            this.$bvToast.toast('Staff Details Succesfully Added!', {
                                title: "Staff Added!",
                                variant: 'success',
                                solid: true
                            });

                            // this.$router.go(0);
                            
                        }
                })
            }
            
        },
        async addAgent(){
            
            console.log(this.agent_docs)
            
            this.agent_docs.forEach(element => {

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