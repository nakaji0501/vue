// import Vue from 'vue'
import Vue from 'vue/dist/vue.esm.js'
import App from './App'
import router from './router'
import vuetify from './plugins/vuetify'

// Vue.component('font-awesome-icon', FontAwesomeIcon)
import { library } from '@fortawesome/fontawesome-svg-core'

// solidの中で何を使うかをキャメルケースで記載
// use footer  components
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
// use header components
import { faAddressCard, faFileCode, faDesktop, faEnvelope } from '@fortawesome/free-solid-svg-icons'
// use top components
import { faUser, faMapMarkerAlt, faRunning, faCode, faLaptopCode, faLightbulb, faExternalLinkAlt,  } from '@fortawesome/free-solid-svg-icons'

// brandsの中で何を使うかをキャメルケースで記載
// use footer components
import { faTwitterSquare, faGithub, } from "@fortawesome/free-brands-svg-icons"
// use profile & skills components
import { faHtml5, faCss3, faJs, faVuejs, faPhp, faBootstrap, faSass, } from '@fortawesome/free-brands-svg-icons'
// use top & profile components
import { faWordpress, } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// 上記で記載したアイコン名をLibraryに追加
// solid, brands関係なしでOK。
library.add(faAddressCard, faTwitterSquare, faFileCode, faUser, faLightbulb, faExternalLinkAlt, faEnvelope,
  faRunning, faDesktop, faCode, faLaptopCode, faWordpress, faMapMarkerAlt,
  faHtml5, faCss3, faJs, faVuejs, faPhp, faGithub, faBootstrap,faArrowUp,faSass
  )

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,

  components: {
    App,
  },

  template: '<App/>'
})