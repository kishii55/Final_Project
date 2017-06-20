var mongoose = require('mongoose');

var ChampionSchema = new mongoose.Schema({
  name: String,
  title: String,
  image: String,
  notes: [String]
});

module.exports = mongoose.model('Champion', ChampionSchema);
