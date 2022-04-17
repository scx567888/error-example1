import {createApp} from 'vue';
import App from './App.vue';


// spark-md5 can be correctly import in utils/index.js
import {ComponentInstaller} from "../_node_modules/my-lib/index.js";


// Uncaught SyntaxError: The requested module '/node_modules/spark-md5/spark-md5.js?v=0aa2830a' does not provide an export named 'default' (at index.js:1:8)
// import {ComponentInstaller} from "my-lib";

createApp(App)
    .use(ComponentInstaller)
    .mount('#app');