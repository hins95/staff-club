var app = angular.module('StaffClubApp', ['ngMaterial', 'ngRoute']);
app.config(function ($mdThemingProvider, $locationProvider, $routeProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('brown');

    $locationProvider.html5Mode(true);

    $routeProvider.
      when('/home', {
        templateUrl: 'home.html',
        controller: 'AppCtrl'
      }).
      when('/login', {
        templateUrl: 'login.html',
        controller: 'AppCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
})

    .controller('AppCtrl', function ($scope) {
})
    .controller('LinkMenuCtrl', function ($scope) {
    $scope.menuLinks = [
        {
            name: 'Home',
            href: 'index.html'
        },
        {
            name: 'Login',
            href: 'login.html'
        },
        {
            name: 'Register',
            href: 'reg.html'
        },
        {
            name: 'Sport Course',
            href: 'view-course.php?type=sport'
        }
    ];
})
    .controller('NavMenuCtrl', function ($scope) {
    $scope.menuLinks = [
        {
            name: 'Home page',
            href: 'home.html'
        },
        {
            name: 'Subject Search',
            href: 'search-subject.html'
        },
        {
            name: 'Study Information',
            href: 'study-info.html'
        },
        {
            name: 'Subject Registration',
            href: 'reg-subject.html'
        },
        {
            name: 'Timetable',
            href: 'timetable.html'
        }
    ];
});