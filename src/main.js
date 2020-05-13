import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mavonEditor from 'mavon-editor'
import './plugin/element'
import 'mavon-editor/dist/css/index.css'
import showdown from 'showdown'

Vue.config.productionTip = false
Vue.use(mavonEditor)
Vue.prototype.md2html = (md) => {
  let converter = new showdown.Converter()
  let text = md.toString()
  let html = converter.makeHtml(text)
  return html
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
