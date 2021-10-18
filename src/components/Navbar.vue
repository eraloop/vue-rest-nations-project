<template>
    <v-app-bar fixed  max-width="100%" tile width="100%" class="mb-16 px-16 ">
        <v-app-bar-title  class="pl-4">Where in the world</v-app-bar-title>
        <v-spacer></v-spacer>
        <v-btn 
            elevation='0' 
            class="pr-4" 
            @click="UpdateMode"
            btn-lg
        > 
            <span  v-if="mode" class="justify-center align-center">
                <span ><v-img src='../static/darkmode-dark.svg' height="17px" width="17px"></v-img></span>
                <span >Dark mode</span>
            </span>

            <span v-else>
                <v-img src="../static/darkmode-light.svg" height="17px" width="17px"></v-img>
                <span >Light mode</span>
            </span>
            </v-btn>
    </v-app-bar>
</template>
<script>
   export default{

       components:{
            
       },
       data(){
           return{
                mode: true,  
              }
       },
       computed:{
           
        },
       methods:{
           UpdateMode(){
               
               if(!this.mode){
                   this.mode = true
                   this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
               }
               else{
                   this.mode = false
                   this.$vuetify.theme.dark = !this.$vuetify.theme.dark;    
               }  
           }
           
       },
       mounted: function(){
            
       }
    }
</script>
<style scoped> 
   *{
        padding: 0;
        margin: 0;
        box-sizing:border-box;
    }
</style>