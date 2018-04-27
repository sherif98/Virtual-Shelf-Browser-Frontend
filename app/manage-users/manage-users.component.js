'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('manageUsers').
  component('manageUsers', {
    templateUrl: 'manage-users/manage-users.template.html',
    controller: ['$http', '$window',
      function ManageUsersController($http, $window) {
        var self = this;
        self.user = JSON.parse($window.localStorage.getItem("user")); 
        self.promote = function promote(user, auth) {
          var req = {
            method: 'PUT',
            url: 'http://localhost:8080/user',
            data: { requesterId: self.user.id, userName: user.userName, authorityLevel: auth }
          }
          $http(req).then(
            function(response) {
              console.log(response.data);
              self.errMessage = "";
              $window.location.reload();
            },
            function(err) {
              console.log(err.data);
              self.errMessage = err.data.message;
            }
          );
        };
        console.log(self.user);
        $http.get("http://localhost:8080/user")
        .then(function(response) {
          // this callback will be called asynchronously
          // when the response is available
          self.users = response.data;
        });
      }
    ]
  });
