function diem($scope, $http, $rootScope) {
    const apiLST = "https://62152dd6cdb9d09717b0c37f.mockapi.io/api/lichsuthi";
    const apiMon = "https://62152dd6cdb9d09717b0c37f.mockapi.io/api/quiz_monthi";
    $rootScope.LST_list = [];
    $rootScope.Mon_list = [];
    $rootScope.danhsach_LSD = [];
    $rootScope.LSD = {};
    $scope.count = 0;
    $http.get(apiLST)
        .then(function(response) {
            $rootScope.LST_list = response.data;
            $http.get(apiMon)
                .then(function(response) {
                    $rootScope.Mon_list = response.data;
                    for (let i = 0; i < $rootScope.LST_list.length; i++) {
                        if ($rootScope.LST_list[i].userName == $rootScope.isLogin) {
                            for (let j = 0; j < $rootScope.Mon_list.length; j++) {
                                if ($rootScope.LST_list[i].monThi == $rootScope.Mon_list[j].maMon) {
                                    $rootScope.LSD.tenMon = $rootScope.Mon_list[j].tenMon;
                                }
                            }
                            for (let j = 0; j < $rootScope.LST_list[i].result.length; j++) {
                                if ($rootScope.LST_list[i].result[j].Status) {
                                    $scope.count++;
                                }
                            }
                            $rootScope.LSD.diemThi = $scope.count;
                            $rootScope.LSD.thoiGian = $rootScope.LST_list[i].time;
                            $rootScope.danhsach_LSD.push(angular.copy($rootScope.LSD));
                            $scope.count = 0;
                        }
                    }
                    console.log($rootScope.danhsach_LSD)
                })

        })



}