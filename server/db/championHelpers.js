const Champion = require('./championModel');

exports.getChampions = function(req, res) {
  Champion.find({}, function(err, champions) {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(champions);
    }
  });
};

exports.addChampion = function(req, res) {
  var champion = req.body;
  var newChampion = new Champion ({
    name: champion.name,
    title: champion.title,
    image: `https://ddragon.leagueoflegends.com/cdn/7.2.1/img/champion/${champion.name}.png`,
    notes: []
  });
  newChampion.save(function(err) {
    if (err) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  });
};

exports.addNoteToChampion = function(req, res) {
  var note = req.body;
  Champion.findOneAndUpdate({
    _id: note.id
  }, {
    $push: { notes: note.note }
  }, function(err) {
    if (err) {
      res.sendStatus(404);
    } else {
      Champion.findOne({ _id: note.id }, function(err, note) {
        if (err) {
          res.sendStatus(404);
        } else {
          res.status(200).send(note);
        }
      });
    }
  });
};

exports.deleteNoteFromChampion = function(req, res) {
  const note = req.body;

  Champion.findOneAndUpdate({
    _id: note.id
  }, {
    $pull: { notes: note.note }
  }, function(err) {
    if (err) {
      console.log(err);
    } else {
      Champion.findOne({ _id: note.id }, function(err, note) {
        if (err) {
          res.sendStatus(404);
        } else {
          res.status(200).send(note);
        }
      });
    }
  });
};

exports.deleteChampion = function(req, res) {
  const id = req.params.id;

  Champion.remove({ _id: id }, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Removed: ', id);
      res.sendStatus(200);
    }
  });
};
