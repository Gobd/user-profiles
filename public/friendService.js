angular.module('userProfiles')
.factory('friendService', function($http) {
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
      },

    getAllFriends: function() {
     return $http({
          method: 'GET',
          url: 'http://localhost:8080/api/friendlist',
        }).then(function(response){
          return response.data;
        });
      },

      addFriend: function(friend){
        return $http({
            method: 'POST',
            url: 'http://localhost:8080/addfriend',
            data: friend,
          });
      }

  };
});
