function lichsu_baithi($scope, $http, $routeParams) {
    $scope.maMon = $routeParams.maMon;
    const apiLST = "https://62152dd6cdb9d09717b0c37f.mockapi.io/api/lichsuthi";
    const apiUser = "https://6211b1d901ccdac07428abe5.mockapi.io/api/users";
    $scope.list_lst = [];
    $scope.list_user = [];
    $scope.lsbt = {};
    $scope.list_lsbt = [];
    $scope.syso = "";
    $scope.count = 0;
    $scope.countThi = 0;
    $http.get(apiLST)
        .then(function(response) {
            $scope.list_lst = response.data;
            $http.get(apiUser)
                .then(function(response) {
                    $scope.list_user = response.data;
                    for (let i = 0; i < $scope.list_lst.length; i++) {
                        if ($scope.list_lst[i].monThi == $scope.maMon) {
                            $scope.lsbt.userName = $scope.list_lst[i].userName;
                            for (let j = 0; j < $scope.list_user.length; j++) {
                                if ($scope.list_user[j].userName == $scope.lsbt.userName) {
                                    $scope.lsbt.fullName = $scope.list_user[j].fullname;
                                }
                            }
                            for (let j = 0; j < $scope.list_lst[i].result.length; j++) {
                                if ($scope.list_lst[i].result[j].Status) {
                                    $scope.count++;
                                }
                            }
                            $scope.lsbt.diem = $scope.count;
                            $scope.lsbt.thoiGian = $scope.list_lst[i].time;
                            $scope.list_lsbt.push(angular.copy($scope.lsbt));
                            $scope.count = 0;
                            $scope.countThi++;
                        }
                    }
                    $scope.syso = $scope.countThi + "/" + ($scope.list_user.length - 1);
                })
        })
}