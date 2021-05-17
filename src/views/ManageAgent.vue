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

        <b-container fluid style="height:100vh;margin-top:20px;border-top:10px;border-color:white;">
    <h3>Manage Staff</h3>

    <b-input-group placeholder style="margin-right:18px;margin-top:10px;margin-bottom:10px;width:655px;">
    <template #prepend>
      <b-input-group-text >Type To Search Table...</b-input-group-text>
    </template>
    <b-form-input></b-form-input>

  </b-input-group>


    <b-table :perPage="5" outlined hover :items="agents"  :fields="fields">
        <template #cell(profile_pic)="data">
        <b-img height="85" width="85" :src="data.value"></b-img>
      </template>
      <template #cell(action)="data">
        <b-button @click="showAgent(data.value)" variant="info" style="margin:2px;font-weight:bold;">{{data.value}}</b-button>
      </template>
    </b-table>


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

    <b-modal v-if="updateAgent != null" ref="update" hide-footer title="Update Agent Profile">
        <b-row no-gutters>
            <b-col cols="4">
<b-img center fluid thumbnail style="border-color:#ff8c00;border-width:4px;" rounded="circle" :src="updateAgent.photo" width="95" height="95" alt="Center image"></b-img>
            </b-col>

            <b-col cols="8">
                 <b-form-group
                    label="Update Agent's Photo: Size MUST Be 64*64"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
            <b-form-file
                
                placeholder="Update Photo...."
                accept="image/jpegf"
                drop-placeholder="Drop Agent's Photo here..."
                ></b-form-file>
            </b-form-group>

            </b-col>

        </b-row>
      <b-form-group
                    label="Enter Agent's Full Names:"
                    
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-input title="Enter Agent's Full Names"  v-model="updateAgent.fullnames" placeholder="Enter Agent's Mobile"></b-form-input>
               </b-form-group>
      <b-form-group
                    label="Enter Agent's Mobile:"
                    
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-input title="Enter Agent's Mobile" v-model="updateAgent.mobile"   placeholder="Enter Agent's Mobile"></b-form-input>
               </b-form-group>
      <b-form-group
                    label="Enter Agent's Email:"
                    
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-input title="Enter Agent's Email" v-model="updateAgent.email"   placeholder="Enter Agent's Mobile"></b-form-input>
               </b-form-group>
      <b-form-group
                    label="Enter Agent's KRA:"
                    
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-input title="Enter Agent's KRA" v-model="updateAgent.kra"  placeholder="Enter Agent's Mobile"></b-form-input>
               </b-form-group>
      <b-form-group
                    label="Enter Agent's National ID:"
                    
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-input title="Enter Agent's National ID" v-model="updateAgent.national_id"  placeholder="Enter Agent's Mobile"></b-form-input>
               </b-form-group>
      <b-button class="mt-3" variant="success" block >Update Agent Profile</b-button>
      <b-button class="mt-2" variant="danger" block>Delete Agent</b-button>
    </b-modal>




    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            agents: [],
        fields: [
          {
            key: 'profile_pic',
            sortable: false
          },
          {
            key: 'fullnames',
            sortable: true
          },
          {
            key: 'email',
            sortable: false
          },
          {
            key: 'mobile',
            sortable: false
          },
          {
            key: 'national_id',
            sortable: false
          },
          {
            key: 'action',
            sortable: false
          },


        ],
        updateAgent:null
        }
    },
    mounted(){
      axios.get('http://localhost:5001/homesforexpats-55b57/us-central1/getAgents').then( res => {


            if(res.data != null){

                res.data.forEach(element => {
                        console.log(element)

                        this.agents.push(element)
                    });

                    console.log(this.agents);

            }
                        
                        
        });
    },
    methods:{
        goSideBar(route){

            this.$router.push({name:route})

        },
        showAgent(item){

          console.log(item)
            // this.updateAgent = item

            // this.$refs['update'].show()
        }
        
    }
}
</script>

<style scoped>

</style>