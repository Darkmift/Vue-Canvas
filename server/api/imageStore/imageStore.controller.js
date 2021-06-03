const imageStoreService = require('./imageStore.service');
const Logger = require('../../services/logger.service');
const { db } = require('../../services/jsonDb.service.js');

function addImage(req, res, next) {
    try {
        const { image } = req.body;
        console.log(
            '🚀 ~ file: imageStore.controller.js ~ line 8 ~ addImage ~ image',
            image
        );
        Logger.debug({ image });
        db.get('images').push(image);
        db.save();
        // const {
        //     state: { images },
        // } = store.get();
        res.status(201).send('image stored');
    } catch (error) {
        next(error);
    }
}

function getAll(req, res, next) {
    try {
        const {
            state: { images },
        } = store.get();
        res.send(images);
    } catch (error) {
        next(error);
    }
}

async function wipeAllImages(req, res, next) {
    try {
        db.set('images', []).save();
        res.status(200).end();
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addImage,
    wipeAllImages,
    getAll,
};
