app.controller('resetPasswordController', function($scope, APIFactory, sessionService, $rootScope, $location, $routeParams) {

      $scope.token = $routeParams.token;

      APIFactory.checkToken($scope.token).then(function (response){

      }, function (error){
        window.alert('Token has expired.');
        $location.path('/login');
      });

      $scope.resetPassword = function(user){
        $scope.token = $routeParams.token;
        $scope.p1 = user.password;
        $scope.p2 = user.password2;
        console.log('here');

        APIFactory.changePassword($scope.token, $scope.p1).then(function (response){
            console.log(response);
            $location.path('/');
        }, function (error){
          console.log(error);
        });

      }

});
