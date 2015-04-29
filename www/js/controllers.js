// angular.module is a global place for creating, registering and retrieving Angular modules
// 'calorific' is the name of this angular module example (also set in a <body> attribute in index.html)

angular.module('calorific.controllers', [])


// A simple controller that fetches a list of data from a service
.controller('menuIndexCtrl', function ($scope, menuService) {
    // "menus" is a service returning mock data (services.js)
    $scope.menus = menuService.all();
})


// A simple controller that shows a tapped item's data
.controller('menuDetailCtrl', function ($scope, $stateParams, menuService) {
    // "menus" is a service returning mock data (services.js)
    $scope.menu = menuService.get($stateParams.menuId);
});