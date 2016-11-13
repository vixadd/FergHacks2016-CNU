angular.module('starter.controllers', ['rapunzel.services'])

.controller('loginSpoofCtrl', function($state, $scope) {
  $scope.goHome = function(){
  $state.go('app.home');
}
})

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

  .service('sharedProperties', function () {
    var property = [];

    return {
      getProperty: function () {
        return property;
      },
      setProperty: function(value) {
        property = value;
      }
    };
  })

  .controller('TicketsCtrl', ['$scope', 'tickets', 'sharedProperties', function($scope, tickets, shared) {
    tickets.success(function(data) {
      $scope.tickets = data;
      shared.setProperty(data);
    });
  }])

  .controller('TicketCtrl', ['$scope', 'sharedProperties', '$stateParams', function($scope, shared, $stateParams) {
    var obj = shared.getProperty();
    for (var i = 0; i < obj.length; i++) {
      if (obj[i].id == $stateParams.ticketId) $scope.ticket = obj[i];
    }
  }])

  .controller('PlaylistCtrl', function($scope, $stateParams) {

  })


// Define a controller to use the promised service
  .controller('NavCtrl', function ($scope, $cordovaLaunchNavigator) {
    $scope.formData = {
      dest: ""
    };

    $scope.navigate = function () {
      
      if($scope.ticket)
        $scope.formData.dest = $scope.ticket.location;

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
