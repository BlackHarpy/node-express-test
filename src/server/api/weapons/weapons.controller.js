var mongoose = require('mongoose');
var Weapon = mongoose.model('Weapon');

exports.findAllWeapons = function(req, res) {
    Weapon.find(function(err, weaponsList) {
        if (err) res.send(500, err.message);
        res.status(200).jsonp(weaponsList);
    });
};

exports.findById = function(req, res) {
    Weapon.findById(req.params.id, function(err, response) {
        if (err) return res.send(500, err.message);
        res.status(200).jsonp(response);
    });
};

exports.addWeapon = function(req, res) {
    var weapon = new Weapon({
        name: req.body.name,
        type: req.body.type,
        damage: req.body.damage,
        speed: req.body.speed,
        weight: req.body.weight,
        THAC0Modifier: req.body.THAC0Modifier,
        special: req.body.special
    });

    weapon.save(function(err, response) {
        if (err) return res.send(500, err.message);
        res.status(200).jsonp(response);
    });
};

exports.updateWeapon = function(req, res) {
    TVShow.findById(req.params.id, function(err, weapon) {

        weapon.name = req.body.name;
        weapon.type = req.body.type;
        weapon.damage = req.body.damage;
        weapon.speed = req.body.speed;
        weapon.weight = req.body.weight;
        weapon.THAC0Modifier = req.body.THAC0Modifier;
        weapon.special = req.body.special;

        weapon.save(function(err, response) {
            if (err) return res.send(500, err.message);
            res.status(200).jsonp(response);
        });
    });
};

exports.deleteWeapon = function(req, res) {
    Weapon.findById(req.params.id, function(err, weapon) {
        weapon.remove(function(err) {
            if (err) return res.send(500, err.message);
            res.status(200);
        });
    });
};
