/* WTF not working? import ko from 'knockout'; */
import ko from 'knockout';

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


ko.applyBindings(new AppViewModel());
