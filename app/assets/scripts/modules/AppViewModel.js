/* WTF not working? import ko from 'knockout'; */
import ko from 'knockout';

var Location = function(data) {
    this.title = ko.observable(data.title);
    this.location = ko.observable(data.location);

    this.visible = ko.observable(true);
}

var AppViewModel = function() {
    var self = this;

    this.searchTerm = ko.observable("");

    this.locationList = ko.observableArray([]);

    locations.forEach(function(locationItem) {
        self.locationList.push(new Location(locationItem));
    });

    this.currentLocation = ko.observable(this.locationList()[0]);


}


/*
AppViewModel.filteredList = ko.computed( function() {

    console.log(locationList.title);
    var filter = self.searchTerm().toLowerCase();
    if (!filter) {
        self.locationList().forEach(function(locationItem){
        locationItem.visible(true);

      });
      return self.locationList();
    } else {
      return ko.utils.arrayFilter(self.locationList(), function(locationItem) {

        var string = locationItem.title.toLowerCase();
        var result = (string.search(filter) >= 0);
        locationItem.visible(result);
        return result;
      });
    }
  }, self);
*/

function startApp() {

ko.applyBindings(new AppViewModel());
}


