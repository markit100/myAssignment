// Ionic App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'calorific' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'calorific.services' is found in services.js
// 'calorific.controllers' is found in controllers.js

angular.module('calorific', ['ionic', 'calorific.services', 'calorific.controllers'])

.config(function ($stateProvider, $urlRouterProvider) {

    // using AngularUI Router which uses the concept of states
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
        .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })

    // the menu tab has its own child nav-view and history
    // home or index tab state
    .state('tab.menu-index', {
        url: '/menus',
        views: {
            'menus-tab': {
                templateUrl: 'templates/menu-index.html',
                controller: 'menuIndexCtrl'
            }
        }
    })

    // food detail tab state
    .state('tab.menu-detail', {
        url: '/menu/:menuId',
        views: {
            'menus-tab': {
                templateUrl: 'templates/menu-detail.html',
                controller: 'menuDetailCtrl'
            }
        }
    })

    // about this app tab state
    .state('tab.about', {
        url: '/about',
        views: {
            'about-tab': {
                templateUrl: 'templates/about.html'
            }
        }
    })

    // contact me tab state
    .state('tab.contact', {
        url: '/contact',
        views: {
            'contact-tab': {
                templateUrl: 'templates/contact.html'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/menus');

});