angular.module('allChampions', []);

 app.controller('allController', function($http){

    this.message="hello from the main controller";

    this.champion_data=[];

    $http({
        method: 'GET',
        url: 'http://ddragon.leagueoflegends.com/cdn/7.12.1/data/en_US/champion.json',
    }).then(function(response){
        console.log(response);
        console.log(response.data.data);
        this.champion_data = response.data.data
        console.log(this.champion_data);
    }.bind(this))

});


// =========================================
// STILL WORKING OUT HOW TO GET TIMER TO RUN
// =========================================
//   var defaults = {}
//   , one_second = 1000
//   , one_minute = one_second * 60
//   , one_hour = one_minute * 60
//   , one_day = one_hour * 24
//   , startDate = new Date()
//   , face = document.getElementById('lazy');
//
// // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// var requestAnimationFrame = (function() {
//   return window.requestAnimationFrame       ||
//          window.webkitRequestAnimationFrame ||
//          window.mozRequestAnimationFrame    ||
//          window.oRequestAnimationFrame      ||
//          window.msRequestAnimationFrame     ||
//          function( callback ){
//            window.setTimeout(callback, 1000 / 60);
//          };
// }());
//
// tick();
//
// function tick() {
//
//   var now = new Date()
//     , elapsed = now - startDate
//     , parts = [];
//
//   parts[0] = '' + Math.floor( elapsed / one_hour );
//   parts[1] = '' + Math.floor( (elapsed % one_hour) / one_minute );
//   parts[2] = '' + Math.floor( ( (elapsed % one_hour) % one_minute ) / one_second );
//
//   parts[0] = (parts[0].length == 1) ? '0' + parts[0] : parts[0];
//   parts[1] = (parts[1].length == 1) ? '0' + parts[1] : parts[1];
//   parts[2] = (parts[2].length == 1) ? '0' + parts[2] : parts[2];
//
//   face.innerText = parts.join(':');
//
//   requestAnimationFrame(tick);
//
// }
