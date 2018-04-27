'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('logIn').
  component('logIn', {
    templateUrl: 'log-in/log-in.template.html',
    controller: ['$http', '$window',
      function LogInController($http, $window) {
        var self = this;

        self.signup = function signup() {
          $window.location.href = '#!/signup';
        };
        self.login = function login() {
          var req = {
            method: 'GET',
            url: 'http://localhost:8080/user',
            params: { userName: self.username, password: self.pwd }
          }
          self.errMessage = "";
          $http(req).then(
            function(response) {
              // this callback will be called asynchronously
              // when the response is available
              console.log(response.status);
              self.errMessage = "";
              // $rootScope.user = response.data;
              $window.localStorage.setItem("user", angular.toJson(response.data));
              // $location.path("#!/books").replace();
              $window.location.href = '#!/books';
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
