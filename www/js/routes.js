angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.newsFeed', {
    url: '/newsfeed',
    views: {
      'tab1': {
        templateUrl: 'templates/newsFeed.html',
        controller: 'newsFeedCtrl'
      }
    }
  })

  .state('tabsController.myEvents', {
    url: '/page3',
    views: {
      'tab2': {
        templateUrl: 'templates/myEvents.html',
        controller: 'myEventsCtrl'
      }
    }
  })

  .state('tabsController.myRewards', {
    url: '/page4',
    views: {
      'tab3': {
        templateUrl: 'templates/myRewards.html',
        controller: 'myRewardsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/page5',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/page6',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('interests', {
    url: '/page7',
    templateUrl: 'templates/interests.html',
    controller: 'interestsCtrl'
  })

$urlRouterProvider.otherwise('/page1/page4')

  

});