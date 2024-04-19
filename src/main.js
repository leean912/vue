import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

createApp.config.errorHandler = (err, instance, info) => {
    // report error to tracking services
    console.log("Error: " + err + " | Instance: " + instance + " | Info: " + info)
}