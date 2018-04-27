'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('hamada').
  component('hamada', {
    templateUrl: 'hamada/hamada.template.html',
    controller: ['$http', '$window',
      function HamadaController($http, $window) {
        var self = this;
        self.user = JSON.parse($window.localStorage.getItem("user"));

        self.add = function add() {
          var req = {
            method: 'POST',
            url: 'http://localhost:8080/book',
            data: { isbn: self.isbn, ownerId: self.user.id, libraryLocation: self.libraryLocation }
          }
          self.message = "";
          $http(req).then(
            function(response) {
              console.log(response.status);
              self.message = "Book Added Successfuly";
              self.isbn = "";
              self.libraryLocation = "";
            },
            function(err){
              self.message = err.data.message;
            }
          );
        };


      }
    ]
  });
