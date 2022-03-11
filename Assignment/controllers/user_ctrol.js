function user($scope, $routeParams, $http) {
    $scope.id = $routeParams.id;
    $scope.user = {};
    $scope.message = "";
    $scope.title = "";
    $scope.action = true;
    const api = "https://6211b1d901ccdac07428abe5.mockapi.io/api/users";
    $http.get(api + "/" + $scope.id)
        .then(function(response) {
            $scope.user = response.data;
        })
    $scope.onHuy = function() {
        window.location.assign("/main.html#/ql_user");
    }
    $scope.deLeTe = function(id) {
        $http.delete(api + "/" + id)
            .then(function(response) {
                window.location.assign("/main.html#/ql_user");
            })
    }
    $scope.onDelete = function() {
        $scope.title = "Cảnh báo xóa người dùng";
        $scope.message = "Bạn có chắc muốn xóa người dùng này?";
        $scope.action = "x";
        $('#exampleModal').modal('show');
    }
    $scope.onSave = function() {
        $scope.title = "Cảnh báo cập nhật người dùng";
        $scope.message = "Bạn có chắc muốn thay đổi người dùng này?";
        $scope.action = "s";
        $('#exampleModal').modal('show');
    }
    $scope.Save = function(id) {
        $http.put(api + "/" + id, $scope.user)
            .then(function(response) {
                window.location.assign("/main.html#/ql_user");
            })
    }

}