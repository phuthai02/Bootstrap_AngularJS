function dangnhap($scope, $rootScope, $http) {
    const api = 'https://6211b1d901ccdac07428abe5.mockapi.io/api/users';
    $rootScope.users = [];
    $rootScope.isLogin = '';
    $http.get(api)
        .then(function(response) {
            $rootScope.users = response.data;
        })
        .catch(function(error) {
            console.log(error);
        })
    $rootScope.checkLogin = function() {
        for (let i = 0; i < $rootScope.users.length; i++) {
            if ($scope.userName == $rootScope.users[i].userName && $scope.passWord == $rootScope.users[i].passWord) {
                $rootScope.isLogin = $scope.userName;
                window.location.assign('/main.html#/');
                break;
            }
        }
        if ($rootScope.isLogin == '') {
            $('#exampleModal').modal('show');
        }
    }
    $rootScope.onForgot = function() {
        window.location.assign('/main.html#/quenmatkhau');
    }
    $rootScope.logout = function() {
        $rootScope.isLogin = '';
    }
}