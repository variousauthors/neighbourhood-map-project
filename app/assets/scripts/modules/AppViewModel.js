/* WTF not working? import ko from 'knockout'; */
import ko from 'knockout';

var Location = function(data) {
    this.title = ko.observable(data.title);
    this.location = ko.observable(data.location);
}

var AppViewModel = function() {
    var self = this;

    this.filter = ko.observable();

    this.locationList = ko.observableArray([]);

    locations.forEach(function(locItem) {
        self.locationList.push(new Location(locItem));
    });

    this.currentLocation = ko.observable(this.locationList()[0]);


}

AppViewModel.filteredItems = ko.computed(function() {
      var filter = filter().toLowerCase();
      if (!filter) {
          return this.locationList();
      } else {
          return ko.utils.arrayFilter(this.locationList(), function(item) {
              //return ko.utils.stringStartsWith(item.lastName().toLowerCase(), filter);
              return (item.title().toLowerCase().indexOf(filter) > -1);
          });
      }

  }, AppViewModel);



ko.applyBindings(new AppViewModel());
