angular.module('userProfiles')
.factory('friendService', function($http, $q) {
  return {

    login: function(user) {
      return $http({
          method: 'POST',
          url: 'http://localhost:8080/api/login',
          data: user,
        });
            },


    getFriends: function() {
     return $http({
          method: 'GET',
          url: 'http://localhost:8080/api/login',
        }).then(function(response){
          return response.data;
        });
            }

  };
});
