var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var armorSchema = new Schema({
  name: String,
  type: String,
  armorClass: Number,
  weight: Number,
  special: String
});

module.exports = mongoose.model('Armor', armorSchema);
