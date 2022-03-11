function baithi($scope, $http, $rootScope) {
    const api = "https://62152dd6cdb9d09717b0c37f.mockapi.io/api/quiz_monthi";
    $scope.monThis = [];
    $scope.results = [];
    $scope.maMonXoa = "";
    $http.get(api)
        .then(function(response) {
            $scope.monThis = response.data;
        })
    $http.get("https://62152dd6cdb9d09717b0c37f.mockapi.io/api/lichsuthi")
        .then(function(response) {
            $scope.results = response.data;
        })
    $scope.checkExam = function(maMon) {
        $scope.count = 0;
        for (let i = 0; i < $scope.results.length; i++) {
            if ($scope.results[i].monThi == maMon && $scope.results[i].userName == $rootScope.isLogin) {
                $scope.count++;
            }
        }
        if ($scope.count == 0) {
            return "s";
        } else {
            return "x";
        }
    }
    $scope.xoaBai = function(maMon) {
        $scope.maMonXoa = maMon;
        $("#staticBackdrop").modal('show');
    }
    $scope.onXoaBai = function() {
        for (let i = 0; i < $scope.monThis.length; i++) {
            if ($scope.monThis[i].maMon == $scope.maMonXoa) {
                $http.delete(api + "/" + $scope.monThis[i].id)
                    .then(function(response) {
                        window.location.assign('/main.html#/');
                        window.location.assign('/main.html#/baithi');
                    })
            }
        }
    }
}