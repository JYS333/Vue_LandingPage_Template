import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// import router
import Home from '@/pages/Home/Home';
import CountDown from '@/pages/CountDown/CountDown.vue';
import Service from '@/pages/Service/Service.vue';
import Document from '@/pages/Document/Document.vue';
import Summary from '@/pages/Summary/Summary.vue';
import Category1 from '@/pages/Category/category1.vue';
import Category2 from '@/pages/Category/category2.vue';

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
    linkActiveClass: "is-active",
    routes: [
        {
            name: 'home',
            path: '/home',
            component: Home,
            // meta:{
            // 自定义属性只支持在meta中扩展，每个route对象的属性是固定的
            // show:true, // meta is used to customize a route's display
            // }
        },
        {
            name: 'service',
            path: '/service',
            component: Service,
        },
        {
            name: 'countDown',
            path: '/countdown',
            component: CountDown,
        },
        {
            name: 'summary',
            path: '/summary',
            component: Summary,
        },
        {
            name: 'category1',
            path: '/category1',
            component: Category1
        },
        {
            name: 'category2',
            path: '/category2',
            component: Category2
        },
        {
            name: 'document',
            path: '/document',
            component: Document,
        },
        {
            path: '*',
            redirect: '/home'
        }
    ]
})