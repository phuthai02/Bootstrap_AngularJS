function dangky($rootScope, $http) {
    $rootScope.user = {};
    $rootScope.users = [];
    const api = "https://6211b1d901ccdac07428abe5.mockapi.io/api/users";
    $http.get(api)
        .then(function(response) {
            $rootScope.users = response.data;
        })
        .catch(function(error) {
            console.log(error);
        })
    $rootScope.click_dangky = function() {
        $http.post(api, $rootScope.user)
            .then(function(response) {
                console.log(response);
            })
    }
    $rootScope.onLogin = function() {
        window.location.assign('/main.html#/dangnhap');
        $rootScope.user = {};
    }


}