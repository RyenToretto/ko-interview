import { createApp } from 'vue'
import 'element-plus/theme-chalk/dark/css-vars.css'
import App from './App.vue'
import router from './router'
import './styles/global.css'
import './styles/skins.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
