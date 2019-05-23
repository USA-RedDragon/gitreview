import Vue from 'vue'
import './plugins/vuetify'
import router from './router'

// require('./components/bootstrap')

Vue.config.productionTip = false

import App from './App.vue'
new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app')
