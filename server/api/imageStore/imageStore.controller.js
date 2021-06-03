const imageStoreService = require('./imageStore.service');
const Logger = require('../../services/logger.service');

async function addImage(req, res, next) {
    try {
        Logger.debug(req.body);
        // const { _id } = req.params;
        // if (!_id) {
        //     throw new CustomError(400, '_id required');
        // }
        // const imageStore = await imageStoreService.getById(_id);
        // res.send(imageStore);
        res.send('mkay');
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
