import Vue from 'vue'
import Prism from 'vue-prism-component'
import VuePrismEditor from 'vue-prism-editor'
import 'prismjs'
import 'prismjs/themes/prism.css'

import 'vue-prism-editor/dist/VuePrismEditor.css'

Vue.use(Prism)
Vue.component('prism', Prism)
Vue.component('prism-editor', VuePrismEditor)
