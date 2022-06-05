import Vue from 'vue'
import VueRouter from 'vue-router'
import Pagos from './components/Pagos.vue'
import Tabla from './components/Tabla.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', redirect: '/pagos'},
        {path: '/pagos', component: Pagos},
        {path: '/tabla', component: Tabla},
    ]
})
