import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faEllipsisV, faPencilAlt, faTrash, faPlus, faAddressCard,
} from '@fortawesome/free-solid-svg-icons';
import App from './App.vue';
import components from '@/components/UI';
import directives from '@/directives';
import router from './router';
import store from './store';

library.add(faEllipsisV, faPencilAlt, faTrash, faPlus, faAddressCard);

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive.directive);
});

app
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount('#app');
