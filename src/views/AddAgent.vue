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
    <h3>Add New Agent</h3>

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
                <b-form-input title="Enter Agent's Full Names"  v-model="text" placeholder="Enter Agent's Names"></b-form-input>
               </b-form-group>
                <b-form-group
                    label="Enter Agent's Mobile:"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-input title="Enter Agent's Mobile"  v-model="text" placeholder="Enter Agent's Mobile"></b-form-input>
               </b-form-group>
                <b-form-group
                    label="Enter Agent's Email:"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-input title="Enter Agent's Email"  v-model="text" placeholder="Enter Agent's Email"></b-form-input>
               </b-form-group>

               <b-form-group
                    label="Upload Agent's Photo: Size MUST Be 64*64"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
            <b-form-file
                v-model="agent.photo"
                placeholder="Select Agent's Photo To Upload...."
                accept="image/jpegf"
                drop-placeholder="Drop Agent's Photo here..."
                ></b-form-file>
            </b-form-group>
                
           </div>

        </b-col>

        <b-col cols="6">

            <b-form-group
                    label="Upload Agent's National ID and KRA Certificate:"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
            <b-form-file
            multiple
                v-model="agent.photo"
                placeholder="Select Agent's Documents To Upload...."
                accept="image/jpeg,application/pdf"
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
                <b-form-input title="Enter Agent's National ID number"  v-model="text" placeholder="Enter Agent's National ID number"></b-form-input>
               </b-form-group>

            <b-form-group
                    label="Enter Agent's KRA Pin:"
                    label-for="input-1"
                    style="text-align:left;font-weight:bolder;"
                    valid-feedback="Thank you!"
                    invalid-feedback="invalid input"
                    >
                <b-form-input title="Enter Agent's KRA Pin"  v-model="text" placeholder="Enter Agent's KRA Pin"></b-form-input>
               </b-form-group>

               <b-alert show variant="danger" style="padding:12px;">
                    <strong>Be Aware That Agent's Can Only Be Added After Business Director's Approval!</strong>
                </b-alert>

               <b-button block style="background-color:orange;font-weight:bolder;">Add New Agent</b-button>

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
export default {
    data(){
        return{
            agent:{
                photo:null,
                fullnames:'',
                email:'',
                mobile:'',
                kra:''
            }
        }
    }
    
}
</script>

<style scoped>

</style>