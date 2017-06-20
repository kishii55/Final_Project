angular.module('champion.factories', [])
.factory('getChampions', ['$http', function($http) {
  var getChampions = function(callback) {
    $http.get('/champions').then(function(res) {
      callback(res.data);
    });
  };
  return getChampions;
}])
.factory('addChampion', ['$http', function($http) {
  var addChampion = function(newChamp, callback) {
    $http.post('/champions', newChamp).then(function() {
      callback();
    });
  };
  return addChampion;
}])
.factory('addNote', ['$http', function($http) {
  var addNote = function(id, note, callback) {
    var newNote = {
      id: id,
      note: note
    };
    $http.post('/addnote', newNote).then(function(res) {
      callback(res);
    });
  };
  return addNote;
}])
.factory('deleteChampion', ['$http', function($http) {
  var deleteChampion = function(id, callback) {
    $http.delete('/deletechampion/' + id).then(function(res) {
      callback(res);
    });
  };
  return deleteChampion;
}])
.factory('deleteNote', ['$http', function($http) {
  var deleteNote = function(id, note, callback) {
    var noteToDelete = {
      id: id,
      note: note
    };

    const options = {
      data: noteToDelete,
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      }
    };

    $http.delete('/deletenote', options).then(function(res) {
      callback(res);
    });
  };
  return deleteNote;
}]);
