import ko from 'knockout';

// This is a simple *view model* - JavaScript that defines the data and behavior of your UI
function AppViewModel() {
    this.firstName = ko.observable("Bert");
    this.lastName = ko.observable("Bertington");

    this.fullName = ko.computed(function() {
    return this.firstName() + " " + this.lastName();}, this);
}

// Activates knockout.js
ko.applyBindings(new AppViewModel());
