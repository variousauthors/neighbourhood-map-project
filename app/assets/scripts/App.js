
import $ from 'jquery';
import ko from 'knockout';

import { map, markers, initMap } from'./modules/Map';
//import'./modules/Test';
//import'./modules/AppViewModel';


var js_file = document.createElement('script');
js_file.type = 'text/javascript';
js_file.callback = initMap();
js_file.src = 'https://maps.googleapis.com/maps/api/js?libraries=geometry&key=AIzaSyA56O00SWz5jCIbOA4AHsa9Ei5_ObpQlV8&v=3&callback='+ js_file.callback;
document.getElementsByTagName('head')[0].appendChild(js_file);

/*
$(function() {

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

    //app.initMap();

});
*/


