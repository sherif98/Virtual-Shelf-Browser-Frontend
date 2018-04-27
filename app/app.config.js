'use strict';

angular.
  module('bookcatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/books', {
          template: '<book-list></book-list>'
        }).
        when('/books/:bookId/:ownerId', {
          template: '<book-detail></book-detail>'
        }).
        when('/login', {
          template: '<log-in></log-in>'
        }).
        when('/signup', {
          template: '<sign-up></sign-up>'
        }).
        when('/admin', {
          template: '<manage-users></manage-users>'
        }).
        when('/library', {
          template: '<hamada></hamada>'
        }).
        otherwise('/login');
    }
  ]);
