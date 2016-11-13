angular.module('starter.controllers', ['rapunzel.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Help! My Fosset broke', id: 1 },
    { title: 'Help! My garden hose is choking me', id: 2 },
    { title: 'Help! Im butt hurt', id: 3 },
    { title: ':(', id: 4 },
    { title: 'AHHHHHHHHHHHH', id: 5 },
    { title: 'Help! I suck at Angular.JS', id: 6 }
  ];
})


.controller('TicketsCtrl', ['$scope', function($scope, tickets) {
  tickets.success(function(data) {
    $scope.tickets = data;
  })
  }])

  .controller('TicketCtrl', function($scope, $stateParams) {})

  .controller('PlaylistCtrl', function($scope, $stateParams) {})


  .controller('PlaylistCtrl', function($scope, $stateParams) {

  })


// Define a controller to use the promised service
  .controller('NavCtrl', function ($scope, $cordovaLaunchNavigator) {
    $scope.formData = {
      dest: "Westminster, London, UK"
    };

    // $scope.$watch('formData', function (formData) {
    //   if(formData.start != "custom" || formData.custom_start){
    //     $('#start .custom input').removeClass('error');
    //   }
    //   if(formData.dest != "custom" || formData.custom_dest){
    //     $('#dest .custom input').removeClass('error');
    //   }
    // }, true);

    $scope.navigate = function () {

      // Validate
      if($scope.formData.start == "custom" && !$scope.formData.custom_start){
        $('#start .custom input').addClass('error');
        return;
      }

      if($scope.formData.dest == "custom" && !$scope.formData.custom_dest){
        $('#dest .custom input').addClass('error');
        return;
      }

      var start = $scope.formData.start == "custom" ? $scope.formData.custom_start : $scope.formData.start,
        dest = $scope.formData.dest == "custom" ? $scope.formData.custom_dest : $scope.formData.dest;

      $cordovaLaunchNavigator.navigate(dest, {
        start: start,
        enableDebug: true
      }).then(function () {
        alert("Navigator launched");
      }, function (err) {
        alert(err);
      });
    };

  });
