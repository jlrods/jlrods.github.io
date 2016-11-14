menuApp.controller('MenuController', ['$scope', function ($scope) {
    $scope.subMenus = [
        {
            title: 'Home',
            icon: 'home.png'
        },
        {
            title: 'Education',
            icon: 'education.png'
        },
        {
            title: 'Career',
            icon: 'career.png',
        },
        {
            title: 'My Interests',
            icon: 'interests.png'
        },
        {
            title: 'Contact me',
            icon: 'contact.png'
        }
    ];//End of array of data
    $scope.text = 'Jose Leonardo'
    }
]);//End of menu controller definition