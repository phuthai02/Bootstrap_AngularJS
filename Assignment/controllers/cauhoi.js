function cauhoi($scope, $http, $routeParams) {
    $scope.maMon = $routeParams.maMon;
    const api = "js/Quiz/" + $scope.maMon + ".js";
    $scope.list_answer = [];
    $scope.answer = {};
    $http.get(api)
        .then(function(response) {
            $scope.list_answer = response.data;
        })
    $scope.begin = 0;
    $scope.isEdit = false;
    $scope.id = "";
    $scope.title = "";
    $scope.message = "";
    $scope.action = true;
    $scope.index = 0;
    $scope.getFirst = function() {
        $scope.begin = 0;
    }
    $scope.getLast = function() {
        $scope.begin = (Math.ceil($scope.list_answer.length / 12) - 1) * 12;
    }
    $scope.getPrevious = function() {
        if ($scope.begin >= 12) {
            $scope.begin -= 12;
        }
    }
    $scope.getNext = function() {
        if ($scope.begin <= $scope.list_answer.length - 12) {
            $scope.begin += 12;
        }
    }
    $scope.fillToForm = function(id) {
        $scope.isEdit = true;
        $scope.id = id;
        for (let i = 0; i < $scope.list_answer.length; i++) {
            if ($scope.list_answer[i].Id == id) {
                $scope.index = i;
                $scope.answer = angular.copy($scope.list_answer[i]);
            }
        }
    }
    $scope.delete = function() {
        $scope.title = "Cảnh báo xoá câu hỏi";
        $scope.message = "Bạn có chắc muốn xoá câu hỏi này?";
        $scope.action = true;
        $('#exampleModal').modal('show');
    }
    $scope.update = function() {
        $scope.title = "Cảnh báo cập nhật câu hỏi";
        $scope.message = "Bạn có chắc muốn chỉnh sửa câu hỏi này?";
        $scope.action = false;
        $('#exampleModal').modal('show');
    }
    $scope.onDelete = function() {
        $scope.list_answer.splice($scope.index, 1);
        $('#staticBackdrop').modal('show');
        $scope.reset();
    }
    $scope.onUpdate = function() {
        $scope.list_answer[$scope.index] = angular.copy($scope.answer);
        $('#staticBackdrop').modal('show');
        $scope.reset();
    }
    $scope.reset = function() {
        $scope.isEdit = false;
        $scope.id = "";
        $scope.answer = {};
    }
    $scope.onInsert = function() {
        $scope.list_answer.push($scope.answer);
        $('#staticBackdrop').modal('show');
        $scope.reset();
    }
}