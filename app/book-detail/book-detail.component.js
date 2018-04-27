'use strict';

// Register `bookDetail` component, along with its associated controller and template
angular.
  module('bookDetail').
  component('bookDetail', {
    templateUrl: 'book-detail/book-detail.template.html',
    controller: ['$routeParams', '$http',
      function BookDetailController($routeParams, $http) {
        var self = this;
        var req = {
          method: 'GET',
          url: 'http://localhost:8080/book',
          params: { isbn: $routeParams.bookId , ownerId: $routeParams.ownerId}
        }
        $http(req).then(
          function(response) {
            // this callback will be called asynchronously
            // when the response is available
            self.book = response.data;
          }
        );
      }
    ]
  });
