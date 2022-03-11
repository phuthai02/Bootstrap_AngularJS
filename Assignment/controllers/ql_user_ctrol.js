function ql_user($scope, $http) {
    const api = 'https://6211b1d901ccdac07428abe5.mockapi.io/api/users';
    $scope.users = [];
    $http.get(api)
        .then(function(response) {
            $scope.users = response.data;
        });
    $scope.begin = 0;
    $scope.getFirst = function() {
        $scope.begin = 0;
    }
    $scope.getLast = function() {
        $scope.begin = (Math.ceil($scope.users.length / 12) - 1) * 12;
    }
    $scope.getPrevious = function() {
        if ($scope.begin >= 12) {
            $scope.begin -= 12;
        }
    }
    $scope.getNext = function() {
        if ($scope.begin <= $scope.users.length - 12) {
            $scope.begin += 12;
        }
    }
}