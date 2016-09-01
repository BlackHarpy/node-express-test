var express = require('express');
var router = express.Router();
var weaponsCtrl = require('./weapons.controller.js')

router.get('/',weaponsCtrl.findAllWeapons);
router.get('/:id',weaponsCtrl.findById);
router.post('/',weaponsCtrl.addWeapon);
router.put('/:id',weaponsCtrl.updateWeapon);
router.delete('/:id',weaponsCtrl.deleteWeapon);

module.exports = router;
