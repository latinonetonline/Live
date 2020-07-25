import Vue from 'vue';
import Main from './components/Main.vue';
import { rtdbPlugin } from 'vuefire'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VModal from 'vue-js-modal'
library.add(faHome)

Vue.use(VModal, { dialog: true })
Vue.use(rtdbPlugin)

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue(
    {
        render: (createEl) => createEl(Main)
    }
).$mount('#app');