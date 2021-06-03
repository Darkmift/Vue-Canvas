var { Router } = require('express');
var router = Router();

router.get('/', (req, res) => {
    res.send('api working');
});

const imageStoreRoutes = require('./api/imageStore/imageStore.routes');
router.use('/imageStore', imageStoreRoutes);

module.exports = router;
