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

app.controller('AppCtrl', function ($scope, $mdToast, $location, $http, $mdDialog) {
    $scope.staff_id = null;
    $http.get('metadata.php').
    success(function(data, status, headers, config) {
        $scope.staff_id = data.staff_id;
    });
    $scope.showMessageToast = function (message) {
        if (message == 'loginSuccess') {
            $mdToast.show(
                $mdToast.simple()
                .content('Login Success!')
                .position('top right')
                .action('OK')
                //).then($location.url('index.html?msg=loginSuccess'))
            ).then($scope.isLogin = true);
        } else if (message == 'loginError') {
            $mdToast.show(
                $mdToast.simple()
                .content('Login failed!')
                .position('top right')
                .action('OK')
            ).then($location.url('login.html?msg=loginError'));
        } else if (message == 'loginAlready') {
            var confirm = $mdDialog.alert()
            .title('Message')
            .content('You have already logged in.')
            .ariaLabel('Message - Login Already')
            .ok('Got it!');
            $mdDialog.show(confirm)
             //   .then(function() {
            //    $location.url('index.html');
            //}, function() {
            //    $location.url('index.html');
            //});
            ;
        }
    };
    $scope.isLogin = false;
    $scope.message = $location.search()['msg'];
    if ($scope.message) {
        $scope.showMessageToast($scope.message);
    }
})
    .controller('LoginCtrl', function ($scope, $mdToast, $http, $mdToast, $mdDialog, $location) {
    $scope.submit = function() {
        $http.post('login.php', {
            staff_id: $scope.login.staff_id,
            password: $scope.login.password
        }).
        success(function(data, status, headers, config) {
            $scope.showMessageToast(data);
        });
    };
})
.controller('ActListCtrl', function ($scope, $http) {
        $http.get('view-activity-list.php').
        success(function(data, status, headers, config) {
            $scope.actList = angular.fromJson(data);;
        });
})
    .controller('RegCtrl', function ($scope) {
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