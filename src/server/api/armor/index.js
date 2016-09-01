var express = require('express');
var router = express.Router();
var armorCtrl = require('./armor.controller.js')

router.get('/',armorCtrl.findAllArmor);
router.get('/:id',armorCtrl.findById);
router.post('/',armorCtrl.addArmor);
router.put('/:id',armorCtrl.updateArmor);
router.delete('/:id',armorCtrl.deleteArmor);

module.exports = router;
