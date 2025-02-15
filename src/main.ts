import { createApp } from 'vue'
import './assets/css/styles.css'
import App from './App.vue'
// import de FontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";

library.add(faRocket);



createApp(App).mount('#app')
App.component("font-awesome-icon", FontAwesomeIcon);