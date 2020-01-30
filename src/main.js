import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import env from './env'

axios.defaults.baseURL='/api'
axios.defaults.timeout=8000

axios.defaults.baseURL=env.baseURL

axios.interceptors.response.use((response)=>{
  let res=response.data
  if(res.status==0){
    return res.data
  }else if(res.status==10){
    window.location.href='/#/login'
  }else{
    alert(res.msg)
  }
})

Vue.use(VueAxios,axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
