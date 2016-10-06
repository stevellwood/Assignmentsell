appMod

	.controller("AppCtrl", ['$http', '$routeParams', function($http, $routeParams) {
		var self = this;
		//console.log($routeParams);
		self.id = $routeParams.studentId;

		$http.get('http://localhost:8080/student')
			.then(function(resp){
				self.students = resp.data;
			},function(err) {

			});

		$http.get('http://localhost:8080/student/'+self.id)
			.then(function(resp){
				self.student = resp.data;
			},function(err) {

			});

	}]) // end controller
	

;// end all 