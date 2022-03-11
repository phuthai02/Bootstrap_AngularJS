function trangchu($scope, $http) {
    const api = "https://6211b1d901ccdac07428abe5.mockapi.io/api/trangchu_slide";
    const apiMon = "https://62152dd6cdb9d09717b0c37f.mockapi.io/api/trangchu_monhoc";
    const apiDev = "https://62152dd6cdb9d09717b0c37f.mockapi.io/api/trangchu_dev";
    $scope.slides = [];
    $scope.mons = [];
    $scope.devs = [];
    $http.get(api)
        .then(function(response) {
            $scope.slides = response.data;
        })
        .catch(function(error) {
            console.log(error);
        })
    $http.get(apiMon)
        .then(function(response) {
            $scope.mons = response.data;
        })
        .catch(function(error) {
            console.log(error);
        })
    $http.get(apiDev)
        .then(function(response) {
            $scope.devs = response.data;
        })
        .catch(function(error) {
            console.log(error);
        })

}