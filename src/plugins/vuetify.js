import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
    theme: {  
        // dark: false 
        themes: {
            light: {
              primary: '#3f51b5',
              secondary: '#b0bec5',
              accent: '#8c9eff',
              error: '#b71c1c',
            },
            dark:{
                primary: '#fff',
            }
          },
    },
});
