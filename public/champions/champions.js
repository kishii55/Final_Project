var names = ['Aatrox','Ahri','Akali','Alistar','Amumu','Anivia','Annie','Ashe','AurelionSol','Azir','Bard','Blitzcrank','Brand','Braum','Caitlyn','Camille','Cassiopeia','Chogath','Corki','Darius','Diana','DrMundo','Draven','Ekko','Elise','Evelynn','Ezreal','FiddleSticks','Fiora','Fizz','Galio','Gangplank','Garen','Gnar','Gragas','Graves','Hecarim','Heimerdinger','Illaoi','Irelia','Ivern','Janna','JarvanIV','Jax','Jayce','Jhin','Jinx','Kalista','Karma','Karthus','Kassadin','Katarina','Kayle','Kennen','Khazix','Kindred','Kled','KogMaw','LeBlanc','LeeSin','Leona','Lissandra','Lucian','Lulu','Lux','Malphite','Malzahar','Maokai','MasterYi','MissFortune','Mordekaiser','Morgana','Nami','Nasus','Nautilus','Nidalee','Nocturne','Nunu','Olaf','Orianna','Pantheon','Poppy','Quinn','Rammus','RekSai','Renekton','Rengar','Riven','Rumble','Ryze','Sejuani','Shaco','Shen','Shyvana','Singed','Sion','Sivir','Skarner','Sona','Soraka','Swain','Syndra','TahmKench','Taliyah','Talon','Taric','Teemo','Thresh','Tristana','Trundle','Tryndamere','TwistedFate','Twitch','Udyr','Urgot','Varus','Vayne','Veigar','VelKoz','Vi','Viktor','Vladimir','Volibear','Warwick','MonkeyKing','Xerath','XinZhao','Yasuo','Yorick','Zac','Zed','Ziggs','Zilean','Zyra'];

angular.module('champions', ['champion.factories'])
.controller('ChampionsController', ['$scope', 'getChampions', 'addChampion', 'addNote', 'deleteNote', 'deleteChampion', function($scope, getChampions, addChampion, addNote, deleteNote, deleteChampion) {
  $scope.champions = [];
  $scope.names = names;
  $scope.championName = '';
  $scope.championTitle = '';
  $scope.note = '';

  $scope.getChampions = function() {
    getChampions(function(data) {
      $scope.champions = data;
    });
  };

  $scope.addChampion = function(name, title) {
    var newChamp = {
      name: name,
      title: title
    };
    addChampion(newChamp, function() {
      $scope.getChampions();
      $scope.championName = '';
      $scope.championTitle = '';
    });
  };

  $scope.addNote = function(id, note) {
    addNote(id, note, function() {
      $scope.note = '';
      $scope.getChampions();
    });
  };

  $scope.deleteChampion = function(id) {
    deleteChampion(id, function() {
      $scope.getChampions();
    });
  };

  $scope.deleteNote = function(id, note) {
    deleteNote(id, note, function() {
      $scope.getChampions();
    });
  };

  // unused
  $scope.logChamps = function() {
    console.log($scope.names);
  };

  // Initialize champions
  $scope.getChampions();
}]);