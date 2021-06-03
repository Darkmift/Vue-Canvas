const { Router } = require('express');
const router = Router();

const { addImage, wipeAllImages } = require('./imageStore.controller');

router.delete('/', wipeAllImages);
router.post('/', addImage);

module.exports = router;
