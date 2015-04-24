var app = angular.module('StaffClubApp', ['ngMaterial']);
app.config(function ($mdThemingProvider, $locationProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('brown');

    $locationProvider.html5Mode(true);
})

    .controller('AppCtrl', function ($scope) {
})
    .controller('LinkMenuCtrl', function ($scope) {
    $scope.menuLinks = [
        {
            name: 'Home',
            href: 'index.php'
        },
        {
            name: 'Login',
            href: 'login.php'
        },
        {
            name: 'Register',
            href: 'reg.php'
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