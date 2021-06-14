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
<b-overlay :show="show" rounded="sm">
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
                <b-form-input v-model="home.location" title="Enter Properyt Location Name"  placeholder="Enter Agent's Names"></b-form-input>
               </b-form-group>

               

                <b-form-group
                    label="Website Banner Description:"
                    
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                    <b-form-textarea
                        id="textarea"
                        v-model="home.banner_description"
                        placeholder="Enter Main Website Banner Description"
                        rows="3"
                        max-rows="4"
                        ></b-form-textarea>
               </b-form-group>

               <b-form-group
                    label="Main Property Description:"
                    
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                    <b-form-textarea
                        id="textarea"
                        v-model="home.main_description"
                        placeholder="Enter Main Property Description"
                        rows="3"
                        max-rows="4"
                        ></b-form-textarea>
               </b-form-group>

               <b-form-group
                    label="Upload Property Banner Image."
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
            <b-form-file
                v-model="home_banner"
                placeholder="Select Property Images To Upload...."
                accept="image/jpeg"
                drop-placeholder="Drop Agent's Photo here..."
                ></b-form-file>
            </b-form-group>

            <b-form-group
                    label="Upload Other Property Images (Mimimum 5 Photos)."
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
            <b-form-file
            multiple
                v-model="home_imgs"
                placeholder="Select Property Images To Upload...."
                accept="image/jpeg"
                drop-placeholder="Drop Agent's Photo here..."
                ></b-form-file>
            </b-form-group>
                
           </div>

            </b-card>

        </b-col>

        <b-col cols="3">

            <b-card>
            <h5>Property Owner & Agent Details</h5>


            <b-form-group
                    label="Enter Property Owners Names:"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-input title="Enter Property Owners Names"  v-model="home.owner_name" placeholder="Enter Agent's National ID number"></b-form-input>
               </b-form-group>

            <b-form-group
                    label="Enter Property Owners Mobile:"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <vue-phone-number-input default-country-code="KE" required :only-countries="countries" v-model="home.owner_mobile" />
               </b-form-group>

               <b-form-group
                    label="Enter Property Owners Email:"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-input title="Enter Property Owners Email"  v-model="home.owner_email" placeholder="Enter Agent's KRA Pin"></b-form-input>
               </b-form-group>

                <b-form-group
                    label="Select Agent Assigned To Property:"
                    v-if="agents != null"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-select v-model="home.agent" :options="agents"></b-form-select>
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
                <b-form-spinbutton value="40000" step="1000" v-model="home.details.price" min="40000" max="600000"></b-form-spinbutton>
               </b-form-group>

               <b-form-group
                    label="Enter Number Of Bedrooms"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-spinbutton value="1" step="1" min="1" v-model="home.details.bedrooms" max="10"></b-form-spinbutton>
               </b-form-group>
               <b-form-group
                    label="Enter Number Of Bathrooms"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-spinbutton value="1" step="1" min="1" v-model="home.details.bathrooms" max="10"></b-form-spinbutton>
               </b-form-group>

               <b-form-group
                    label="Number of Floors:"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-spinbutton value="1" step="1" min="1" v-model="home.details.floors" max="4"></b-form-spinbutton>
               </b-form-group>

               <b-form-group
                    label="Mimimum Lease"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-spinbutton value="1" step="1" min="1" v-model="home.details.minimum_lease" max="36"></b-form-spinbutton>
               </b-form-group>

               <b-form-group
                    label="House Type:"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-select v-model="home.details.house_type" :options="['Townhouse', 'Apartment', 'Cottage', 'Mansion']"></b-form-select>
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
        v-model="home.details.internet"
        size="sm"
        :options="['availabe','not available']"
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
         v-model="home.details.swimming_pool"
        buttons
        button-variant="outline-primary"
        size="sm"
        :options="['availabe','not available']"

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
         v-model="home.details.entertainment_area"
        buttons
        button-variant="outline-primary"
        size="sm"
        :options="['availabe','not available']"
       
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
       v-model="home.details.private_parking"
        buttons
        button-variant="outline-primary"
        size="sm"
        :options="['availabe','not available']"
       
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
       v-model="home.details.dstv"
        buttons
        button-variant="outline-primary"
        size="sm"
        :options="['availabe','not available']"
        
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
        v-model="home.details.generator"
        buttons
        button-variant="outline-primary"
        size="sm"
        :options="['availabe','not available']"
       
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
       v-model="home.details.dsq"
        buttons
        button-variant="outline-primary"
        size="sm"
        :options="['availabe','not available']"
      
        name="radio-options-slots"
      >
                    </b-form-radio-group>
               </b-form-group>

               <b-alert show variant="danger" style="padding:12px;">
                   <strong> Upload Policy<br></strong>
                    <strong>Be Aware That Properties Can Only Be Added After Business Director's Approval!</strong>
                </b-alert>

               <b-button block @click="addHome" style="background-color:#0386ac;color:white;font-weight:bolder;">Add New Property</b-button>

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
    
      <div class="px-3 py-2" >
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
    </b-sidebar>


    </div>
</template>

<script>
import { uuid } from 'vue-uuid';
import axios from 'axios';
export default {
    data(){
        return{
            show:false,
            countries:['KE'],
            home_imgs:[],
            home_banner:null,
            agent:{
                photo:null,
                fullnames:'',
                email:'',
                mobile:'',
                kra:'',
                national_id:'',
                id_photo:null
            },
            agents:[],
            home:{
                _id:uuid.v1(),
                location:'',
                available:true,
                agent:'',
                banner_description:'',
                banner_img:'',
                main_description:'',
                owner_name:'',
                owner_mobile:'',
                owner_email:'',
                cost:null,
                imgs:[],
                details:{
                    bedrooms:1,
                    minimum_lease:4,
                    bathrooms:1,
                    house_type:'',
                    floors:1,
                    price:0,
                    internet:'',
                    swimming_pool:'',
                    entertainment_area:'',
                    private_parking:'',
                    dstv:'',
                    furnished:'',
                    generator:'',
                    dsq:''
                }
            }
            
        }
    },
    mounted(){

        //Fetch Agents From Database And Populate The Selection options
        axios.get('https://us-central1-homesforexpats.cloudfunctions.net/getAgents').then( res => {


            if(res.data != null){

                res.data.forEach(element => {
                        console.log(element.fullnames)

                        if(element.staff_type === "AGENT"){
                            this.agents.push('Name: '+ element.fullnames + ' Mobile: ' + element.mobile + ' Email: ' +element.email)
                        }
                        
                    });

                    console.log(this.agents);

            }
                        
                        
        })
        
        
    },
    methods:{
        goSideBar(route){

            this.$router.push({name:route})

        },
        submitHome(){

            var reader = new FileReader();

            reader.readAsDataURL(this.home_banner);

            reader.onload = async () => {

                this.home.banner_img = reader.result

                this.show = true;

                axios.post('https://us-central1-homesforexpats.cloudfunctions.net/addHome',this.home).then( res => {

                        console.log(res.data.title);
                        this.show = false
                        if (res.data.title === 'success'){
                            this.$bvToast.toast('Homes Added Succesfully Added!', {
                                title: "Home Added!",
                                variant: 'success',
                                solid: true
                            });
                            
                        }
                })

            }

        },
        addImg(file){

            var staff = localStorage.getItem("user_stafftype")
            if(staff === "IT"){

                this.home.imgs.push(file)

            if(this.home.imgs.length === this.home_imgs.length){

                //After Looping Other Photos Change Banner Image Selection Before Axois Post
                this.submitHome()

                
            }
                

            }else{

                this.$bvToast.toast('Only IT Staff Can Add New Staff', {
                title: "Denied!",
                variant: 'danger',
                solid: true
                });
            }

            
        },
        addHome(){

            console.log(this.home_imgs)

            this.home_imgs.forEach(element => {

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