menuApp.controller('MenuController', ['$scope', function ($scope) {
    $scope.subMenus = [
        {
            title: 'Home',
            icon: 'home.png',
            templateUrl: 'index.html'
        },
        {
            title: 'Education',
            icon: 'education.png',
            templateUrl: 'Education.html'
        },
        {
            title: 'Career',
            icon: 'career.png',
            templateUrl: 'Career.html'
        },
        {
            title: 'My Interests',
            icon: 'interests.png',
            templateUrl: 'MyInterests.html'
        },
        {
            title: 'Contact me',
            icon: 'contact.png',
            templateUrl: 'ContactMe.html'
        }
    ];//End of array of data
    $scope.text = 'Jose Leonardo';
    $scope.url = 'header.html';
    }
]);//End of menu controller definition