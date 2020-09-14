import {getVehicles} from '../../mock/request';

export default {
    namespaced: true,
    state: {
        vehicles: [],
        vehicleTypes: [],
        currentType: 'whatever'
    },
    getters: {
        vehicles(state) {
            if (state.currentType === 'whatever') {
                return state.vehicles;
            } else {
                return state.vehicles.filter((vehicle) => vehicle.type === state.currentType);
            }
        },
        vehicle: state => id => {
            if (state.vehicles) {
                return state.vehicles.find((vehicle) => vehicle.id === id);
            }

            return false;
        },
        vehicleTypes(state) {
            return state.vehicleTypes;
        }
    },
    mutations: {
        setVehicles(state, vehicles) {
            state.vehicles = vehicles;
        },
        setTypes(state, vehicles) {
            const types = vehicles.map((vehicle) => vehicle.type);
            const uniqTypes = [...new Set(types)];

            state.vehicleTypes = uniqTypes;
        },
        setCurrentType(state, type) {
            state.currentType = type;
        }
    },
    actions: {
        fetchVehicles({commit}) {
            const request = getVehicles();
            return request
                .then((data) => {
                    commit('setVehicles', data);
                    commit('setTypes', data);
                    return data;
                })
                .catch(() => {
                    commit('setVehicles', false);
                    return false;
                });
        }
    }
}