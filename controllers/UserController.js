app.controller('UserController', function($scope, APIFactory, $rootScope, $route) {

    //todo Make the page reset if they do a functionality thing....


      APIFactory.checkSession().then(function (response){
        console.log(response);
        $scope.user_id = response.data.user_id;
        // localStorage.setItem("user_id", response.data.user_id);
      }, function(error){
        $rootScope.redirect = $location.path();
        window.location = "http://willshare.com/cs495/admin/frontend/#/"
      });


      $scope.newUserTable = false;

      $scope.makeAdmin = function (id){
        //SEND TO APIFactor
        // makeAdmin
        console.log('make admin');
        APIFactory.makeAdmin(id).then(function (response){

        });
        $route.reload();

      };

    $scope.deleteAdmin = function (id){

        APIFactory.deleteAdmin(id).then(function (response){

        });
        $route.reload();

    };

    $scope.deleteAdmin = function (id){
        //SEND TO APIFactor
        // no longer an admin
        console.log('delete admin');
        APIFactory.deleteAdmin(id).then(function (response){

        });
        $route.reload();

    };

      $scope.deleteUser = function (id){
        if(id.winner == 1){
          window.alert("Can not delete current admin");
        } else if($scope.user_id == id){
          window.alert("Current User. Can not delete");
        } else {
          if(confirm("Are you sure you want to delete user: ")){
            APIFactory.deleteUser(id).then(function (response){

            });
            $route.reload();
          }
        }

      };

      APIFactory.getUsers().then(function (response){
        console.log(response.data.Users);
        $scope.users = response.data.Users;
      });

      $scope.showNewUser = function(){
        $scope.newUserTable = true;

      };

      $scope.saveNewUser = function(newUser){
        // console.log(newUser);
        APIFactory.createNewUser(newUser).then(function (response){

        });
        $route. reload();
      }


});
