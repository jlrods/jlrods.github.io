menuApp.directive('menuItem', function () {
    return {
        restrict: 'E',
        scope: {
            item: '='
        },
        templateUrl: 'menuItem.html'
    };//End of return object
});//End of directive definition