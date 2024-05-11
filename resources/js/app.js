import './bootstrap'
import {createApp} from 'vue'
import App from '../App.vue'
// router
import router from './router.js'
// CSS
import '../css/tailwind.css'
import '../css/app.css'

createApp(App)
.use(router)
.mount("#app")