import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import DownLoadView from '../views/DownLoadView.vue'
import PerInfoView from '../views/PerInfoView.vue'
import ForgotView from '../views/ForgotView.vue'
import SchoolInfoView from "@/views/SchoolInfoView.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView

    },
    {
        path: '/download',
        name: 'download',
        component: DownLoadView

    },
	{
	    path: '/perInfo',
	    name: 'perInfo',
	    component: PerInfoView
	
	},
    {
        path: '/forgot',
        name: 'forgot',
        component: ForgotView

    },
    {
        path: '/schoolInfo',
        name: 'schoolInfo',
        component: SchoolInfoView

    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    var user = localStorage.getItem("userinfo")
if (to.path != "/login" && (user == null || user == "")) {
    next("/login")
}
next()
})
export default router
