<template>
  <v-app>
      <router-view/>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'App',
  components:{
    
  },
  computed:{
  },
  methods:{
    ...mapGetters['getAppMode'], 
  },
};
</script>
<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans';
  }
</style>
