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
            name: 'PolyU Calender',
            href: 'https://www.polyu.edu.hk/as/students/AC.pdf'
        },
        {
            name: 'PolyU Homepage',
            href: 'http://www.polyu.edu.hk/'
        },
        {
            name: 'Healthy LifeStyle',
            href: 'https://www40.polyu.edu.hk/saohls/'
        },
        {
            name: 'Debit Note Info',
            href: 'http://www.polyu.edu.hk/fo/internet/student/'
        }
    ];
})
    .controller('NavMenuCtrl', function ($scope) {
    $scope.menuLinks = [
        {
            name: 'Home page',
            href: 'home.html'
        },
        //            {
        //                name: 'Login page',
        //                href: 'login.html'
        //            },
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