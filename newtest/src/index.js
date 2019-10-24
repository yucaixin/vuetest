import Vue from 'vue'
import App from './app.vue'
import './assets/style/test.css'
import './assets/style/style.styl'
import './assets/style/global.styl'
import './assets/images/bg.jpg'
const root =document.createElement('div')
document.body.appendChild(root)
new Vue({
    render:(h)=>h(App)
}).$mount(root)