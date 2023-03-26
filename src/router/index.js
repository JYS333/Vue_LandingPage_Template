import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// import router
import Home from '@/pages/Home/Home';
import Detail from '@/pages/Detail/Detail.vue';

// push
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

//replace
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(to) {
    return VueRouterReplace.call(this, to).catch(err => err)
}

export default new VueRouter({
    mode: 'history', // erase '#' in url
    routes: [
        {
            name: 'home',
            path: '/home',
            component: Home,
            // meta:{
            //     // 自定义属性只支持在meta中扩展，每个route对象的属性是固定的
            //     show:true, // meta is used to customize a route's display
            // }
        },
        {
            name: 'detail',
            path: '/detail',
            component: Detail,
            //     meta:{
            //         show:false
            //     }
        },
        {
            path: '*',
            redirect: '/home'
        }
    ]
})