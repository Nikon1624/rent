import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import app from '@/store/modules/app';
import vehicles from '@/store/modules/vehicles';

export default new Vuex.Store({
    modules: {
        app,
        vehicles
    }
});