// VueX
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import home from './modules/home';
import detail from './modules/detail';

const store = new Vuex.Store({
    modules:{
        home,
        detail
    }
})
export default store;