app.controller('loginController', function($scope, APIFactory, sessionService, $rootScope, $location) {


  sessionService.removeSession();

  $scope.login = function(user){

    APIFactory.loginUser(user).then(function (response){
        var sesionObject  = response.data.session;
        sessionService.createStoredSession(sesionObject.session_key, sesionObject.session_id);
        $rootScope.redirect = $location.path();
        $location.path("/select");
      }, function (error){
          window.alert("Login Incomplete. Please Try again");
      });
  }

  $scope.resetForm = function(){
    $location.path("/reset");
  }

});
