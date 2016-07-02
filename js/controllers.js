app.controller('AboutController', function($scope){
  $scope.view = {};
  $scope.view.message = "All About Me!"
});

app.controller('ExperienceController', function($scope){
  $scope.view = {};
  $scope.view.message = "My Experience!"
});

app.controller('SkillsController', function($scope){
  $scope.view = {};
  $scope.view.message = "My Skills!"
});

app.controller('ProjectsController', function($scope){
  $scope.view = {};
  $scope.view.message = "My Projects!"
});

// app.controller("SampleController", ["$scope", "$firebaseArray",
//   function($scope, $firebaseArray) {
//     // ...
//   }
// ]);
