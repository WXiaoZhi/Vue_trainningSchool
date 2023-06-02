import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "./axios";
import urls from './axios/urls.js'
import SlideVerify from 'vue-monoplasty-slide-verify';
import vueMiniPlayer from 'vue-mini-player'
import 'vue-mini-player/lib/vue-mini-player.css'

Vue.use(vueMiniPlayer)
Vue.use(SlideVerify);
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$urls = urls
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
