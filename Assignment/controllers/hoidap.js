function hoidap($scope, $http, $rootScope) {
    const api = 'https://62222975666291106a1ef1a7.mockapi.io/api/baiviet';
    $scope.list_post = [];
    $scope.p_comment = {};
    $scope.post = {};
    $http.get(api)
        .then(function(response) {
            $scope.list_post = response.data;
        })
    $scope.onSend = function(id) {
        for (let i = 0; i < $scope.list_post.length; i++) {
            if ($scope.list_post[i].id == id) {
                $scope.post = $scope.list_post[i];
            }
        }
        $scope.p_comment.cm_user = $rootScope.isLogin;
        $scope.post.comment.push(angular.copy($scope.p_comment));
        $http.put(api + "/" + id, $scope.post)
            .then(function(response) {
                console.log(response);
            })
        $scope.post = {};
        $scope.p_comment = {}
    }

    $scope.onInsertPost = function() {
        $('#exampleModal').modal('show');
    }
    $scope.onInsert = function() {
        $scope.post.username = $rootScope.isLogin;
        $scope.post.time = new Date();
        $scope.post.like = 0;
        $scope.post.share = 0;
        $scope.post.comment = [];
        $http.post(api, $scope.post)
            .then(function(response) {
                console.log(response);
                $scope.list_post.push(angular.copy($scope.post));
                $scope.post = {};
                $('#exampleModal').modal('hide');
            })
    }


}