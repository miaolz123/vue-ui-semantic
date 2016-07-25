import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import Home from './Home';
import Button from './elements/Button';
import Ui from '../../dist/vue-ui-semantic.common';

Vue.use(VueRouter);
Vue.use(Ui);

const router = new VueRouter();

router.map({
  '/': {
    component: Home,
  },
  '/elements/button': {
    component: Button,
  },
});
router.start(App, 'body');
