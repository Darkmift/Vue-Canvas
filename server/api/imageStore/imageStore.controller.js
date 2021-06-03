const imageStoreService = require('./imageStore.service');
const Logger = require('../../services/logger.service');
const { db } = require('../../services/jsonDb.service.js');
async function addImage(req, res, next) {
    try {
        const store = db;
        Logger.debug(req.body);
        const { image } = req.body;
        store.get('images').push(image);
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
        // const { filters } = req.query;
        // if (!filters) {
        //     throw new CustomError(400, 'Filters invalid');
        // }
        // const imageStores = await imageStoreService.list(filters);
        // res.send(imageStores);
        res.send('mkay');
    } catch (error) {
        next(error);
    }
}

module.exports = {
    addImage,
    wipeAllImages,
};
