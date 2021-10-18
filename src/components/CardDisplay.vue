<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col v-for="i in 12" :key="i" class="col-md-3">
                    <v-card class="mr-4 mb-4">
                        <v-card-title>{{i}}</v-card-title>
                        <v-card-text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis nemo, cum pariatur distinctio odio laudantium dignissimos nulla magnam beatae officia.
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>
<script>
   export default{
       props:{
          
       },
       components:{
            
       },
       data(){
           return{
               
              }
       },
       computed:{
           
        },
       methods:{
        //    ...mapGetters['getCountryInfo']
       },
       mounted: function(){
            // this.countries = this.getCountryInfo
            // console.log('info in the card display',this.countries)
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
