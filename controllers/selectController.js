app.controller('selectController', function($scope, APIFactory, $rootScope, $location) {

      $scope.sendToJoplin = function(){
        window.location = "http://willshare.com/cs495/ScottJoplinOnlineArchive";
      }
// http://localhost:8888/capstone-frontend/#/
      $scope.sendToMidwest = function(){
        window.location = "http://willshare.com/cs495/MidwestRadioPlayer/frontend/#/";
      }

      $scope.sendToSchool = function(){
        window.location = "http://willshare.com/cs495/OurPhoneSchool/";
      }

      $scope.manageUsers = function(){
        console.log('lol');
        $location.path("/users");
      }
});
