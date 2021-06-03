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
        //will toggle values onclick
        triggers: { saveNew: false, wipeAll: false },
        images: [],
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
        triggers({ triggers }) {
            return triggers;
        },
        images({ images }) {
            return images;
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
        setImages(state, { images }) {
            state.images = images;
        },
        toggleTrigger({ triggers }, { key }) {
            if (triggers.hasOwnProperty(key)) {
                triggers[key] = !triggers[key];
                return;
            }
            console.error(`${key} not in triggers`);
        },
    },
    actions: {
        async saveImage({ commit, state }, { image }) {
            try {
                //do server thingies
                commit({ type: 'setImages', images: [image, ...state.images] });
            } catch (error) {
                console.error(error);
            }
        },
        async wipeAll({ state }) {
            try {
                //wait for server delete then...
                state.images = [];
            } catch (error) {
                console.error(error);
            }
        },
    },
});
