import { createApp } from 'vue'

import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'chart.js/dist/chart'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { registerSW } from 'virtual:pwa-register'

import App from './App.vue'
import router from './router'
import store from './store'
import { ObserveVisibility } from 'vue-observe-visibility'
import 'chart.js'

// Import Bootstrap an BootstrapVue CSS files (order is important)

createApp(App)
  .use(router)
  .use(store)
  .directive('observe-visibility', {
    beforeMount: (el, binding, vnode) => {
      vnode.context = binding.instance
      ObserveVisibility.bind(el, binding, vnode)
    },
    update: ObserveVisibility.update,
    unmounted: ObserveVisibility.unbind
  })
  .use(VueAxios, axios)
  .mount('#app')
registerSW()
