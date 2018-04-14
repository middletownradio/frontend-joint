app.controller('ForgotPasswordController', function($scope, APIFactory, $rootScope) {

    $scope.sentEmail = false;

      $scope.resetPassword = function(email){

        APIFactory.sendEmail(email).then(function (response){
            $scope.sentEmail = true;
        }, function(error){
          window.alert("Login Incomplete. Please Try again");
        });
      }

    // }
});
