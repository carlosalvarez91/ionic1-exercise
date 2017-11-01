angular.module('starter.services', [])


.factory('User', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var userDetails = [{
    "name": "Vin Diesel",
    "address": "123 Main Street, Uzbekistan"
  }]

  return {
    all: function() {
      return userDetails;
    }
  };
});
