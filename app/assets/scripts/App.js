var app = app || {};


import $ from 'jquery';
import ko from 'knockout';

//import'./modules/Map';
//import'./modules/Test';
//import'./modules/AppViewModel';


$(function() {

    var map;

    app.initMap = function() {
      map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 40.7413549, lng: -73.998024},
            zoom: 13
       });

    };


    app.test = function() {
        console.log( "test successful" );
    };

    app.test();

    app.initMap();

});



