angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, Tests, $ionicLoading) {
  $scope.showSpinner = function() {
    $ionicLoading.show({
      template: '<ion-spinner></ion-spinner>',
      duration: 3000
    });
  }

  var PRODUCT_CONTENT_TYPE_ID = 'test';

  Tests.all(PRODUCT_CONTENT_TYPE_ID).then(function(entries) {
    $scope.tests = entries.items;
    $ionicLoading.hide();
  });

})

.controller('TestDetailCtrl', function($scope, $stateParams, Tests, $ionicLoading, $timeout) { 
  var ENTRY_ID = $stateParams.testId;
  $scope.showContent = true;

  Tests.get(ENTRY_ID).then(function(entry) {
    $scope.test = entry.fields;
    console.log(entry);
    getImage(entry.fields.photo.sys.id);
  });

  var getImage = function (imageId) {
    Tests.getAsset(imageId).then(function(asset) {
      $scope.test.photo = asset.fields.file.url;
      
      $timeout(function(){
        $ionicLoading.hide();
        $scope.showContent = false;
      }, 500);      
    });
  }

})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
