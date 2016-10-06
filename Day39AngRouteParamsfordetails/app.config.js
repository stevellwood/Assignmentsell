appMod

	.config(['$routeProvider', function($routeProvider) {

		$routeProvider
		.when('/', {
			templateUrl: 'views/home.view.html'

		}).when('/student', {
			templateUrl: 'views/student.view.html',
			controller: 'AppCtrl',
			controllerAs: 'ctrl'

		}).when('/student/:studentId', {//even thugoh defined above, this could take any garbae afterstudent/ it will forward to an empty details page
			
			templateUrl: 'views/detail.view.html',
			controller: 'AppCtrl',
			controllerAs: 'ctrl'
//Ok. So we've got this parameter, now what can we do with it? We would like to get that value into our model so when the view (i.e. html fragment) displays, it can be processed and display that student with that id. To do this, we need to make a change to our controller to give it access to the $routeParams object.
		}).when('/about', {
			templateUrl: 'views/about.view.html'

		})
		.otherwise({redirectTo: '/'});

	}]) // end config

; 