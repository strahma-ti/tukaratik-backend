const express = require('express');
const router = express.Router();
const wasteController = require('../controllers/wasteController');

router.get('/', wasteController.getAllWaste);
router.post('/', wasteController.addWaste);
router.put('/:id', wasteController.updateWaste);
router.delete('/:id', wasteController.deleteWaste);

module.exports = router;