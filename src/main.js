import { createApp } from 'vue'
import App from './App.vue';

import TheNavbar from './components/UI/TheNavbar.vue';
import TheFooter from './components/UI/TheFooter.vue';
import BreadCrumb from './components/UI/BreadCrumb';

// tailwind
import './assets/tailwind.css'

import router from './router'

const app = createApp(App).use(router);

app.component('the-navbar', TheNavbar);
app.component('the-footer', TheFooter);
app.component('bread-crumb', BreadCrumb);

app.mount('#app')