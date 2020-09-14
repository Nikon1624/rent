export default {
    namespaced: true,
    state: {
        activeTheme: 'day'
    },
    getters: {
        activeTheme(state) {
            return state.activeTheme;
        }
    },
    mutations: {
        switchActiveTheme(state) {
            state.activeTheme = state.activeTheme === 'day' ? 'night' : 'day';
        }
    }
};