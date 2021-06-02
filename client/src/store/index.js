import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        background: '#d9cbca',
        mouseCoords: { x: 0, y: 0 },
        strokeStyle: '#000',
        lineWidth: 1,
        inputFile: null,
    },
    getters: {
        background({ background }) {
            return background;
        },
        mouseCoords({ mouseCoords }) {
            return mouseCoords;
        },
        strokeStyle({ strokeStyle }) {
            return strokeStyle;
        },
        lineWidth({ lineWidth }) {
            return lineWidth;
        },
        inputFile({ inputFile }) {
            return inputFile;
        },
    },
    mutations: {
        setBackground(state, { background }) {
            state.background = background;
        },
        setMouseCoords(state, { mouseCoords }) {
            state.mouseCoords = mouseCoords;
        },
        setStrokeStyle(state, { strokeStyle }) {
            state.strokeStyle = strokeStyle;
        },
        setLineWidth(state, { lineWidth }) {
            state.lineWidth = lineWidth;
        },
        setInputFile(state, { inputFile }) {
            state.inputFile = inputFile;
        },
    },
    actions: {},
});
