/* WTF not working? import ko from 'knockout'; */
import ko from 'knockout';

var Location = function(data) {
    this.title = ko.observable(data.title);
    this.location = ko.observable(data.location);

    this.visible = ko.observable(true);
}

var Marker = function() {
    this.visble = ko.observable(true);
}

var AppViewModel = function() {
    var self = this;

    this.searchTerm = ko.observable("");

    this.locationList = ko.observableArray([]);

    this.markerList = ko.observableArray([]);

    locations.forEach(function(locationItem) {
        self.locationList.push(new Location(locationItem));
    });

    this.currentLocation = ko.observable(this.locationList()[0]);


}

var vm = new AppViewModel();

AppViewModel.prototype.filteredItems = ko.computed( function() {
    var self = this;

    //console.log(self.locationList.title);
    var filter = self.searchTerm().toLowerCase();
    if (!filter) {
        self.locationList().forEach(function(locationItem){
        locationItem.visible(true);
        });

      return self.locationList();
    } else {
        for (var i = 0; i < self.locationList().length; i++) {
            var currentMarker = markers[i].title.toLowerCase();

            if (currentMarker.includes(filter)) {
                markers[i].setVisible(true);
            } else {
                markers[i].setVisible(false);
            }
        }


      return ko.utils.arrayFilter(self.locationList(), function(locationItem) {

        var string = locationItem.title().toLowerCase();
        var result = (string.search(filter) >= 0);
        locationItem.visible(result)

        return result;
      });
    }
  }, vm);

ko.applyBindings(vm);
