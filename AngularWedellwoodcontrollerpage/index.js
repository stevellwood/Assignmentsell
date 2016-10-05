angular.module("AppMod", ["ngRoute"])///this is new feature
	.controller("AppCtrl", ['$http', function($http) {
		var self = this;//?Why are we using this again? Something to do with scope and preventing hijacking
//similar to this. in java the current instance of object/connectionwe are working with
		$http.get('http://localhost:8080/student')  //this gets the json data
		///this will not work if the server from spring is not running
			.then(function(resp){
				self.students = resp.data;  ///why need to say .data? Otherwise what get
				console.log("resp is  " + resp);
			},function(err) {

			});

	}])
	.config(['$routeProvider', function($routeProvider) {
//the # is a angular requireent to make router work
		$routeProvider
		.when('/', {
			templateUrl: 'views/home.view.html'

		}).when('/student', {
			templateUrl: 'views/student.view.html',
			controller: 'AppCtrl',
			controllerAs: 'ctrl'

		}).
		when('/student1', {
			templateUrl: 'views/student1.view.html',
			controller: 'AppCtrl',
			controllerAs: 'ctrl'

		}).
		when('/about', {
			templateUrl: 'views/about.view.html'

		})
		.otherwise({redirectTo: '/'});

	}]); // end config