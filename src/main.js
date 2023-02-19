import { createApp } from 'vue'
// import { auth } from './firebase'
import App from './App.vue'

import PrimeVue from 'primevue/config';
import Panel from 'primevue/panel';
// import Button from 'primevue/button';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);
app.use(PrimeVue);
// app.component('Button', Button);
app.component('Panel', Panel);
app.mount('#app');

