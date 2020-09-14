import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import store from '@/store/index';

import Rent from '@/components/rent/Rent';
import Vehicle from '@/components/vehicle_item/Vehicle';
import Specifications from '@/components/vehicle_item/Specifications';
import Team from '@/components/vehicle_item/Team';
import RentTerms from '@/components/vehicle_item/RentTerms';

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/vehicles',
            component: Rent
        },
        {
            path: '/vehicle/:id',
            component: Vehicle,
            children: [
                {
                    path: '',
                    component: Specifications
                },
                {
                    path: 'team',
                    component: Team
                },
                {
                    path: 'rent',
                    component: RentTerms
                }
            ],
            beforeEnter(to, from, next) {
                if (store.getters['vehicles/vehicles'].length === 0) {
                    store.dispatch('vehicles/fetchVehicles')
                        .then(() => next());
                } else {
                    next();
                }
            }
        },
        {
            path: '/',
            redirect: '/vehicles'
        }
    ]
});