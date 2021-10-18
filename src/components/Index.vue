<template>
    <v-main >
        <Navbar/>
        <v-container>
            <SearchAndFilter/>
            <CardDisplay :countries="countries"/>
        </v-container>
    </v-main>
</template>
<script>
import Navbar from './Navbar.vue';
import SearchAndFilter from './SearchAndFilter.vue';
import CardDisplay from './CardDisplay.vue';
import {mapGetters } from 'vuex';
   export default{
       components:{
            CardDisplay,
            Navbar,
            SearchAndFilter
       },
       data(){
           return{
                countries:''
            }
       },
       computed:{
           
        },
        mounted: function(){
            if(this.countries === ''){
                this.$store.dispatch('MakeFetch')
            }
            this.countries = this.$store.getters.getCountryInfo
            console.log('get info', this.$store.getters.getCountryInfo)
       },
       methods:{
           ...mapGetters['getCountryInfo']    
       },

    }
</script>

<style> 
  
</style>