import Vue from 'vue';
import VueRouter from 'vue-router';

import next from '@/pages/next.vue';

Vue.use(VueRouter);

var router = new VueRouter({
  mode: 'history',
  routes: [
    
    {
      path: '/next',
      component: next
    }
  ]
});

export default router;