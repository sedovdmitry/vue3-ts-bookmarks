import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';
import router from './router';
import store from './store';

library.add(faEllipsisV);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router)
  .mount('#app');
