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
import { faUser, faMapMarkerAlt, faCode, faLaptopCode, faLightbulb, faExternalLinkAlt,  } from '@fortawesome/free-solid-svg-icons'

// brandsの中で何を使うかをキャメルケースで記載
// use footer components
import { faTwitterSquare, faGithub, } from "@fortawesome/free-brands-svg-icons"
// use profile & skills components
import { faHtml5, faCss3, faJs, faVuejs, faPhp, faBootstrap, faSass, } from '@fortawesome/free-brands-svg-icons'
// use top & profile components
import { faWordpress, } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { component } from 'vue/types/umd'

// 上記で記載したアイコン名をLibraryに追加
// solid, brands関係なしでOK。
library.add(faAddressCard, faTwitterSquare, faFileCode, faUser, faLightbulb, faExternalLinkAlt, 
  faCheckCircle, faMapMarkerAlt, faDesktop, faCode, faLaptopCode, faWordpress,
  faHtml5, faCss3, faJs, faVuejs, faPhp, faGithub, faBootstrap,faArrowUp,faSass
  )

Vue.component('font-awesome-icon', FontAwesomeIcon)

// global
Vue.component('header-nav', {
  template: '<p>{{ message }}</p>',
  data: function() {
    return {
      message: 'test',
      selectBtn: {
        color: 'red',
        backgroundColor: 'green,'
      }
    }
  },
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