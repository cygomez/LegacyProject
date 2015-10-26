// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}])
.controller('View1Ctrl', ['$scope', function($scope) {

 $scope.loginFacebook = function() {
  // $facebook.login({scope:'email'}).then(function(response) {
  //   $scope.me();
  // },
  // function(response) {
  //   console.log("Error!", response);
  // });
    console.log("I work");
  };
  $scope.me = function() {
    $facebook.api('/me', {fields: 'id, name, email, username'}).then(function(response) {
      Auth.loginFacebook(response).then(function() {
        $location.path('/');
      });
    });
  };

}]);


