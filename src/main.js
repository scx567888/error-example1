import {createApp} from 'vue';
import App from './App.vue';
import {ComponentInstaller} from "../_node_modules/ttttt/index.js";

createApp(App)
    .use(ComponentInstaller)
    .mount('#app');