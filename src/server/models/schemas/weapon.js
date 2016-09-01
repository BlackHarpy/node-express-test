var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var weaponSchema = new Schema({
  name: String,
  type: String,
  damage: String,
  speed: Number,
  weight: Number,
  THAC0Modifier: Number,
  special: String
});

module.exports = mongoose.model('Weapon', weaponSchema);
