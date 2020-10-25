// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import style from './assets/css/style.css'
import reset from './assets/css/reset.css'

// Vue.component('font-awesome-icon', FontAwesomeIcon)
import { library } from '@fortawesome/fontawesome-svg-core'

// solidの中で何を使うかをキャメルケースで記載
// use footer  components
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
// use header components
import { faAddressCard, faFileCode, faCheckCircle, faDesktop, } from '@fortawesome/free-solid-svg-icons'
// use top components
import { faUserCircle, faMapMarkerAlt, faCode, faLaptopCode, } from '@fortawesome/free-solid-svg-icons'

// brandsの中で何を使うかをキャメルケースで記載
import { faTwitterSquare, } from "@fortawesome/free-brands-svg-icons"
// use profile components
import { faHtml5, faCss3, faJs, faVuejs, faPhp, faGithub, faBootstrap,  } from '@fortawesome/free-brands-svg-icons'
// use top components
import { faWordpress, } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { component } from 'vue/types/umd'

// 上記で記載したアイコン名をLibraryに追加
// solid, brands関係なしでOK。
library.add(faAddressCard, faTwitterSquare, faFileCode, faUserCircle,
  faCheckCircle, faMapMarkerAlt, faDesktop, faCode, faLaptopCode, faWordpress,
  faHtml5, faCss3, faJs, faVuejs, faPhp, faGithub, faBootstrap,faArrowUp
  )

Vue.component('font-awesome-icon', FontAwesomeIcon)

// global
Vue.component('next-button', {
  template: '<p>nextButton</p>'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
  },
  template: '<App/>',
})