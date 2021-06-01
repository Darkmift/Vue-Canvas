import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        background: '#d9cbca',
        mouseCoords: { x: 0, y: 0 },
    },
    getters: {
        background({ background }) {
            return background;
        },
        mouseCoords({ mouseCoords }) {
            return mouseCoords;
        },
    },
    mutations: {
        setMouseCoords(state, { mouseCoords }) {
            state.mouseCoords = mouseCoords;
            console.log(
                '🚀 ~ file: index.js ~ line 22 ~ setMouseCoords ~   state.mouseCoords ',
                state.mouseCoords
            );
        },
    },
    actions: {},
    modules: {},
});
