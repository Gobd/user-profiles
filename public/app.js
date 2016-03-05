angular.module('userProfiles', ['ui.router'])

.config(function( $stateProvider, $urlRouterProvider ) {

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: './views/home.html',
		controller: 'mainCtrl'
	})
	.state('profile', {
		url: '/profile',
		'templateUrl': './views/profile.html',
		controller: 'profileCtrl',
		resolve: {
			userInfo: function(friendService) {
				return friendService.getFriends();
			}
		}
	})
	.state('friends', {
		url: '/friends',
		'templateUrl': './views/profile.html',
		controller: function($scope, friendList, friendService){
				$scope.friends = friendList;
						$scope.flip = function(a){
							a.hide = true;
							friendService.addFriend(a);
							};
		},
		resolve: {
			friendList: function(friendService) {
				return friendService.getAllFriends();
			}
		}
	});

	$urlRouterProvider.otherwise('/');

});
