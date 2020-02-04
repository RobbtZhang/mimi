import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import VueCookie from 'vue-cookie'
import VueLzayLoad from 'vue-lazyload'
import store from './store'
// import env from './env'

const mock=false
if(mock){
  require('./mock/api')
}

axios.defaults.baseURL='/api'
axios.defaults.timeout=8000

// axios.defaults.baseURL=env.baseURL

axios.interceptors.response.use((response)=>{
  let res=response.data
  // let path=location.hash;
  if(res.status==0){
    return res.data
  }else if(res.status==10){
    return res
  }else{
    alert(res.msg)
    return Promise.reject(res)
  }
})

Vue.use(VueAxios,axios)
Vue.use(VueCookie)
Vue.use(VueLzayLoad,{
  loading:'/imgs/loading-svg/loading-cubes.svg'
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
