import Vue from 'vue';
import ElementUI from 'element-ui';
import {router} from './router/index';
import store from './store';
import App from './app.vue';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);
new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App),
    mounted () {
        this.$store.commit('updateMenulist');
    }
});
