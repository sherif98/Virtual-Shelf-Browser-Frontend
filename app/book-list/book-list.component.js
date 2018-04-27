'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('bookList').
  component('bookList', {
    templateUrl: 'book-list/book-list.template.html',
    controller: ['$http', '$window',
      function BookListController($http, $window) {
        var self = this;
        self.user = JSON.parse($window.localStorage.getItem("user"));
        
        console.log(self.user);
        $http.get("http://localhost:8080/book")
        .then(function(response) {
          // this callback will be called asynchronously
          // when the response is available
          self.books = response.data;

        });

        self.manageUsers = function manageUsers() {
          $window.location.href = '#!/admin';
        };

        self.manageLibraries = function manageLibraries() {
          $window.location.href = '#!/library';
        };
      }
    ]
  });
