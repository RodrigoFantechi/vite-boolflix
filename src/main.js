import { createApp } from 'vue'
import './assets/scss/style.scss'
import App from './App.vue'
import * as bootstrap from 'bootstrap'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
library.add(faStar)
createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
