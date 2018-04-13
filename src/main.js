import Vue from 'vue';
import ElementUI from 'element-ui';
import {router} from './router/index';
import store from './store';
import App from './app.vue';



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
