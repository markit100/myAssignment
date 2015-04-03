angular.module('calorific', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {
  
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');
    
    $stateProvider
    
    // setup an abstract state for the tabs directive
    .state('tab', {
      url: '/tab',
      templateUrl: 'templates/tabs.html'
    })
    
    .state('tab.about', {
      url: '/about',
      views: {
        'about-tab': {
          templateUrl: 'templates/about.html'
        }
      }
    })
    
    .state('tab.contact', {
      url: '/contact',
      views: {
        'contact-tab': {
          templateUrl: 'templates/contact.html'
        }
      }
    })
    
    // this is the food selection type
    .state('state1', {
        url: '/',
        templateUrl: 'templates/state1.html'
    })

    // this is the food and weights
    .state('state2', {
        url: '/state2',
        templateUrl: 'templates/state2.html'
    })

    // this is the weight counter
    .state('state3', {
        url: '/state3',
        templateUrl: 'templates/state3.html'
    });
    
})