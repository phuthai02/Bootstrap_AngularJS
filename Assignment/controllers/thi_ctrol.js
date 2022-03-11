function thi($rootScope, $routeParams, $http, $scope) {
    $rootScope.maMon = $routeParams.maMon;
    $rootScope.ds_cauhoi = [];
    $rootScope.cauhoi = {};
    $rootScope.idAnswer = [];
    $rootScope.begin = 0;
    $rootScope.ds_tl = [];
    $rootScope.tl = {};
    $rootScope.lichsuthi = {};
    $scope.title = "";
    $scope.message = "";
    $scope.action = true;
    $http.get("js/Quiz/" + $rootScope.maMon + ".js")
        .then(function(response) {
            $rootScope.ds_cauhoi = response.data;
            for (let i = 0; i < 10; i++) {
                let random = Math.floor(Math.random() * $rootScope.ds_cauhoi.length);
                $rootScope.idAnswer.push(random);
                $rootScope.tl.IdCauHoi = $rootScope.ds_cauhoi[random].Id;
                $rootScope.tl.IdTraLoi = "";
                $rootScope.tl.Status = false;
                $rootScope.ds_tl.push($rootScope.tl);
                $rootScope.tl = {};
            }
            $rootScope.getAnswer = function() {
                $rootScope.cauhoi = $rootScope.ds_cauhoi[$rootScope.idAnswer[$rootScope.begin]];
            }
            $rootScope.getAnswer();
        })
    $rootScope.nextAnswer = function() {
        if ($rootScope.begin < 9) {
            $rootScope.saveAnswer();
            $rootScope.begin++;
            $rootScope.getAnswer();
            if ($rootScope.ds_tl[$rootScope.begin].IdTraLoi != "") {
                $scope.result = $rootScope.ds_tl[$rootScope.begin].IdTraLoi;
            }
        }
    }
    $rootScope.preAnswer = function() {
        if ($rootScope.begin > 0) {
            $rootScope.saveAnswer();
            $rootScope.begin--;
            $rootScope.getAnswer();
            if ($rootScope.ds_tl[$rootScope.begin].IdTraLoi != "") {
                $scope.result = $rootScope.ds_tl[$rootScope.begin].IdTraLoi;
            }
        }
    }
    $rootScope.saveAnswer = function() {
        $rootScope.tl.IdCauHoi = $rootScope.cauhoi.Id;
        $rootScope.tl.IdTraLoi = $scope.result;
        $rootScope.tl.Status = $scope.result == $rootScope.cauhoi.AnswerId;
        $rootScope.ds_tl[$rootScope.begin] = $rootScope.tl;
        $scope.result = "";
        $rootScope.tl = {};
    }
    $rootScope.onHuyThi = function() {
        window.location.assign("/main.html#/baithi");
    }
    $rootScope.onNopBai = function() {
        $rootScope.saveAnswer();
        $rootScope.lichsuthi.userName = $rootScope.isLogin;
        $rootScope.lichsuthi.monThi = $rootScope.maMon;
        $rootScope.lichsuthi.result = $rootScope.ds_tl;
        $scope.lichsuthi.time = new Date();
        $http.post("https://62152dd6cdb9d09717b0c37f.mockapi.io/api/lichsuthi", $rootScope.lichsuthi)
            .then(function(response) {
                console.log(response);
                $rootScope.lichsuthi = {};
                $rootScope.onHuyThi();
            })

    }
    $scope.nopBai = function() {
        $scope.title = "Cảnh báo nộp bài";
        $scope.message = "Bạn có chắc muốn nộp bài thi?";
        $scope.action = true;
        $('#exampleModal').modal('show');
    }
    $scope.dungThi = function() {
        $scope.title = "Cảnh báo dừng thi";
        $scope.message = "Bạn có chắc muốn dừng bài thi?";
        $scope.action = false;
        $('#exampleModal').modal('show');
    }
}