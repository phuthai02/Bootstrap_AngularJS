function ketquathi($scope, $rootScope, $http, $routeParams) {
    const apiLST = 'https://62152dd6cdb9d09717b0c37f.mockapi.io/api/lichsuthi';
    $scope.maMon = $routeParams.maMon;
    $scope.results = [];
    $scope.list_answer = [];
    $scope.rs = {};
    $scope.ketqua = {};
    $scope.danhsach_ketqua = [];
    $scope.diem = 0;
    $http.get("js/Quiz/" + $scope.maMon + ".js")
        .then(function(response) {
            $scope.list_answer = response.data;
        });
    $http.get(apiLST)
        .then(function(response) {
            $scope.results = response.data;
            for (let i = 0; i < $scope.results.length; i++) {
                if ($scope.results[i].monThi == $scope.maMon && $scope.results[i].userName == $rootScope.isLogin) {
                    $scope.rs = $scope.results[i].result;
                }
            }
            for (let i = 0; i < $scope.rs.length; i++) {
                for (let j = 0; j < $scope.list_answer.length; j++) {
                    if ($scope.rs[i].IdCauHoi == $scope.list_answer[j].Id) {
                        $scope.ketqua.CauHoi = $scope.list_answer[j].Text;
                        for (let z = 0; z < $scope.list_answer[j].Answers.length; z++) {
                            if ($scope.list_answer[j].Answers[z].Id == $scope.rs[i].IdTraLoi) {
                                $scope.ketqua.TraLoi = $scope.list_answer[j].Answers[z].Text;
                            }
                            if ($scope.rs[i].IdTraLoi == "") {
                                $scope.ketqua.TraLoi = "Chưa trả lời";
                            }
                        }
                        $scope.ketqua.DanhGia = $scope.rs[i].Status;
                        $scope.danhsach_ketqua.push(angular.copy($scope.ketqua));
                    }
                }
            }
            console.log($scope.rs)
            for (let i = 0; i < $scope.rs.length; i++) {
                if ($scope.rs[i].Status) {
                    $scope.diem++;
                }
            }
        });

}