import Vue from 'vue'
import Router from 'vue-router'
//import dnfPath from './path.dnf'
import commonPath from './path.common';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes : commonPath
});
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })

export default router;
