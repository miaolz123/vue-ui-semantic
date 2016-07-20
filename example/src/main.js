import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Ui from '../../dist/vue-ui-semantic.common';

Vue.use(VueRouter);
Vue.use(Ui);

const Home = Vue.extend({});
const Foo = Vue.extend({
  template: '<p>This is foo!</p>',
});
const Bar = Vue.extend({
  template: '<p>This is bar!</p>',
});
const router = new VueRouter();

router.map({
  '/home': {
    component: Home,
  },
  '/foo': {
    component: Foo,
  },
  '/bar': {
    component: Bar,
  },
});
router.start(App, 'body');

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App },
// });
