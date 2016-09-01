var mongoose = require('mongoose');
var Armor = mongoose.model('Armor');

exports.findAllArmor = function(req, res) {
    Armor.find(function(err, armorList) {
        if (err) res.send(500, err.message);
        res.status(200).jsonp(armorList);
    });
};

exports.findById = function(req, res) {
    Armor.findById(req.params.id, function(err, response) {
        if (err) return res.send(500, err.message);
        res.status(200).jsonp(response);
    });
};

exports.addArmor = function(req, res) {
    var armor = new Armor({
        name: req.body.name,
        type: req.body.type,
        armorClass: req.body.armorClass,
        weight: req.body.weight,
        special: req.body.special
    });

    armor.save(function(err, response) {
        if (err) return res.send(500, err.message);
        res.status(200).jsonp(response);
    });
};

exports.updateArmor = function(req, res) {
    Armor.findById(req.params.id, function(err, armor) {

        armor.name = req.body.name;
        armor.type = req.body.type;
        armor.armorClass = req.body.armorClass;
        armor.weight = req.body.weight;
        armor.special = req.body.special;

        armor.save(function(err, response) {
            if (err) return res.send(500, err.message);
            res.status(200).jsonp(response);
        });
    });
};

exports.deleteArmor = function(req, res) {
    Armor.findById(req.params.id, function(err, armor) {
        armor.remove(function(err) {
            if (err) return res.send(500, err.message);
            res.status(200);
        });
    });
};
