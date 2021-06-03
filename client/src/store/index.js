import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        defaultBackground: '#d9cbca',
        background: '#d9cbca',
        mouseCoords: { x: 0, y: 0 },
        strokeStyle: '#000',
        lineWidth: 1,
        inputFile: null,
        //will toggle values onclick
        // triggers: { saveNew: false, wipeAll: false },
        triggerSave: false,
        images: [],
    },
    getters: {
        background({ background }) {
            return background;
        },
        defaultBackground({ defaultBackground }) {
            return defaultBackground;
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
        triggerSave({ triggerSave }) {
            return triggerSave;
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
        saveImage(state, { image }) {
            state.images.unshift(image);
        },
        triggerSave(state) {
            state.triggerSave = !state.triggerSave;
        },
        deleteAllImages(state) {
            state.triggerSave = !state.triggerSave;
            state.images = [];
        },
    },
    actions: {
        async saveImage({ state, commit }, { image }) {
            try {
                //do server thingies
                commit({ type: 'saveImage', image });
                state.background = state.defaultBackground;
            } catch (error) {
                console.error(error);
            }
        },
        async wipeAll({ commit }) {
            try {
                //wait for server delete then...
                commit({ type: 'deleteAllImages' });
            } catch (error) {
                console.error(error);
            }
        },
    },
});
