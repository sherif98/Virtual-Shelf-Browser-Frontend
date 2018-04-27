'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('signUp').
  component('signUp', {
    templateUrl: 'sign-up/sign-up.template.html',
    controller: ['$http', '$window',
      function SignUpController($http, $window) {
        var self = this;
        self.signup = function signup() {
          var req = {
            method: 'POST',
            url: 'http://localhost:8080/user',
            data: { userName: self.username, password: self.pwd, authorityLevel: 'NORMAL_USER' }
          }
          self.errMessage = "";
          $http(req).then(
            function(response) {
              console.log(response.status);
              self.errMessage = "";
              $window.location.href = '#!/login';
            },
            function(err){
              console.log(err.data);
              self.errMessage = err.data.message;
            }
          );
        };
      }
    ]
  });
