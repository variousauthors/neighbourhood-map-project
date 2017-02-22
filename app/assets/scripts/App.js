
import $ from 'jquery';
import ko from 'knockout';
// Activates knockout.js

//GOOGLE MAPS API

var locations = [
            {title: 'St-Viateur Bagel', location: {lat: 45.526075, lng: -73.6054533}},
            {title: 'Temps libre Mile-End', location: {lat:45.5283049, lng: -73.5980465}},
            {title: 'Théâtre Rialto', location: {lat:45.5236231, lng: -73.6069876 }},
            {title: 'Ubisoft Montreal', location: {lat:45.5258607, lng: -73.60076 }},
            {title: 'Marché Jean-Talon', location: {lat:45.5364641, lng:-73.6239877}},
];

// This is a simple *view model* - JavaScript that defines the data and behavior of your UI

var Location = function(data) {
    this.title = ko.observable(data.title);
    this.location = ko.observable(data.location);
}

var AppViewModel = function() {
    var self = this;

    this.locationList = ko.observableArray([]);

    locations.forEach(function(locItem) {
        self.locationList.push(new Location(locItem));
    });

    this.currentLocation = ko.observable(this.locationList()[0]);


}

/*var viewModel = function() {
  this.locationList = ko.observableArray([]);

  pointsOfInterest.forEach(function(locInfo) {
    self.poiList.push(new Poi(locInfo));
  });

  //The final list of elements displayed on the page
  this.masterList = ko.computed(function() {
     //Filter function for filtering poiList based on search value
  }
}
ko.applyBindings(new ViewModel());*/

ko.applyBindings(new AppViewModel());
