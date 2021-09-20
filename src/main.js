import { createApp } from 'vue'
import App from './App.vue'
import  './assets/style/index.css'

import VueApexCharts from 'vue-apexcharts'
createApp(App).use(VueApexCharts)

createApp(App).component('apexchart', VueApexCharts)

createApp(App).mount('#app')
