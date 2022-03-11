function footer($scope, $http) {
    $scope.coso = [];
    $scope.nganh = []
    const api_coso = "https://6211b1d901ccdac07428abe5.mockapi.io/api/footer_coso";
    const api_nganh = "https://6211b1d901ccdac07428abe5.mockapi.io/api/footer_nganh";
    $http.get(api_coso)
        .then(function(response) {
            $scope.coso = response.data;
        })
    $http.get(api_nganh)
        .then(function(response) {
            $scope.nganh = response.data;
        })
}