import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
const app = createApp(App);



import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'                           //icons  

import "./assets/main.css";

app.use(PrimeVue);


app.use(createPinia());
app.use(router);

app.mount("#app");
