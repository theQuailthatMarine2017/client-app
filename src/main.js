import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import VueTelInput from 'vue-tel-input'
import 'vue-tel-input/dist/vue-tel-input.css'
import VuePwaInstallPlugin from "vue-pwa-install";
import VModal from 'vue-js-modal'
import VueSimpleAlert from "vue-simple-alert";
import VueGeolocation from 'vue-browser-geolocation';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import dotenv from 'dotenv'
import moment from 'vue-moment'
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts);
import { SimpleTimelinePlugin } from 'simple-vue-timeline';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)


Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(SimpleTimelinePlugin);


Vue.component('apexchart', VueApexCharts);
dotenv.config();
 
Vue.use(VueSimpleAlert);
Vue.use(moment)
Vue.use(VueGeolocation);

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
Vue.use(VuePwaInstallPlugin);
Vue.use(VueTelInput);
Vue.use(Loading);
Vue.use(VModal)
// Optionally install the BootstrapVue icon components plugin
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
