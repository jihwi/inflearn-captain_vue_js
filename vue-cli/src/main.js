import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   el: '#app', 
//   components : {
//     'app' : App
//   }
// }) //위와 동일한 기능. el-> $mount에 대응, components ->render에 대응 
