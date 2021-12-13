import VClickOutside from 'click-outside-vue3';
import VFocus from '@/directives/VFocus';

export default [
  { name: 'click-outside', directive: VClickOutside.directive },
  { name: VFocus.name, directive: VFocus },
];
