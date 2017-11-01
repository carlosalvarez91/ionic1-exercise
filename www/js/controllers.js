angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

// mapbox controller
.controller('AttachPopupMarkerController', ['$scope', function ($scope) {
  function createElement (iconSize) {
    var element = document.createElement('div');
    element.style.backgroundImage = 'url(https://placekitten.com/g/' + iconSize.width + '/' + iconSize.height + '/)';
    element.style.width = iconSize.width + 'px';
    element.style.height = iconSize.height + 'px';
    element.style.borderRadius = '50%';

    return element;
  }

  $scope.glMarkers = [
    {
      //pass this coordinates from url(https://ecroi-test-api.rentalmatix.com/v1/interview/coordinates)
      //again CORS issue
      coordinates: [53.3498007, 53.3498007],
      element: createElement({
        width: 50,
        height: 50
      }),
      popup: {
        enabled: true,
        onClick: {
          coordinates: 'center',
          message: 'Marker 1 Message'
        }
      }
    }
  ];
}])
.controller('CategoriesCtrl', function($scope) {})

/*user controller using the url provided (CORS issue: 401(Unauthorized))
.controller('UserCtrl', function($scope, $http) {
  var url = 'https://ecroi-test-api.rentalmatix.com/v1/interview/user';
  $http.get(url)
  .success(function(response) {
    $scope.user = response.data;
    console.log($scope.user);
    });
})*/

//user controller using the json data at services.js
.controller('UserCtrl', function($scope, User) {
  $scope.user = User.all();
  console.log($scope.user[0]);
})

.controller('SettingsCtrl', function($scope) {});
