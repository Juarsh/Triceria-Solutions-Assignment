const router = require('express').Router();

const { getGameStartController } = require('../controllers');

router.post('/start', getGameStartController);    

module.exports = router;
